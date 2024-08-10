import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button"
import { ClockLoader } from 'react-spinners';

interface LoadingButtonProps extends ButtonProps {
  pending: boolean
}

export const LoadingButton = ({ pending, children, ...props }: LoadingButtonProps) => {
  const className = cn(props.className, "flex items-center justify-center gap-2")

  return <Button type="submit" disabled={pending} {...props} className={className}>
    {pending && <ClockLoader color="white" size={16} />}
    {children}
  </Button>
}
