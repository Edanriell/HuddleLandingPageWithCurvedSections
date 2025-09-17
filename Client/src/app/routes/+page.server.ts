import { type Actions, fail } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { yup } from "sveltekit-superforms/adapters";

import { newsletterSchema } from "@shared/ui/newsletter/model";

// Server actions
export const actions: Actions = {
	newsletter: async ({ request }) => {
		// Extract and validate form data
		const newsletterForm = await superValidate(request, yup(newsletterSchema));

		// Check if data is valid
		if (!newsletterForm.valid) {
			return fail(400, { newsletterForm });
		}

		// Processing data.
		// Important! Pseudocode ahead!
		// Silly examples of what we could do
		// await db.subscribers.create({
		// 	data: { email: form.data.email }
		// });
		// Add to mailing service
		// await mailchimp.lists.addListMember("list-id", {
		// 	email_address: form.data.email
		// });
		// Send confirmation email
		// await sendEmail({
		// 	to: form.data.email,
		// 	subject: "Welcome to our newsletter!",
		// 	template: "newsletter-welcome"
		// });

		// But in our case, we just log it.
		console.log("Newsletter signup:", newsletterForm.data.email);

		// Send success response back
		return message(newsletterForm, "Newsletter signup successful!");
	}
};
