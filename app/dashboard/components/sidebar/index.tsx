"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "./data";
import { SidebarIcon } from "./sidebar-icon";

export function DashboardSidebar() {
	const [open, setOpen] = useState(false);

	return (
		<Sidebar open={open} setOpen={setOpen}>
			<SidebarBody className="justify-between gap-10">
				<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
					{open ? <Logo /> : <LogoIcon />}

					<div className="mt-8 flex flex-col gap-2">
						{links.map((link) => {
							const { id, Icon: I, ...rest } = link

							const icon = <SidebarIcon Icon={I} />

							return (
								<SidebarLink key={id} link={{ icon, ...rest }} />
							)
						})}
					</div>
				</div>
			</SidebarBody>
		</Sidebar>
	);
}
export const Logo = () => {
	return (
		<Link
			href="#"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium text-black dark:text-white whitespace-pre"
			>
				Acet Labs
			</motion.span>
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			href="#"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
		</Link>
	);
};
