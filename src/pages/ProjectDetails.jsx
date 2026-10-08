import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiCheck,
  FiCode,
  FiClock,
  FiUser,
  FiLayers,
} from "react-icons/fi";

import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  // ================= PROJECT NOT FOUND =================
  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-3xl text-red-400">
            !
          </div>

          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            Project Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-gray-400">
            The project you are looking for does not exist
            or may have been removed.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <FiArrowLeft />
            Back to Projects
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white"
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
      <div className="relative mx-auto max-w-6xl">

        {/* ================= BACK BUTTON ================= */}
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-blue-400"
        >
          <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* ================= PROJECT IMAGE ================= */}
        <div className="relative mt-8">

          {/* Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-blue-600/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover transition duration-700 hover:scale-105 md:h-[450px]"
            />
          </div>

        </div>

        {/* ================= PROJECT HEADER ================= */}
        <div className="mt-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Project Details
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            {project.title}
          </h1>

          <div className="mt-6 max-w-4xl">
            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              {project.description}
            </p>
          </div>

        </div>

        {/* ================= PROJECT INFORMATION ================= */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Role */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <FiUser size={21} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Role
            </p>

            <p className="mt-2 font-semibold text-gray-200">
              {project.role}
            </p>

          </div>

          {/* Duration */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <FiClock size={21} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Duration
            </p>

            <p className="mt-2 font-semibold text-gray-200">
              {project.duration}
            </p>

          </div>

          {/* Technologies */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <FiLayers size={21} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Technologies
            </p>

            <p className="mt-2 font-semibold text-gray-200">
              {project.technologies.length} Technologies
            </p>

          </div>

        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-14 grid gap-10 lg:grid-cols-3">

          {/* ================= FEATURES ================= */}
          <div className="lg:col-span-2">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
                <FiCheck size={20} />
              </div>

              <h2 className="text-2xl font-bold">
                Project Features
              </h2>
            </div>

            <div className="space-y-3">

              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-slate-900"
                >

                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
                    ✓
                  </span>

                  <p className="leading-7 text-gray-300">
                    {feature}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* ================= TECHNOLOGIES ================= */}
          <div>

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
                <FiCode size={20} />
              </div>

              <h2 className="text-2xl font-bold">
                Technologies
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">

              <div className="flex flex-wrap gap-3">

                {project.technologies.map((technology) => (
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

        </div>

        {/* ================= PROJECT LINKS ================= */}
        <div className="mt-14 border-t border-slate-800 pt-10">

          <h2 className="text-2xl font-bold">
            Project Links
          </h2>

          <p className="mt-2 text-gray-500">
            Explore the source code or try the live application.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            {/* GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-gray-200 transition duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FiGithub size={18} />
                View GitHub
              </a>
            )}

            {/* Demo */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                <FiExternalLink size={18} />
                Live Demo
              </a>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;