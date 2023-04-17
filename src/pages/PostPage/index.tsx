import { useParams } from "react-router-dom";
import { injectIntl } from "react-intl";
import { client } from "../../utils/Contentful";
import embassyMain from "../../assets/images/poland-embassy-1.jpg";

export function PostPage(props: any) {
  const doFetchPost = async (id: string) => {
    const logContext = {
      component: "/pages/PostPage/index.doFetchPost",
      params: { id },
    };

    try {
      console.log("Trying to fetch the Post", logContext);
      //   const response = await client.getEntry();
    } catch (error) {
      console.error("Unexpected error while trying to fetch Post", {
        ...logContext,
        error,
      });
    }
  };

  return (
    <div className="container flex flex-col w-full mx-auto">
      <div className=" w-6/12 mx-auto mt-5">
        <img
          className="object-cover w-full h-64 md:h-auto rounded-lg shadow"
          src={embassyMain}
          alt="Blah-blah"
        />
      </div>

      <div className="h-full p-6 flex flex-col mx-auto">
        <div className="w-full lg:w-3/5 text-center mx-auto">
          <h3>
            "Thank You" from Ukrainian Community in Canada to the people of
            Poland
          </h3>
          <p className="mt-3 text-grey-dark text-sm italic">April 10, 2022</p>
          <hr className="w-full md:ml-0 mt-4 border" />
        </div>
        <div className="w-full lg:w-3/5 lg:px-3 mx-auto">
          <p className="text-md mt-4 text-justify">
            The Ottawa community celebrated the Festival of Carols and
            Shchedrivkas this Christmas with great pomp and grandeur. Various
            choirs and a children's group led by Mr. Oleksiy Fischuk greeted
            guests in the packed hall of the Ukrainian Orthodox Church.
            <br />
            <br /> However, it was the powerful performance by the student choir
            of the University of Ottawa under the direction of Maestro Laurentiy
            Ivashka that left the most profound impression on everyone What made
            their efforts truly remarkable was the fact that not a single
            performer of these famous Ukrainian carols spoke the Ukrainian
            language in their daily life. Rather, they were inspired by the
            enchanting melodies of the music they performed, and the audience
            was captivated by the sincere and genuine tone of their flawless
            performance.
            <br />
            <br /> The volunteers of the Ukrainian Social Services in our city
            treated guests to incredibly delicious treats, making the festival
            an even more memorable experience. Grateful thanks were extended to
            everyone who contributed to the organization and execution of this
            highly anticipated carol festival, especially to the esteemed Ms.
            Jane Colby. Our culture is rich and vibrant, and we are delighted to
            enrich the community in which we live with it.
            <br /> <br /> We are also thankful to Rogers TV, who broadcasted the
            entire event on channel 22, allowing even more people to enjoy this
            wonderful celebration of music and culture.
          </p>
        </div>
      </div>
    </div>
  );
}

injectIntl(PostPage);
