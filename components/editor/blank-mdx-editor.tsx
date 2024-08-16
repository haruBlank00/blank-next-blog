"use client";

import { cn } from '@/lib/utils';
import {
	headingsPlugin,
	listsPlugin,
	quotePlugin,
	thematicBreakPlugin,
	markdownShortcutPlugin,
	MDXEditor,
	type MDXEditorMethods,
	type MDXEditorProps,
	toolbarPlugin,
	BlockTypeSelect,
	BoldItalicUnderlineToggles,
	CodeToggle,
	CreateLink,
	DiffSourceToggleWrapper,
	InsertAdmonition,
	UndoRedo,
	linkPlugin,
	linkDialogPlugin,
	imagePlugin,
	tablePlugin,
	frontmatterPlugin,
	codeBlockPlugin,
	codeMirrorPlugin,
	diffSourcePlugin
} from '@mdxeditor/editor';
import { useTheme } from 'next-themes';
import { ForwardedRef } from 'react';


const plugins = [
	toolbarPlugin({
		toolbarContents: () => <>
			<BlockTypeSelect />
			<CreateLink />
			<BoldItalicUnderlineToggles />
			<CodeToggle />
			<UndoRedo />
			<DiffSourceToggleWrapper >
				<CreateLink />
				<CodeToggle />
			</DiffSourceToggleWrapper>
			<InsertAdmonition />
		</>
	}),
	listsPlugin(),
	quotePlugin(),
	headingsPlugin(),
	linkPlugin(),
	linkDialogPlugin(),
	imagePlugin(),
	tablePlugin(),
	thematicBreakPlugin(),
	frontmatterPlugin(),
	codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
	codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' } }),
	diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
	markdownShortcutPlugin()
]

export const BlankMdxEditor = ({ editorRef, ...props }: { editorRef?: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) => {
	const { theme, systemTheme } = useTheme();
	const isDarkMode = theme === "dark" || systemTheme === "dark";

	const themeClassName = isDarkMode ? 'dark-theme dark-editor' : '';

	return <MDXEditor
		className={cn(themeClassName, 'min-h-48')}
		{...props}
		plugins={props.readOnly ? [] : plugins}
		ref={editorRef}
	/>
}

export default BlankMdxEditor;
