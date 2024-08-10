'use client';

import { useFormStatus } from "react-dom";
import { ButtonProps } from "./button";
import { LoadingButton } from "./loading-button";

interface SubmitButtonProps extends ButtonProps { }

export const SubmitButton = (props: SubmitButtonProps) => {
  const { children, ...rest } = props;

  const { pending } = useFormStatus()

  return <LoadingButton pending={pending} {...rest}>
    {children}
  </LoadingButton>
}
