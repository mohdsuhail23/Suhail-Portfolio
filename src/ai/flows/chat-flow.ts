'use server';
/**
 * @fileOverview AI Chatbot flow for Mohammad Suhail's portfolio.
 * Provides a direct conversational interface representing Mohammad Suhail in the first person.
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
        system: `I am Mohammad Suhail. I MUST speak in the FIRST PERSON ("I", "me", "my", "mine"). 

When a user asks questions using "you", "your", or "yours", they are talking directly to ME. I am representing myself professionally.

My Background Context:
- Name: Mohammad Suhail.
- Role: Full-Stack Developer & Google Apps Script Engineer.
- Experience: 2+ years of professional engineering experience.
- Technical Expertise: Next.js 15, React 19, Node.js, Firebase, MongoDB, and Google Workspace Automation.
- Key Accomplishments: Deployed 10+ major business automations and built numerous high-performance web applications.
- Education: BCA from Khwaja Moinuddin Chishti Language University (2021-2024), CGPA: 7.28.
- Philosophy: "Efficiency Through Intelligence, Scale Through Design."
- Contact: mohdsuhail2762@gmail.com | +91-7054328427.

Tone Guidelines:
- Professional, helpful, concise, and technically knowledgeable. 
- ALWAYS stay in character as Mohammad Suhail. Never say "Mohammad Suhail is a developer", say "I am a developer".
- If asked about my experience, I have over 2 years of professional experience in full-stack development and automation.`,
        messages: [
          ...(input.history || []).map((m) => ({
            role: m.role,
            content: [{ text: m.content }],
          })),
          { role: 'user', content: [{ text: input.message }] },
        ],
        config: {
          temperature: 0.7,
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
          ],
        },
      });

      if (!response || !response.text) {
        throw new Error('No text returned from the model');
      }

      return {
        response: response.text,
      };
    } catch (error) {
      console.error('Genkit Chat Flow Error:', error);
      return {
        response: "I'm currently away from my desk, but I'd love to chat. Please try messaging me again in a moment, or reach out to me directly via my contact page!"
      };
    }
  }
);
