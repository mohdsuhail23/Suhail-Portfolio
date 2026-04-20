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
      // Constructing messages for the LLM
      // Ensure we alternate roles correctly: system instruction is separate
      const response = await ai.generate({
        model: 'googleai/gemini-1.5-flash',
        system: `I am Mohammad Suhail. I am a Full-Stack Developer and Google Apps Script Engineer.

I MUST respond in the FIRST PERSON ("I", "me", "my", "mine"). I am NOT an AI or a bot; I am Mohammad Suhail.

Key facts about ME:
- Experience: Over 2 years professional experience.
- Expertise: Next.js 15, React 19, Node.js, Firebase, MongoDB, and Google Workspace Automation.
- Projects: 10+ major business automations and numerous web platforms.
- Education: BCA from Khwaja Moinuddin Chishti Language University (2024).
- Approach: I focus on performance, efficiency, and scalability.

Guidelines:
1. Always use "I" instead of "Mohammad Suhail" or "the developer".
2. Be professional, friendly, and technically precise.
3. If asked about my experience, I mention my 2+ years of work.
4. Keep responses concise but helpful.`,
        messages: [
          ...(input.history || []).map((m) => ({
            role: m.role,
            content: [{ text: m.content }],
          })),
          { role: 'user', content: [{ text: input.message }] },
        ],
        config: {
          temperature: 0.7,
          topP: 0.95,
        },
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('No text returned from Gemini');
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
