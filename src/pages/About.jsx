import React from "react";
import profileImage from "../assets/My_Profile.jpg";

function About() {
  const technologies = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Laravel",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Flutter",
  ];

  return (
    <section
      id="about"
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

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative mx-auto max-w-7xl">

        {/* ================= TITLE ================= */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            About{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A passionate developer focused on building modern,
            responsive and user-friendly applications.
          </p>
        </div>

        {/* ================= ABOUT CONTENT ================= */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================= IMAGE ================= */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-8 rounded-3xl bg-blue-600/20 blur-3xl" />

              {/* Decorative Border */}
              <div className="absolute -inset-3 rounded-3xl border border-blue-500/20" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-blue-900/20">

                <img
                  src={profileImage}
                  alt="Chhan Sophal"
                  className="h-[420px] w-[320px] rounded-2xl object-cover object-top transition duration-500 hover:scale-105 sm:h-[480px] sm:w-[360px]"
                />

              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl border border-slate-700 bg-slate-900/95 px-5 py-4 shadow-xl backdrop-blur-md">

                <p className="text-2xl font-bold text-blue-400">
                  IT
                </p>

                <p className="text-xs text-gray-400">
                  Developer
                </p>

              </div>

            </div>
          </div>

          {/* ================= TEXT ================= */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who I Am
            </p>

            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
              I'm{" "}
              <span className="text-blue-400">
                Chhan Sophal
              </span>
            </h3>

            <h4 className="mt-3 text-xl font-semibold text-gray-300">
              Full Stack Developer
            </h4>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-400">
              <p>
                I am a passionate Full Stack Developer who enjoys
                building modern, responsive and user-friendly web
                applications.
              </p>

              <p>
                I enjoy learning new technologies and improving my
                programming skills through real-world projects.
              </p>

              <p>
                My main interests include frontend development,
                backend development, database design and REST API
                development.
              </p>
            </div>

            {/* ================= INFO CARDS ================= */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Name */}
              <div className="group rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Name
                </p>

                <p className="mt-1 font-semibold text-gray-200">
                  Chhan Sophal
                </p>
              </div>

              {/* Role */}
              <div className="group rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Role
                </p>

                <p className="mt-1 font-semibold text-gray-200">
                  Full Stack Developer
                </p>
              </div>

              {/* Frontend */}
              <div className="group rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Frontend
                </p>

                <p className="mt-1 font-semibold text-gray-200">
                  React.js / TypeScript
                </p>
              </div>

              {/* Backend */}
              <div className="group rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Backend
                </p>

                <p className="mt-1 font-semibold text-gray-200">
                  Laravel / Spring Boot
                </p>
              </div>

            </div>

            {/* ================= TECHNOLOGIES ================= */}
            <div className="mt-8">

              <p className="mb-4 text-sm font-semibold text-gray-300">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2">

                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-sm text-gray-400 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    {technology}
                  </span>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;