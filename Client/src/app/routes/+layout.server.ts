import { superValidate } from "sveltekit-superforms";
import { yup } from "sveltekit-superforms/adapters";
import { newsletterSchema } from "@shared/ui/newsletter/model/schema";

export const load = async () => {
	// Creates an initial, empty form object that looks like
	// {
	// 	data: { email: '' },        // Initial form values
	// 	errors: {},                 // No errors initially
	// 	valid: false,               // Not valid yet (empty)
	// 		posted: false,              // Not submitted yet
	// 	// ... other Superforms properties
	// }
	const newsletterForm = await superValidate(yup(newsletterSchema));

	// Makes It Globally Available
	return { newsletterForm };
};
