import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

function RichTextContent({ content }: any) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // console.log({ node });
        const { title, description, file } = node?.data?.target?.fields || {};
        const src = `https:${file?.url}`;
        const alt = title || description || "Image";

        return <img src={src} alt={alt} />;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="my-3">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a href={node.data.uri} target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
    },
  } as any;

  return <div>{documentToReactComponents(content, options)}</div>;
}

export default RichTextContent;

// import { createClient } from 'contentful';

// const client = createClient({
//   space: '<YOUR_SPACE_ID>',
//   accessToken: '<YOUR_ACCESS_TOKEN>'
// });

// async function fetchEntryWithAssets(entryId) {
//   try {
//     const entry = await client.getEntry(entryId, { include: 10 });
//     // The `include` parameter is used to specify how many levels of
//     // linked entries/assets should be resolved.

//     // To access assets, you can use the `fields` property of the entry,
//     // which contains the fields of the entry including references to
//     // linked assets.
//     const assetUrls = entry.fields.images.map(image => {
//       return `https:${image.fields.file.url}`;
//     });

//     console.log(assetUrls); // An array of asset URLs

//     // Return the entry with assets included
//     return entry;

//   } catch (error) {
//     console.log(error);
//   }
// }
