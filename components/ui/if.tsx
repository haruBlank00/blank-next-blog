interface IfProps {
  condition: unknown;
  children: React.ReactNode;
}

export const If = ({ condition, children }: IfProps) => {
  if (Array.isArray(condition)) {
    return condition.length > 0 ? children : null;

  }

  return Boolean(condition) ? children : null;
}
