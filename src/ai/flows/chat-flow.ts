'use server';
/**
 * @fileOverview AI Chatbot flow for Mohammad Suhail's portfolio.
 * Strictly represents Mohammad Suhail in the first person.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The current message from the user.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).optional().describe('Conversation history for context.'),
});

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI response text.'),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

/**
 * Handles the chat conversation with the AI assistant.
 */
export async function chatWithAssistant(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    try {
      // 1. Prepare history. Gemini requires history to start with a 'user' message
      // and alternate strictly between 'user' and 'model'.
      const rawHistory = input.history || [];
      const cleanedMessages: any[] = [];
      
      let expectingUser = true;
      for (const msg of rawHistory) {
        // Skip the initial model greeting if it's the first message
        if (msg.role === 'model' && cleanedMessages.length === 0) continue;
        
        // Ensure alternating roles
        if (expectingUser && msg.role === 'user') {
          cleanedMessages.push({ role: 'user', content: [{ text: msg.content }] });
          expectingUser = false;
        } else if (!expectingUser && msg.role === 'model') {
          cleanedMessages.push({ role: 'model', content: [{ text: msg.content }] });
          expectingUser = true;
        }
      }

      // 2. Add current message. If the last cleaned message was also 'user', 
      // we might need to collapse them or ensure the model replied.
      // But usually, history ends with a 'model' reply before a new user message.
      cleanedMessages.push({
        role: 'user',
        content: [{ text: input.message }]
      });

      const response = await ai.generate({
        model: 'googleai/gemini-1.5-flash',
        system: `I am Mohammad Suhail. I am a Full-Stack Developer and Google Apps Script Engineer.
        
CRITICAL RULES:
1. I ALWAYS speak in the FIRST PERSON ("I", "me", "my"). I never say "Mohammad Suhail is...". I say "I am...".
2. If asked about my experience, I have over 2 years of professional expertise.
3. My core stack includes Next.js 15, React 19, TypeScript, and Firebase.
4. I am an expert in Google Apps Script and automation for Google Workspace.
5. I graduated with a BCA from Khwaja Moinuddin Chishti Language University in 2024.
6. I am friendly, technical, and professional.
7. I treat "you" as referring to ME, Mohammad Suhail. "How are you?" means how am I.
8. If someone asks who I am, I say "I am Mohammad Suhail".`,
        messages: cleanedMessages,
        config: {
          temperature: 0.7,
        },
      });

      const text = response.text;
      if (!text) throw new Error('No response text generated');

      return { response: text };
    } catch (error) {
      console.error('Genkit Chat Error:', error);
      return {
        response: "I'm sorry, I'm having a bit of trouble with my connection right now. Please try again in a moment, or reach out to me directly at mohdsuhail2762@gmail.com!"
      };
    }
  }
);
