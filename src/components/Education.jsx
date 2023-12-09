import Img3 from "../assets/project/3.png";
import Img4 from "../assets/project/4.png";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <Fade left>
      <section className="max-w-screen-md mx-auto mb-[4.5rem]">
        <section className=" sm:py-12 dark:text-gray-100 flex items-center flex-col">
          <div className=" p-6 mx-auto space-y-8 w-full ">
            <div className="space-y-2 text-center">
              <h2 className="text-5xl font-bold">Education</h2>
              <h2 className=" mb-10">Education</h2>
            </div>
            <div className="max-w-screen-xl p-5 mx-auto  dark:text-gray-100">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 sm:grid-cols-2">
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-72 bg-gray-500 text-white cursor-pointer "
                  style={{
                    backgroundImage: `url(${Img3})`,
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b hover:via-transparent hover:from-gray-900 hover:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase hover:text-gray-100 bgundefined"
                    >
                      Master's Degree
                    </a>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="font-medium text-md hover:underline hover:text-gray-100"
                    >
                      {" "}
                      Saint Louis University G
                    </a>
                  </h2>
                </div>
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-72 bg-gray-500 text-white cursor-pointer "
                  style={{
                    backgroundImage: `url(${Img4})`,
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b hover:via-transparent hover:from-gray-900 hover:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase hover:text-gray-100 bgundefined"
                    >
                      Bachelor's Degree
                    </a>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="font-medium text-md hover:underline hover:text-gray-100"
                    >
                      {" "}
                      Vel Tech Rangarajan Dr. Sagunthala R&D institute of
                      science and Technology
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1RN291mmBUi31269vbgtx115GtXbedpeG/view"
            target="_blank"
            rel="noreferrer"
            className="bg-black my-10 dark:bg-white  text-white dark:text-black px-6 py-2.5 rounded-full uppercase text-sm"
          >
            See More
          </a>
        </section>
      </section>
    </Fade>
  );
};

export default Education;
