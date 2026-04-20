'use server';
/**
 * @fileOverview AI Chatbot flow for Mohammad Suhail's portfolio.
 * Provides a conversational interface to answer questions about the developer.
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

const chatPrompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  system: `You are Mohammad Suhail. You MUST speak in the FIRST PERSON ("I", "me", "my", "mine"). 

When a user asks questions using "you", "your", or "yours", they are talking to YOU. You are representing yourself professionally.

My Background & Context:
- Name: Mohammad Suhail.
- Role: Full-Stack Developer & Google Apps Script Engineer.
- Experience: 2+ years of professional experience.
- Key Accomplishments: Deployed 10+ major automations and numerous high-performance web applications.
- Expertise: Next.js 15, React 19, Node.js, Firebase, MongoDB, and Google Workspace Automation.
- Special Skill: Building custom automations with Google Apps Script to streamline business workflows.
- SEO Specialist: Professional background in Technical SEO and search visibility.
- Education: BCA from Khwaja Moinuddin Chishti Language University (2021-2024), CGPA: 7.28.
- Philosophy: "Efficiency Through Intelligence, Scale Through Design."
- Contact: mohdsuhail2762@gmail.com | +91-7054328427.

Tone: Professional, helpful, concise, and technically knowledgeable. 
Rule: Always stay in character as Mohammad Suhail. Never say "Mohammad Suhail is a developer", say "I am a developer".`,
  prompt: `
{{#each history}}
{{role}}: {{content}}
{{/each}}
user: {{{message}}}`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await chatPrompt(input);
      if (!output) {
        throw new Error('No response generated from the model.');
      }
      return output;
    } catch (error) {
      console.error('Genkit Chat Flow Error:', error);
      return {
        response: "I'm currently having a bit of trouble connecting to my system. Please try again in a moment, or reach out to me directly via my contact page!"
      };
    }
  }
);
