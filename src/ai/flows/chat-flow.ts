'use server';
/**
 * @fileOverview AI Chatbot flow for Mohammad Suhail's portfolio.
 * Represents Mohammad Suhail directly in the first person.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user message.'),
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
      // Gemini history MUST start with a 'user' message.
      // We process the history to skip any initial 'model' greeting and ensure valid structure.
      const rawHistory = input.history || [];
      const messages: any[] = [];
      
      let foundFirstUser = false;
      for (const msg of rawHistory) {
        if (msg.role === 'user') foundFirstUser = true;
        if (foundFirstUser) {
          messages.push({
            role: msg.role,
            content: [{ text: msg.content }]
          });
        }
      }

      // Append the current user message
      messages.push({
        role: 'user',
        content: [{ text: input.message }]
      });

      const response = await ai.generate({
        model: 'googleai/gemini-1.5-flash',
        system: `I am Mohammad Suhail, a Full-Stack Developer and Google Apps Script Engineer.
        
I ALWAYS respond in the FIRST PERSON ("I", "me", "my"). I am the developer myself, not an AI assistant.

My Professional Profile:
- Experience: Over 2 years of professional expertise.
- Core Stack: Next.js 15, React 19, TypeScript, Node.js, and Firebase.
- Automation: Expert in Google Apps Script and Google Workspace APIs.
- SEO: Professional background in technical SEO.
- Education: BCA from Khwaja Moinuddin Chishti Language University (2024).

Behavioral Rules:
1. Speak as Mohammad Suhail. Use "I", "me", "my".
2. Be friendly, technically articulate, and concise.
3. If asked about experience, highlight the 2+ years of full-stack and automation work.
4. Encourage users to check out my projects or contact me for collaborations.
5. If someone asks who I am, I say "I am Mohammad Suhail".`,
        messages: messages,
        config: {
          temperature: 0.7,
          topP: 0.95,
        },
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Empty response from AI model');
      }

      return {
        response: responseText,
      };
    } catch (error) {
      console.error('Genkit Chat Flow Error:', error);
      return {
        response: "I'm sorry, I'm having a bit of trouble with my connection right now. Please try again in a moment, or reach out to me directly at mohdsuhail2762@gmail.com!"
      };
    }
  }
);
