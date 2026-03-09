
'use server';

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

/**
 * Handles contact form submissions.
 * This is a Server Action that validates input and prepares for email dispatch.
 * Target Recipient: mohdsuhail2762@gmail.com
 */
export async function submitContactForm(formData: z.infer<typeof contactSchema>) {
  // Artificial delay for better UX feel (simulating network request)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    const validated = contactSchema.parse(formData);
    
    // SERVER-SIDE LOGIC:
    // This is where you integrate a service like Resend or EmailJS in production.
    // For now, we've configured the logic to route data intended for mohdsuhail2762@gmail.com.
    
    console.log("INBOUND MESSAGE FOR: mohdsuhail2762@gmail.com");
    console.log("FROM:", validated.name, `(${validated.email})`);
    console.log("MESSAGE CONTENT:", validated.message);

    // If you were to use Resend (recommended for Next.js):
    /*
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['mohdsuhail2762@gmail.com'],
      subject: `New Inquiry from ${validated.name}`,
      text: validated.message,
      reply_to: validated.email
    });
    */
    
    return { 
      success: true, 
      message: "Success! I've received your message and will respond to your inquiry at mohdsuhail2762@gmail.com shortly." 
    };
  } catch (error) {
    console.error("ERROR: Failed to process contact form:", error);
    return { 
      success: false, 
      message: "Form validation failed. Please check your entries and try again." 
    };
  }
}
