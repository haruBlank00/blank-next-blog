import { cn } from '@/lib/utils';
import { IconProps } from '@tabler/icons-react';
import { ForwardRefExoticComponent } from 'react';

interface SidebarIconProps extends IconProps {
	Icon: ForwardRefExoticComponent<IconProps>
}

export const SidebarIcon = ({ Icon, ...props }: SidebarIconProps) => {
	const className = cn(props.className, "text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0")
	return <Icon className={className}
	/>
}
