import Fade from "react-reveal/Fade";

const Skills = () => {
  const skills = [
    {
      name: "Languages",
      data: [
        { name: "C", score: 90 },
        { name: "Python", score: 80 },
        { name: "SQL", score: 90 },
        { name: "HTML/CSS", score: 90 },
        { name: "Java", score: 70 },
      ],
    },
    {
      name: "Frameworks",
      data: [
        { name: "NumPy", score: 90 },
        { name: "Pandas", score: 80 },
        { name: "Matplotlib", score: 90 },
        { name: "TensorFlow", score: 90 },
        { name: "Hadoop", score: 70 },
      ],
    },
    {
      name: "Tools",
      data: [
        { name: "PyCharm", score: 90 },
        { name: "Python", score: 80 },
        { name: "SQL", score: 90 },
        { name: "HTML", score: 90 },
        { name: "Java", score: 70 },
      ],
    },
    {
      name: "Tools",
      data: [
        { name: "PyCharm", score: 60 },
        { name: "Jupyter Notebook", score: 90 },
        { name: "Visual Studio Code", score: 90 },
        { name: "Microsoft Office", score: 90 },
        { name: "Git", score: 80 },
      ],
    },
  ];
  return (
    <Fade left>
      <section className="max-w-screen-lg mx-auto mt-10 mb-[4.5rem]">
        <section className="py-6 sm:py-12  dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-5xl font-bold">Skills</h2>
              <h2 className=" font-min mb-10">Check out my Skillss</h2>
            </div>
            <div className="max-w-screen-xl p-5 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skills.map((skill) => (
                  <div className="shadow flex flex-wrap place-items-center col-span-1 ">
                    <div className="shadow-lg rounded-xl w-full p-4 bg-white text-black relative overflow-hidden">
                      <a href="#" className="w-full h-full block">
                        <div className="flex items-center border-b-2 mb-2 py-2">
                          <div className="pl-3">
                            <div className="font-medium text-b">
                              {skill.name}
                            </div>
                          </div>
                        </div>

                        {skill.data.map((el) => (
                          <div className="space-y-1">
                            <div className="flex items-center justify-between my-2 ">
                              <p className="text-gray-900 text-sm">{el.name}</p>
                              <p className="text-gray-900 text-sm">
                                {el.score}%
                              </p>
                            </div>
                            <span
                              role="progressbar"
                              aria-labelledby="ProgressLabel"
                              aria-valuenow="75"
                              class="block rounded-full bg-blue-200"
                            >
                              <span
                                class="block h-1 rounded-full bg-blue-500"
                                style={{ width: el.score + "%" }}
                              ></span>
                            </span>
                          </div>
                        ))}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fade>
  );
};

export default Skills;
