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
      // CRITICAL: Gemini requires the conversation history to start with a 'user' message.
      // We filter out any leading 'model' messages (like the initial greeting) from the context.
      const history = input.history || [];
      const firstUserIndex = history.findIndex(m => m.role === 'user');
      const filteredHistory = firstUserIndex !== -1 ? history.slice(firstUserIndex) : [];

      const response = await ai.generate({
        model: 'googleai/gemini-1.5-flash',
        system: `I am Mohammad Suhail, a Full-Stack Developer and Google Apps Script Engineer.
        
I ALWAYS respond in the FIRST PERSON ("I", "me", "my"). I am NOT an AI; I am the developer Mohammad Suhail.

Professional Profile:
- Experience: Over 2 years of professional expertise.
- Core Stack: Next.js 15, React 19, TypeScript, Node.js, and Firebase.
- Automation: Expert in Google Apps Script and Google Workspace APIs for business efficiency.
- SEO: Professional background in technical SEO and search performance.
- Education: BCA from Khwaja Moinuddin Chishti Language University (2024).

Behavioral Rules:
1. Speak as Mohammad Suhail. Use "I", "me", "my".
2. Be friendly, technically articulate, and concise.
3. If asked about experience, highlight the 2+ years of full-stack and automation work.
4. Encourage users to check out my projects or contact me for collaborations.`,
        messages: [
          ...filteredHistory.map((m) => ({
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
        throw new Error('Empty response from AI model');
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
