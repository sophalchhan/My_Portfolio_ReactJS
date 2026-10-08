import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className='mx-auto max-w-7xl'>
        {/* ================= HEADER ================= */}
        <div className='mb-16 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500'>My Work</p>
          <h1 className='text-4xl font-bold sm:text-5xl'>My Projects</h1>
          <p className='mx-auto mt-4 max-w-2xl text-gray-400'>
             Here are some of the projects I have built while learning
             and working with modern web technologies.
          </p>
          <div className='mx-auto mt-6 h-1 w-20 rounded-full bg-blue-600'></div>
        </div>
      </div>
      {/* ================= PROJECT GRID ================= */}
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project)=>(
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>
  )
}

export default Projects
