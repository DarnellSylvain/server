import z, { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email({
      message: "Invalid email",
    }),
    username: string().optional(),
    password: string({
      required_error: "Password is required",
    }),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email({
      message: "Invalid email",
    }),
    password: string({
      required_error: "Password is required",
    }),
  }),
});

export type LoginUserInput = z.infer<typeof loginUserSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
