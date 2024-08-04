"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
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
							<Input id="password" type="password" required placeholder="•••••••••" />
						</div>
						<Button type="submit" className="w-full">
							Login
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
