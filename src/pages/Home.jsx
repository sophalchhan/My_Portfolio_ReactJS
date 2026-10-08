import React from "react";
import profileImage from "../assets/My_Profile.jpg";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiServer,
} from "react-icons/fi";

function Home() {

  const technologies = [
    "React",
    "Laravel",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Blue Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        {/* Cyan Glow */}
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Purple Glow */}
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-5 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">

            {/* Available Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              Available for opportunities
            </div>

            {/* Greeting */}
            <p className="mb-3 text-lg font-semibold text-blue-400">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Chhan{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sophal
              </span>
            </h1>

            {/* Role */}
            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              <div className="h-px w-10 bg-blue-500" />

              <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">
                Full Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
              I build modern, scalable and user-friendly web applications
              with clean code and practical solutions using:{" "}
              {/* <span className="font-semibold text-gray-200">
                React, Laravel, Spring Boot, PostgreSQL and MySQL.
              </span> */}
            </p>

            {/* Technology Tags */}
            <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-800 bg-slate-900/70 px-3.5 py-1.5 text-sm text-gray-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

              {/* Projects */}
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
              >
                View Projects

                <FiArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={18}
                />
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                Contact Me
              </Link>

              {/* CV */}
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-400"
              >
                <FiDownload size={18} />
                Download CV
              </a>
            </div>

            {/* ================= SOCIAL ================= */}
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <span className="text-sm text-gray-500">
                Find me on
              </span>

              <div className="h-px w-8 bg-slate-800" />

              <a
                href="https://github.com/sophalchhan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/chhan-sophal-161761419/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                <FiLinkedin size={19} />
              </a>
            </div>

            {/* ================= STATS ================= */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-slate-800 pt-7 lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="mt-1 text-xs text-gray-500">
                  Projects
                </p>
              </div>

              <div className="h-10 w-px bg-slate-800" />

              <div>
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="mt-1 text-xs text-gray-500">
                  Technologies
                </p>
              </div>

              <div className="h-10 w-px bg-slate-800" />

              <div>
                <p className="text-2xl font-bold text-white">IT</p>
                <p className="mt-1 text-xs text-gray-500">
                  Student
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Main Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-[100px] sm:h-96 sm:w-96" />

            {/* Image Container */}
            <div className="relative mr-28 mb-36">

            {/* Gradient Border */}
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-70 blur-sm" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-950">
                <img
                src={profileImage}
                alt="Chhan Sophal"
                className="h-72 w-56 object-contain object-center transition duration-500 hover:scale-105 sm:h-80 sm:w-60 lg:h-96 lg:w-72"
                />
            </div>

            {/* Frontend Card */}
            <div className="absolute -left-8 top-8 hidden items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
                <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
                <FiCode size={20} />
                </div>

                <div>
                <p className="text-xs text-gray-500">
                    Frontend
                </p>

                <p className="text-sm font-semibold text-gray-200">
                    React.js
                </p>
                </div>
            </div>

            {/* Backend Card */}
            <div className="absolute -right-8 bottom-12 hidden items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
                <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
                <FiServer size={20} />
                </div>

                <div>
                <p className="text-xs text-gray-500">
                    Backend
                </p>

                <p className="text-sm font-semibold text-gray-200">
                    Spring Boot
                </p>
                </div>
            </div>

            <div className="absolute -left-8 bottom-25 hidden items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
                <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
                <FiServer size={20} />
                </div>

                <div>
                <p className="text-xs text-gray-500">
                    Backend
                </p>

                <p className="text-sm font-semibold text-gray-200">
                    Laravel
                </p>
                </div>
            </div>

            {/* Database Card */}
            <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
                <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                <FiDatabase size={20} />
                </div>

                <div>
                <p className="text-xs text-gray-500">
                    Database
                </p>

                <p className="text-sm font-semibold text-gray-200">
                    PostgreSQL
                </p>
                </div>
            </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL ================= */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center text-gray-500 md:flex">
        <span className="text-xs tracking-wider">
          Scroll Down
        </span>

        <FiChevronDown
          className="mt-1 animate-bounce"
          size={18}
        />
      </div>
    </section>
  );
}

export default Home;