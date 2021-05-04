import React from "react";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-5 text-center">
            <h1>Welcome to Home Page</h1>
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <h3>Hello from div</h3>
              </div>
            </div>
            End replace
          </div>
        </main>
      </>
    );
  }
}

export default Home;
