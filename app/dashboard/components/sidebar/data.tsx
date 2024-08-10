import { IconArrowLeft, IconBrandTabler, IconFiles, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { nanoid } from "nanoid";

export const links = [
	{
		id: nanoid(),
		label: "Dashboard",
		href: "/dashboard",
		Icon: IconBrandTabler

	},
	{
		id: nanoid(),
		label: "Profile",
		href: "#",
		Icon: IconUserBolt,
	},
	{
		id: nanoid(),
		label: "Settings",
		href: "#",
		Icon: IconSettings,
	},
	{
		id: nanoid(),
		label: "Blogs",
		href: "/dashboard/blogs",
		Icon: IconFiles
	},
	{
		id: nanoid(),
		label: "Logout",
		href: "#",
		Icon: IconArrowLeft,
	},
];
