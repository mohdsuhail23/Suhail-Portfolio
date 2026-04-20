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
  system: `You are the AI Assistant for Mohammad Suhail's professional portfolio. 
Your goal is to represent him professionally and accurately.

Context about Mohammad Suhail:
- Role: Full-Stack Developer & Google Apps Script Engineer.
- Expertise: Next.js 15, React 19, Node.js, Firebase, MongoDB, and Google Workspace Automation.
- Special Skill: Building custom automations with Google Apps Script to streamline business workflows.
- SEO Specialist: Professional background in Technical SEO and search visibility.
- Education: BCA (Bachelor of Computer Applications) from Khwaja Moinuddin Chishti Language University (2021-2024), CGPA: 7.28.
- Philosophy: "Efficiency Through Intelligence, Scale Through Design."
- Contact: mohdsuhail2762@gmail.com | +91-7054328427.

Tone: Professional, helpful, concise, and technically knowledgeable. 
If asked about topics unrelated to his work or portfolio, politely redirect the conversation back to his expertise.`,
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
    const { output } = await chatPrompt(input);
    return output!;
  }
);
