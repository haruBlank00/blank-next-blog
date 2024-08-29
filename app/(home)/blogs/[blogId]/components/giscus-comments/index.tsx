"use client";

import Script from "next/script"
import { useTheme } from 'next-themes'

export const GiscusComments = () => {
	const { theme } = useTheme();

	return <div className="giscus" >
		<Script src="https://giscus.app/client.js"
			data-repo="haruBlank00/blank-next-blog"
			data-repo-id="R_kgDOMkhwhA"
			data-category="Announcements"
			data-category-id="DIC_kwDOMkhwhM4CiC-Q"
			data-mapping="pathname"
			data-strict="0"
			data-reactions-enabled="1"
			data-emit-metadata="0"
			// data-input-position="bottom"
			data-theme={theme}
			data-lang="en"
			data-loading="lazy"
			async />
	</div>

}
