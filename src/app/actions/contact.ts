
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
 */
export async function submitContactForm(formData: z.infer<typeof contactSchema>) {
  // Artificial delay for better UX feel (simulating network request)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    const validated = contactSchema.parse(formData);
    
    // SERVER-SIDE LOGIC:
    // This is where you would integrate a service like Resend or EmailJS.
    // Example: 
    // const res = await resend.emails.send({ ... });
    
    console.log("SUCCESS: Contact form submission received:", validated);

    // If you add a real email service, wrap it in a try-catch and check the response.
    return { 
      success: true, 
      message: "Success! I've received your message and will respond within 24 hours." 
    };
  } catch (error) {
    console.error("ERROR: Failed to process contact form:", error);
    return { 
      success: false, 
      message: "Form validation failed. Please check your entries and try again." 
    };
  }
}
