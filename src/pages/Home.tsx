import React from "react";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    window.scrollTo({ top: 500, behavior: "smooth" });
    return (
      <>
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="lg:flex lg:mx-auto w-full lg:w-10/12 mb-4 mt-4 justify-center lg:space-x-3 p-3">
            <div className="flex flex-col lg:w-10/12 sm:w-12/12">
              <div className="lg:w-full bg-gray-200 rounded-lg shadow-sm mx-auto my-3 p-16">
                <h1 className="text-2xl font-medium mb-2">Title</h1>
                <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
                  Subtitle
                </h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                illo cupiditate molestias atque consequuntur ea quo cumque, odit
                velit sint similique? Asperiores ratione aperiam tempora, alias
                corrupti deleniti quaerat molestiae.
              </div>

              <div className="flex flex-col md:flex-row md:space-x-2 justify-center">
                <div className="w-full bg-red-500 rounded-lg shadow-sm mt-1">
                  <h1 className="text-2xl text-center font-medium mb-2 p-10">
                    Upcoming Events
                  </h1>
                  <p className="p-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Alias temporibus, nemo voluptas tempora totam voluptate
                    ipsam explicabo aperiam iste inventore saepe ducimus. Sint,
                    vitae quod cum dolorum dolores ex sed?
                  </p>
                </div>

                <div className="w-full bg-yellow-400 shadow-sm rounded-lg mt-1">
                  <h1 className="text-2xl text-center font-medium mb-2 p-10">
                    Recent Headlines
                  </h1>
                  <p className="p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat ipsa neque ea quia? Accusantium molestiae quo
                    excepturi quod esse perspiciatis, corrupti officiis amet
                    sunt asperiores beatae est blanditiis in perferendis.
                  </p>
                </div>

                <div className="w-full bg-green-300 shadow-sm rounded-lg mt-1">
                  <h1 className="text-2xl text-center font-medium mb-2 p-10">
                    Recent Headlines
                  </h1>
                  <p className="p-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis cum iste corrupti amet officia. Corrupti aperiam
                    laborum animi ullam totam molestias doloribus expedita, modi
                    exercitationem quis laboriosam quae, enim dolor!
                  </p>
                </div>
              </div>

              <div className="lg:w-full bg-gray-600 shadow-sm rounded-lg text-gray-200 text-base mx-auto my-3 p-12">
                <h4 className="font-medium text-indigo-400 mb-4 uppercase tracking-wide">
                  Subtitle
                </h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates fuga nemo cumque nulla, id doloribus placeat
                distinctio maxime repellat velit repellendus eos corrupti quod
                deleniti mollitia, amet expedita saepe illo? Ab itaque non
                corrupti nisi alias? Odio facilis voluptate nam aut modi optio
                ullam? Labore eos maiores consequatur blanditiis mollitia vitae
                sit tempore libero, eveniet iste natus inventore sunt corporis?
                Officia doloribus unde accusantium. Qui, sequi. Placeat suscipit
                in dolorem, alias iste labore consequatur molestiae ipsum dolore
                doloribus sint ut maxime nam distinctio mollitia unde odit
                soluta aliquid reiciendis. Autem! Amet incidunt obcaecati ex
                sint in minima. Porro, maiores velit, obcaecati illo assumenda
                labore voluptates facere expedita veniam et vitae delectus,
                deserunt doloremque officiis perferendis modi odio ut eveniet
                vel. Iure perferendis, itaque voluptates eligendi repellendus
                corrupti, velit labore nulla nisi ab, ullam libero rerum sed id
                totam. Alias neque corrupti iusto in, ipsum obcaecati
                reprehenderit vel impedit. Sed, eum. Ullam delectus temporibus
                voluptates earum deserunt nisi possimus recusandae et amet
                quibusdam explicabo, exercitationem porro voluptate libero
                dolorum impedit vitae quis laudantium quos. Explicabo pariatur
                sequi, tempora dolorum consequatur dolore?
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-4/12">
              <div className="w-full bg-gray-700 rounded-lg text-white shadow-sm mx-auto mt-3 mb-3 lg:mb-2 p-20">
                <h1 className="text-white font-medium mb-2">Title</h1>
                <h4 className="font-medium text-indigo-400 mb-4 uppercase tracking-wide">
                  Subtitle
                </h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                cum iste corrupti amet officia. Corrupti aperiam laborum animi
                ullam totam molestias doloribus expedita, modi exercitationem
                quis laboriosam quae, enim dolor!
              </div>

              <div className="bg-blue-300 rounded-lg h-full p-5  mb-3">
                <h1 className="text-2xl font-medium mb-2 text-center">Title</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore ipsa ad ut? Magnam amet perferendis soluta, ex,
                  aperiam autem sint, maiores tenetur nisi recusandae laudantium
                  possimus ducimus odit voluptatibus provident. Optio ex cum
                  dolorum vel obcaecati delectus rerum, aspernatur consequuntur
                  explicabo maxime vero, omnis amet, provident repellendus illo
                  nostrum soluta repellat! Architecto illum nulla unde ex
                  temporibus iure explicabo quae. Obcaecati ducimus tempore eum
                  dolorem ad nobis nemo, est accusamus eius ipsa recusandae!
                  Repudiandae libero quae vero sint error autem voluptatum
                  aliquid, doloremque nulla asperiores placeat quod, eligendi,
                  quas dolorem.
                </p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
