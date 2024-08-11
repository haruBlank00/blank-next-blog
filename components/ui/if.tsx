interface IfProps {
  condition: unknown;
  children: React.ReactNode;
}

export const If = ({ condition, children }: IfProps) => {
  return Boolean(condition) ? children : null;
}
