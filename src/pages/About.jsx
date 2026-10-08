import React from 'react'
import profileImage from "../assets/My_Profile.jpg"

function About() {
  return (
    <section className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className='mx-auto max-w-7xl'>
        {/* ================= TITLE ================= */}
        <div className='mb-16 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500'>Get To Know Me</p>
            <h1 className='text-4xl font-bold sm:text-5xl'>About Me</h1>
        </div>
      </div>
      {/* ================= ABOUT CONTENT ================= */}
      <div className='grid items-center gap-12 md:grid-cols-2'>
        {/* Profile Image */}
        <div className='flex justify-cente'>
            <div className='relative'>
                {/* Glow */}
                <div className='absolute -inset-4 rounded-2xl bg-blue-600 opacity-20 blur-2xl'></div>
            </div>
            <img src={profileImage} alt="" className='relative h-80 w-80 rounded-2xl border-4 border-blue-600 object-cover shadow-2xl sm:h-96 sm:w-96'/>
        </div>
      </div>
      {/* About Text */}
      <div>
        <h2 className='text-3xl font-bold'>I'm Chhan Sophal</h2>
        <h3 className='mt-3 text-xl font-semibold text-blue-500'>Full Stack Developer</h3>
        <p className='mt-6 leading-8 text-gray-400'>
            I am a passionate Full Stack Developer who enjoys building
            modern, responsive and user-friendly web applications.
            I like learning new technologies and improving my programming
            skills through real-world projects.
        </p>
        <p className='mt-4 leading-8 text-gray-400'>
            My main interests are frontend development, backend development,
            database design and REST API development. I enjoy working with
            technologies such as React, Laravel, Spring Boot, PostgreSQL
            and MySQL.
        </p>
        <p className='mt-4 leading-8 text-gray-400'>
            My goal is to become a professional software developer and
            continue building useful applications while improving my
            problem-solving and software engineering skills.
        </p>
        {/* Info */}
        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                <p className='text-sm text-gray-500'>Name</p>
                <p className='mt-1 font-semibold'>Chhan Sophal</p>
            </div>
            <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                <p className='text-sm text-gray-500'>Role</p>
                <p className='mt-1 font-semibold'>Full Stack Developer</p>
            </div>
            <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                <p className='text-sm text-gray-500'>Frontend</p>
                <p className='mt-1 font-semibold'>React JS</p>
            </div>
            <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                <p className='text-sm text-gray-500'>Backend</p>
                <p className='mt-1 font-semibold'>Laravel / Spring Boot</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
