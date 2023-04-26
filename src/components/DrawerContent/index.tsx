import { useEffect, useState } from "react";
import { FormattedDate, IntlShape, injectIntl } from "react-intl";

import { client } from "../../utils/Contentful";
// import { useHistory } from "react-router-dom";
import {
  ArrowsExpandIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

import RichTextContent from "../RichText";
import Loading from "../Loading";

interface IDrawerContentProps {
  entryId: string;
  intl: IntlShape;
  post: any;
  onClose: (val: boolean) => void;
}

const DrawerContent = (props: IDrawerContentProps) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const history = useHistory();

  //   TODO: review if we ever would want to use it here - NP
  const getEntity = async (entityId: string) => {
    const logContext = {
      component: "components/DrawerContent/index.getEntity",
      params: { entityId },
    };

    setLoading(true);

    try {
      console.log("Fetching Content", logContext);
      const response = await client.getEntry(entityId, { include: 10 });
      setContent(response);
    } catch (error) {
      console.error("Unexpected error while trying to fetch Content", {
        ...logContext,
        error,
      });
    }
    setLoading(false);
  };

  const handleOnExpand = () => {
    props.onClose(true);
    // history.push("/news/continental-marathon");
  };

  useEffect(() => {
    return () => {
      setContent(null);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      {loading && !content && (
        <div className="w-full h-screen text-center flex mx-auto bg-blue-300 items-center">
          <Loading />
        </div>
      )}
      {props.post && (
        <div className="shadow flex flex-col w-full h-screen overflow-y-scroll mx-auto relative">
          <div className="container w-8/12">
            <img
              className="object-cover w-full h-64 md:h-auto rounded-lg shadow"
              src={props.post.fields.postImage?.fields.file.url}
              alt={props.post.fields.postImage?.fields.title}
            />
          </div>
          <div className="absolute top-3 left-3 flex flex-row space-x-4 transition-all">
            <ChevronDoubleRightIcon
              className="h-7 w-7 cursor-pointer transition-all transform duration-200 ease hover:scale-110"
              onClick={() => props.onClose(false)}
            />
            {/* <ArrowsExpandIcon
              onClick={handleOnExpand}
              className="w-7 h-7 cursor-pointer transition-all transform duration-200 ease hover:scale-110"
            /> */}
          </div>
          <div className="h-full p-6 flex flex-col mx-auto">
            <div className="w-full lg:w-3/5 text-center mx-auto">
              <h3>
                {
                  props.post.fields[
                    `title${props.intl.locale
                      .slice(0, 2)
                      .toString()
                      .toUpperCase()}`
                  ]
                }
              </h3>
              <p className="mt-3 text-grey-dark text-sm italic">
                <FormattedDate
                  value={props.post.fields.date}
                  year="numeric"
                  month="long"
                  day="numeric"
                />
              </p>
              <hr className="w-full md:ml-0 mt-4 border" />
            </div>
            <div className="w-full lg:w-3/5 lg:px-3 mx-auto">
              <p className="text-md mt-4 text-justify">
                <RichTextContent
                  content={
                    props.post.fields[
                      `content${props.intl.locale
                        .slice(0, 2)
                        .toString()
                        .toUpperCase()}`
                    ]
                  }
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default injectIntl(DrawerContent);
