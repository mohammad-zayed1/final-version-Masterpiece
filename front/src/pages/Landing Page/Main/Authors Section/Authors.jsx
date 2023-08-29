import { useState, useEffect } from "react";

export const Authors = () => {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    async function fetchWriters() {
      try {
        const res = await fetch("http://localhost:6600/showwriters");
        const data = await res.json();
        setWriters(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWriters();
  }, []);
  return (
    <section className="bg-info background-cover-img" id="authors">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Best Authors
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
          {writers.map((writer) => {
            return (
              <div
                key={writer._id}
                className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  hover:border-r-2 hover:border-neutral  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
              >
                <a href={writer.link}>
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={writer.image}
                    alt="Sofia Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href={writer.link}>{writer.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {writer.job}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {writer.description}
                  </p>
                  <div className="w-full text-right">
                    <a
                      className="hover:underline hover:text-primary"
                      href={writer.link}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
