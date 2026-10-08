import React from "react";
import {
  FiCode,
  FiServer,
  FiDatabase,
} from "react-icons/fi";

const skills = [
  {
    name: "HTML",
    level: 90,
    category: "Frontend",
  },
  {
    name: "CSS",
    level: 85,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "Frontend",
  },
  {
    name: "React",
    level: 85,
    category: "Frontend",
  },
  {
    name: "Vue",
    level: 85,
    category: "Frontend",
  },
  {
    name: "Laravel",
    level: 85,
    category: "Backend",
  },
  {
    name: "PHP",
    level: 80,
    category: "Backend",
  },
  {
    name: "Spring Boot",
    level: 75,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    level: 80,
    category: "Database",
  },
  {
    name: "MySQL",
    level: 85,
    category: "Database",
  },
];

function Skills() {
  const categories = [
    {
      name: "Frontend",
      icon: FiCode,
      color: "blue",
      description: "Building modern and responsive user interfaces.",
    },
    {
      name: "Backend",
      icon: FiServer,
      color: "purple",
      description: "Developing APIs and server-side applications.",
    },
    {
      name: "Database",
      icon: FiDatabase,
      color: "cyan",
      description: "Designing and managing application data.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-5 text-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue Glow */}
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Purple Glow */}
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= CONTAINER ================= */}
      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Technologies{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              I Use
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern,
            responsive and scalable web applications.
          </p>
        </div>

        {/* ================= CATEGORY CARDS ================= */}
        <div className="grid gap-6 lg:grid-cols-3">

          {categories.map((category) => {

            const Icon = category.icon;

            const categorySkills = skills.filter(
              (skill) => skill.category === category.name
            );

            return (
              <div
                key={category.name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-900/10"
              >

                {/* Category Header */}
                <div className="mb-7 flex items-start gap-4">

                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400 transition duration-300 group-hover:bg-blue-500/20">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>
                  </div>

                </div>

                {/* Skills */}
                <div className="space-y-6">

                  {categorySkills.map((skill) => (

                    <div key={skill.name}>

                      {/* Skill Name + Percentage */}
                      <div className="mb-2 flex items-center justify-between">

                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>

                        <span className="text-sm font-semibold text-blue-400">
                          {skill.level}%
                        </span>

                      </div>

                      {/* Progress Background */}
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                        {/* Progress */}
                        <div
                          className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>
              </div>
            );
          })}

        </div>

        {/* ================= TECHNOLOGY SUMMARY ================= */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center backdrop-blur-sm">

          <p className="text-sm text-gray-500">
            Currently focusing on
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">

            {[
              "React.js",
              "TypeScript",
              "Spring Boot",
              "Laravel",
              "PostgreSQL",
            ].map((technology) => (

              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;