import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
	return (
		<div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
			<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

			<Boxes />
			<Card className="mx-auto max-w-sm absolute z-30">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>

					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>

				<CardContent>
					<LoginForm />
				</CardContent>
			</Card>
		</div>
	);
}
