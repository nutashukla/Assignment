import { z } from "zod";

export const claimFormSchema = z.object({
    firstName: z.string().nonempty("First Name is required"),
    lastName: z.string().nonempty("Last Name is required"),
    phone: z.string().nonempty("Phone Number is required"),
    email: z.string().email("Invalid email address"),
    dob: z.string().nonempty("Date of Birth is required"),
    jobTitle: z.string().nonempty("Job Title is required"),
    diagnosisDate: z.string().nonempty("Date of Diagnosis is required"),
    diagnosisType: z.string().nonempty("Type of Diagnosis is required"),
    story: z.string().optional(),
    agree: z.boolean().refine(val => val === true, "You must agree to the privacy policy"),
    captcha: z.boolean().refine(val => val === true, "Please verify you're a person"),
});
