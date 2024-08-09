"use client";

import { Input } from "@/components/ui/input"
import { SubmitButton } from "@/components/ui/submit-button"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"
import { FormEventHandler } from "react"
import { loginUser } from "../actions";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

export const LoginForm = () => {
	const router = useRouter();

	const handleClientSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const { data, error } = await loginUser(formData);

		if (error !== null) {
			const { title, description } = error;

			toast.error(title, {
				description: description,
			})

			return;
		}

		toast.success("Login successful", {
			description: "Welcome back!",
		})

		router.push('/dashboard')

	}

	return <form method="POST" onSubmit={handleClientSubmit} className="grid gap-4">
		<div className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="m@example.com"
					required
				/>
			</div>

			<div className="grid gap-2">
				<div className="flex items-center">
					<Label htmlFor="password">Password</Label>
					<Link href="#" className="ml-auto inline-block text-sm underline">
						Forgot your password?
					</Link>
				</div>
				<Input id="password" name="password" type="password" required placeholder="•••••••••" />
			</div>

			<SubmitButton type="submit" className="w-full" disabled={false}>
				Login
			</SubmitButton>
		</div>
	</form>
}
