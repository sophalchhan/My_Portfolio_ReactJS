import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-5 text-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue Glow */}
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Purple Glow */}
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

        {/* Cyan Glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

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

        {/* ================= HEADER ================= */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Work
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            My{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Underline */}
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Here are some of the projects I have built while learning
            and working with modern web technologies.
          </p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group transition duration-300 hover:-translate-y-2"
            >
              <ProjectCard project={project} />
            </div>
          ))}

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 text-center">

          <p className="text-sm text-gray-500">
            More projects coming soon...
          </p>

        </div>

      </div>
    </section>
  );
}

export default Projects;