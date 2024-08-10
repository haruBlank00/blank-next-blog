"use client";

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
import { ForwardedRef } from 'react';

export const BlankMdxEditor = ({ editorRef, ...props }: { editorRef?: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) => {
	return <MDXEditor
		plugins={
			[
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
			]}

		{...props}
		ref={editorRef}
	/>
}

export default BlankMdxEditor;
