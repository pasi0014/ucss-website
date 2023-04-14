import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import Anime from "react-anime";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import messages from "./messages";

function NewsCard(props: any) {
  const [loading, setLoading] = useState(false);
  const [asset, setAsset] = useState("");
  const [content, setContent] = useState<any>();
  const [date, setDate] = useState<any>();
  const [title, setTitle] = useState<String>("");
  const [pageLink, setPageLink] = useState<any>(null);

  const [error, setError] = useState(false);

  const { formatMessage } = props.intl;

  const fetchAssets = async (assetKeys: Array<any>) => {
    try {
      setLoading(true);
      setError(false);
      await assetKeys.reduce(async (iPrevRequest, iAssetKey) => {
        await iPrevRequest;
        console.log({ iAssetKey });

        const response = await fetch(
          `https://cdn.contentful.com/spaces/nsh1rgbpuq0v/environments/master/assets/${iAssetKey.sys.id}?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
        );
        const tempAsset = await response.json();
        setAsset(tempAsset.fields.file.url.slice(2));
      }, Promise.resolve());
    } catch (error) {
      console.error("Unexpected error while trying to fetch an asset", {
        error,
      });
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log({
      props: props.intl.locale.slice(0, 2).toString().toUpperCase(),
    });

    if (props.post.fields.postImages) {
      fetchAssets(props.post.fields.postImages);
    }

    // Set link
    if (props.post.fields.isPage && props.post.fields.reactPageLink) {
      setPageLink(props.post.fields.reactPageLink);
    }

    // Set content By locale
    setContent(
      props.post.fields[
        `content${props.intl.locale.slice(0, 2).toString().toUpperCase()}`
      ]
    );
    // Set Date
    if (props.post.fields.date) {
      const postDate = new Date(props.post.fields.date);
      setDate(postDate.toLocaleDateString("en-CA"));
    }

    if (props.post.fields.titleEN || props.post.fields.titleUK) {
      setTitle(
        props.post.fields[
          `title${props.intl.locale.slice(0, 2).toString().toUpperCase()}`
        ]
      );
    }
  }, [props.intl.locale, props.post.fields, props.post.fields.postImages]);

  return (
    <div className="p-4 md:w-5/12">
      <Anime
        translateY={[100, 0]}
        easing={"easeOutSine"}
        opacity={[0, 1]}
        duration={1000}
      >
        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
          {asset && (
            <img
              className="transform lg:h-92 md:h-80 w-full object-cover object-center scale-100 transition-all duration-700 hover:scale-110"
              src={`https://${asset}`}
              alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
            />
          )}

          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
              {date}
              {/* {formatMessage({ ...messages.date_hotties })} */}
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-600 mb-3">
              {title}
              {/* {formatMessage({ ...messages.hottiesTitle })} */}
            </h1>

            <p className="leading-relaxed mb-3">
              {documentToReactComponents(content)}
              {pageLink && pageLink.length && (
                <Link to={pageLink}>
                  <button className="w-full my-3 bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    {formatMessage({ ...messages.readMore })}
                  </button>
                </Link>
              )}
              {props.isLink && (
                <a
                  href="https://www.facebook.com/groups/3189837834631563/?multi_permalinks=3434297586852252&ref=share"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg mt-3">
                    {/* {formatMessage({ ...messages.readMore })} */}
                  </button>
                </a>
              )}
            </p>
          </div>
        </div>
      </Anime>
    </div>
  );
}

export default injectIntl(NewsCard);
