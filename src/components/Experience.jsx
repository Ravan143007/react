import Img5 from "../assets/project/5.jpeg";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <Fade Fade left>
      <section className="max-w-screen-md mx-auto mt-10 mb-[4.5rem]">
        <section className="py-6 sm:py-12  dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-5xl font-bold">EXPERIENCE</h2>
              <h2 className=" font-min mb-10">Check out my Experience</h2>
            </div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-md mx-auto">
              <img
                alt="Office"
                src={Img5}
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  Jun 2022- May 2023
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    Associate Software Engineer
                  </h3>
                </a>

                <p className="mt-2 text-sm/relaxed text-gray-500">
                  Establishing personal rapport with future and present clients
                  to identify requirements. <br />• Evaluating client needs,
                  analyzing requirements, and develops software systems to
                  create and maintain applications and databases. <br />•
                  Creating databases and spreadsheets, as well as designing
                  applications <br /> • Assist with the definition and review of
                  application requirements and use cases. <br />• Need to create
                  Custom reports by utilizing database and report-writing tools.
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </Fade>
  );
};

export default Experience;
