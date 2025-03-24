import { passwordValidationRegex } from "lib/helper";
import { z } from "zod";

export const signupSchema = z.object({
  first_name: z.string().min(4, "Please enter first name"),
  last_name: z.string().min(4, "Please enter last name"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters long").regex(passwordValidationRegex, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  phone_number: z.string({ message: "Please provide a valid phone number" }).optional(),
  organisation_name: z.string().min(4, "Please imput your Organisation name"),
  industry: z.string().min(4, "Please provide the Industry your organisation belongs to"),
  street_1: z.string({ message: "Please provide your organization address" }).min(4, "Please provide information"),
  street_2: z.string({ message: "Please provide another organization address" }).optional(),
  state: z.string({ message: "Please provide a valid state" }),
  city: z.string({ message: "Please provide a valid city" }).min(4, "Please provide information"),
  post_code: z.string({ message: "Please provide your postcal code number" }),
  country: z.string({ message: "Please provide a valid country" }).min(4, "Please provide information"),
  official_phone: z.string().min(4, "Please provide your organisational phone number"),
});

export const loginSchema = z.object({
  email: z.string({ message: "Email is required" }).email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, "Password must be at least 6 characters long"),
});
