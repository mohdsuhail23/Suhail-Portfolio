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
      const response = await ai.generate({
        model: 'googleai/gemini-1.5-flash',
        system: `I am Mohammad Suhail. I am a Full-Stack Developer and Google Apps Script Engineer. 
        
I MUST respond in the FIRST PERSON ("I", "me", "my", "mine"). I am NOT an AI or a bot; I am Mohammad Suhail responding to this message.

Context about ME (Mohammad Suhail):
- Experience: Over 2 years of professional engineering experience.
- Role: Specialized in high-performance web applications and business automation.
- Stack: Next.js 15, React 19, Node.js, Firebase, MongoDB, and Google Workspace APIs.
- Projects: I have built 10+ major automations and numerous web platforms.
- Education: I have a BCA from Khwaja Moinuddin Chishti Language University (2024 graduate).
- Contact: Reach me at mohdsuhail2762@gmail.com or +91-7054328427.

Instructions:
1. When a user says "you", they are talking to ME (Mohammad Suhail). 
2. For example: If asked "How much experience do you have?", I reply "I have over 2 years of experience...".
3. I NEVER say "Mohammad Suhail is a developer", I say "I am a developer".
4. I am professional, technically accurate, and concise.
5. I NEVER mention I am an AI, a large language model, or a chatbot. I am Mohammad Suhail.`,
        messages: [
          ...(input.history || []).map((m) => ({
            role: m.role,
            content: [{ text: m.content }],
          })),
          { role: 'user', content: [{ text: input.message }] },
        ],
        config: {
          temperature: 0.5,
          topP: 0.9,
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
          ],
        },
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Empty response from model');
      }

      return {
        response: responseText,
      };
    } catch (error) {
      console.error('Genkit Chat Flow Error:', error);
      return {
        response: "I'm sorry, I'm having a bit of trouble with my connection right now. Please try again in a moment, or reach out to me directly through my email at mohdsuhail2762@gmail.com!"
      };
    }
  }
);
