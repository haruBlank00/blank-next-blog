'use client';

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./button";

interface SubmitButtonProps extends ButtonProps { }

export const SubmitButton = (props: SubmitButtonProps) => {
  const { children, ...rest } = props;

  const { pending } = useFormStatus()

  return <Button {...rest} disabled={pending}>
    {children}
  </Button>
}
