import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import {
  ControllerProps,
  ControllerRenderProps,
  FieldValues,
  FormProviderProps,
  SubmitHandler,
} from "react-hook-form";
import { If } from "./if";

export interface BlankFormProps<T extends FieldValues> extends FormProviderProps<T> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<T>;
}

export const BlankForm = <T extends FieldValues>(props: BlankFormProps<T>) => {
  const { children, onSubmit, ...form } = props;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export interface FormFieldProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, "render"> {
  label: string;
  description?: string;
  required?: boolean;
  render: (props: ControllerRenderProps<T>) => JSX.Element;
}

const BlankFormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2 capitalize">
            {props.label}

            <If condition={props.required}>
              <span className="text-red-600">*</span>
            </If>
          </FormLabel>

          <FormControl>{props.render(field)}</FormControl>

          <If condition={props.description}>
            <FormDescription>{props.description}</FormDescription>
          </If>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

BlankForm.FormField = BlankFormField;
