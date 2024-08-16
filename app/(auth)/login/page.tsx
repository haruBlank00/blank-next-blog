import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { LoginForm } from "./components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blank Blog | Login",
	description: "Welcome back. Login to your account",
}

export default function LoginPage() {
	return <Boxes>
		<LoginForm />
	</Boxes>
}
