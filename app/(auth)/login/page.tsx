import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
	return (
		<div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
			<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
			<Boxes />

			<LoginForm />
		</div>
	);
}
