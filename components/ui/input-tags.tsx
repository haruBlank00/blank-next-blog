import { FieldValues } from "react-hook-form";
import { BlankForm, FormFieldProps } from "./blank-form";
import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { Input } from "./input";
import { Badge } from "./badge";
import { IconX } from "@tabler/icons-react";
import { If } from "./if";

interface InputTagsProps<T extends FieldValues> extends Omit<FormFieldProps<T>, 'render'> {
  placeholder: string;
}

export const InputTags = <T extends FieldValues,>(props: InputTagsProps<T>) => {
  const [tag, setTag] = useState("");

  const { label, name, description, control, required, placeholder } = props;

  return <BlankForm.FormField control={control} description={description} name={name} label={label} required={required} render={(field) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      const lastChar = value.slice(-1)[0];
      if (lastChar === ",") {
        field.onChange([...field.value, value.slice(0, -1)]);
        setTag("");
        return;
      }

      setTag(value);
    };

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      const isEnterKey = e.code === "Enter";
      const isBackspace = e.code === "Backspace";

      if (isEnterKey && tag) {
        e.preventDefault();
        const lastChar = tag.slice(-1)[0];
        const isComma = lastChar === ",";

        const newTag = isComma ? tag.slice(0, -1) : tag;
        field.onChange([...field.value, newTag]);
        setTag("");
      }

      if (isBackspace && !tag) {
        field.onChange([...field.value.slice(0, -1)]);
      }
    }

    const removeTag = (index: number) => {
      const newValues = field.value.filter((_: string, i: number) => i !== index);
      field.onChange(newValues);
    }

    return <div className="flex gap-2 border rounded-md shadow-sm">
      <If condition={field.value}>
        <div className="flex gap-1 p-1">
          {
            field.value.map((tag: string, index: number) => (
              <Badge variant={'outline'} key={index + tag} className="w-max">
                {tag}

                <IconX size={12} className="cursor-pointer" onClick={() => removeTag(index)} />
              </Badge>
            ))
          }
        </div>

      </If>
      <Input onChange={onChange} value={tag} placeholder={placeholder} onKeyDown={onKeyDown} className="border-none shadow-none" />
    </div>
  }} />
}
