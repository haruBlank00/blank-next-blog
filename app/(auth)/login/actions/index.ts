"use server";

import { z } from "zod";
import { signInWithEmailAndPassword, User, AuthError } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase.config";
import logger from "@/lib/logger.config";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Please enter a valid email.",
    message: "Please enter your email.",
  }),
  password: z.string().min(6, {
    message: "Please enter a valid password.",
  }),
});

const errorMessages: Record<
  AuthError["code"],
  { title: string; description: string }
> = {
  "auth/invalid-credential": {
    description: "Please enter a valid email and password.",
    title: "Authentication Failed.",
  },
  "auth/too-many-requests": {
    description: "Too many requests. Please try again later.",
    title: "Authentication Failed.",
  },
};

export async function loginUser(formData: FormData): Promise<ILoginUserReturn> {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: {
        title: "Authentication Failed.",
        description: validatedFields.error.issues[0].message,
      },
    };
  }

  try {
    const { email, password } = validatedFields.data;
    const { user } = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    return {
      data: user.toJSON(),
      error: null,
    };
  } catch (e) {
    const code = (e as AuthError).code;

    logger.error(code);

    const error = errorMessages[code] || {
      description: "Something went wrong. Please try again later.",
      title: "Authentication Failed.",
    };

    return {
      data: null,
      error,
    };
  }
}

interface IError {
  title: string;
  description: string;
}

interface ILoginUserReturn {
  data: Partial<User> | null;
  error: IError | null;
}
