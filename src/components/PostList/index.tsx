import React, { useState, useEffect } from "react";
import { client } from "../../utils/Contentful";
import EventCard from "../EventCard";
import { injectIntl } from "react-intl";

function PostList(props: any) {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    async function fetchPosts() {
      const entries = (await client.getEntries({
        content_type: "post",
        include: 3,
      })) as any;
      setPosts(entries.items);
    }

    fetchPosts();
  }, []);

  return (
    <div className="mx-auto my-10">
      <div className="flex flex-wrap">
        {posts.map((post: any) => (
          <div key={post.sys.id} className="w-full px-4 mb-8">
            <EventCard
              title={
                post.fields[
                  `title${props.intl.locale
                    .slice(0, 2)
                    .toString()
                    .toUpperCase()}`
                ]
              }
              image={post.fields.postImage?.fields}
              content={
                post.fields[
                  `content${props.intl.locale
                    .slice(0, 2)
                    .toString()
                    .toUpperCase()}`
                ]
              }
              date={post.fields.date}
              isPage={post.fields?.isPage}
              reactPageLink={post.fields?.reactPageLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default injectIntl(PostList);
