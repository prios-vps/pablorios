// 2026 © Pablo Ríos
// Licencia MIT
// Declaración de componentes para MDX

import Link from 'next/link';
import type { MDXComponents } from 'mdx/types'

export const components: MDXComponents = {
	// Se supone que h1 y h2 no deberían ser usados por lo que los marco en rojo y azul
  // para modificarlos adecuadamente en los MDX correspondientes.
	h1: (props) => (
		<h1
			className="text-red-400"
			{...props}
		/>
	),
	h2: (props) => (
		<h2
			className="text-blue-400"
			{...props}
		/>
	),
	h3: (props) => (
		<h3
			className="mt-6 mb-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
			{...props}
		/>
	),
	h4: (props) => (
		<h4
			className="mt-4 mb-2 text-xl font-medium text-neutral-900 dark:text-neutral-100"
		{...props}
		/>
	),

	// Paragraph
	p: (props) => (
		<p
			className="my-4 leading-7 text-neutral-700 dark:text-neutral-300"
			{...props}
		/>
	),

	// Lists
	ul: (props) => (
		<ul
			className="my-4 ml-6 list-disc space-y-2 text-neutral-700 dark:text-neutral-300"
			{...props}
		/>
	),
	ol: (props) => (
		<ol
			className="my-4 ml-6 list-decimal space-y-2 text-neutral-700 dark:text-neutral-300"
			{...props}
		/>
	),
	li: (props) => <li className="pl-1" {...props} />,

	// Blockquote
	blockquote: (props) => (
		<blockquote
			className="my-6 border-l-4 border-neutral-300 pl-4 italic text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
			{...props}
		/>
	),

	// Horizontal rule
	hr: (props) => (
		<hr
			className="my-8 border-neutral-200 dark:border-neutral-800"
		{...props}
		/>
	),

	// Inline code
	code: (props) => (
		<code
      className="rounded p-4 text-[1rem] ncm10mono"
			{...props}
		/>
	),

  pre: (props) => (
		<pre
			className="my-6 overflow-x-auto rounded-lg p-4 text-sm"
			{...props}
		/>
	),

	// Links
	a: ({ href = '', ...props }) => {
		const isInternal = href.startsWith('/')

		if (isInternal) {
			return (
				<Link
					href={href}
					className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400"
					{...props}
				/>
			)
		}

		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400"
				{...props}
			/>
		)
	},

	// Tables
	table: (props) => (
		<div className="my-6 overflow-x-auto">
			<table
				className="w-full border-collapse text-sm"
				{...props}
			/>
		</div>
	),
	th: (props) => (
		<th
			className="border border-neutral-300 bg-neutral-100 px-3 py-2 text-left dark:border-neutral-700 dark:bg-neutral-800"
			{...props}
		/>
	),
	td: (props) => (
		<td
			className="border border-neutral-300 px-3 py-2 dark:border-neutral-700"
			{...props}
		/>
	),
}

export function useMDXComponents(): MDXComponents {
	return components
}

