import { BlankForm } from "@/components/ui/blank-form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { defaultValues, resolver, TFormValues } from "./schema";
import { Input } from "@/components/ui/input";
import { ChangeEvent, Suspense, useRef } from "react";
import BlankMdxEditor from "@/components/editor/blank-mdx-editor";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { SubmitButton } from "@/components/ui/submit-button";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { InputTags } from "@/components/ui/input-tags";
import { MultiSelector, MultiSelectorContent, MultiSelectorInput, MultiSelectorItem, MultiSelectorList, MultiSelectorTrigger } from "@/components/ui/multi-select-input";
import { warn } from "console";
import { useGetCategories } from "./useGetCategories";

export const NewBlogForm = () => {
  const form = useForm<TFormValues>({
    resolver,
    defaultValues,
  });
  const { } = useGetCategories()

  console.log(process.env.FIREBASE_APP_ID, 'ok', 'appid')
  const ref = useRef<MDXEditorMethods>(null);

  const onSubmit: SubmitHandler<TFormValues> = (values) => {
    console.log({ values });
  };

  return (
    <BlankForm {...form} onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 mb-6">
        <BlankForm.FormField
          label="title"
          name="title"
          control={form.control}
          required
          render={(field) => <Input {...field} placeholder="Title" />}
        />

        <InputTags label="tags" name="tags" control={form.control} required placeholder="tags" />

        <BlankForm.FormField
          label="categories"
          name="categories"
          control={form.control}
          required
          render={(field) => <MultiSelector values={field.value as string[]} onValuesChange={(values) => console.log({ values })} >
            <MultiSelectorTrigger>
              <MultiSelectorInput placeholder="Please Select categories..." />
            </MultiSelectorTrigger>

            <MultiSelectorContent>
              <MultiSelectorList>
                <MultiSelectorItem value="option 1">
                  option 1
                </MultiSelectorItem>
              </MultiSelectorList>
            </MultiSelectorContent>
          </MultiSelector>
          }
        />

        <BlankForm.FormField
          label="content"
          name="content"
          control={form.control}
          required
          render={(field) => (
            <Suspense fallback={<h1>loading...</h1>}>
              <BlankMdxEditor
                editorRef={ref}
                markdown={field.value as string}
                onChange={(e) => field.onChange(e)}
              />
            </Suspense>
          )}
        />

        <div className="flex justify-end gap-4">
          <SubmitButton>Create</SubmitButton>

          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </BlankForm>
  );
};
