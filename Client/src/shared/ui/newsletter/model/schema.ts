import * as yup from "yup";

export const newsletterSchema = yup.object({
	email: yup.string().required("Email is required").email("Check your email please")
});

export type NewsletterSchema = yup.InferType<typeof newsletterSchema>;
