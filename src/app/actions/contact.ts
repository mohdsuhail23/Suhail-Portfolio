
'use server';

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(formData: z.infer<typeof contactSchema>) {
  // Simulate a delay for production feel
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const validated = contactSchema.parse(formData);
    
    // In a real production app, you would use EmailJS, Resend, or a similar service here.
    console.log("Contact form submission received:", validated);

    return { success: true, message: "Thank you! Your message has been received." };
  } catch (error) {
    return { success: false, message: "Invalid form data. Please check your inputs." };
  }
}
