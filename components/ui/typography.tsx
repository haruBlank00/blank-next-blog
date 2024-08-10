import { cn } from "@/lib/utils";

interface TypographyProps {
  className: string;
  children: React.ReactNode;
}

export const H1 = ({ className, children }: TypographyProps) => {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
    {children}
  </h1>
}

export const Typography = ({ className, children }: TypographyProps) => {
  return <p className={className}>{children}</p>
}

Typography.H1 = H1;

export default Typography;
