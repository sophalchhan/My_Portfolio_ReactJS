import React from 'react'
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects';

function ProjectDetails() {

    const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-gray-950 px-6 text-white">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-4 text-gray-400">
            The project you are looking for does not exist.
          </p>

          <Link to="/projects" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Back to Projects
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className='min-h-screen bg-gray-950 px-6 py-20 text-white'>
      <div className='mx-auto max-w-6xl'>
        {/* Back */}
        <Link to='/projects' className='inline-block text-blue-500 transition hover:text-blue-400'>
            ← Back to Projects
        </Link>
        {/* Project Image */}
        <div className='mt-8 overflow-hidden rounded-2xl border border-gray-800'>
            <img src={project.image} alt="" className='h-72 w-full object-cover md:h-[450px]'/>
        </div>
        {/* Project Header */}
        <div className='mt-10'>
            <h1 className='text-4xl font-bold sm:text-5xl'>{project.title}</h1>
            <p className='mt-6 leading-8 text-gray-400'>{project.description}</p>
        </div>
        {/* Project Information */}
        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Role */}
            <div className='rounded-xl border border-gray-800 bg-gray-900 p-6'>
                <p className='text-sm text-gray-500'>Role</p>
                <p className='mt-2 text-lg font-semibold'>{project.role}</p>
            </div>
            {/* Duration */}
            <div className='rounded-xl border border-gray-800 bg-gray-900 p-6'>
                <p className='text-sm text-gray-500'>Duration</p>
                <p className='mt-2 text-lg font-semibold'>{project.duration}</p>
            </div>
            {/* Technologies Count */}
            <div className='rounded-xl border border-gray-800 bg-gray-900 p-6'>
                <p className='text-sm text-gray-500'>Technologies</p>
                <p className='mt-2 text-lg font-semibold'>{project.technologies.length} Technologies</p>
            </div>
        </div>
         {/* Main Content */}
         <div className='mt-12 grid gap-12 lg:grid-cols-3'>
            {/* Features */}
            <div className='lg:col-span-'>
                <h2 className='text-2xl font-bold'>Project Features</h2>
                <div className='mt-6 space-y-4'>
                    {project.features.map((feature,index)=>(
                        <div key={index} className='flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900 p-4'>
                            <span className='mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold'>✓</span>
                            <p className='text-gray-300'>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Technologies */}
            <div className='mt-8'>
                <h2 className='text-xl font-semibold'>Technologies</h2>
                <div className='mt-4 flex flex-wrap gap-3'>
                    {project.technologies.map((technology)=>(
                        <span key={technology} className='rounded-full bg-blue-600/10 px-4 py-2 text-blue-400'>{technology}</span>
                    ))}
                </div>
            </div>
         </div>
          {/* Project Links */}
          <div className='mt-12 border-t border-gray-800 pt-8'>
            <h2 className='text-2xl font-bold'>Project Links</h2>
            <div className='mt-6 flex flex-wrap gap-4'>
                {/* GitHub */}
                {project.github &&(
                    <a href={project.github} target='_blank' rel='noreferrer' className='rounded-lg bg-gray-800 px-6 py-3 font-semibold transition hover:bg-gray-700'>View GitHub</a>
                )}
                 {/* Demo */}
                 {project.demo && (
                     <a href={project.demo} target='_blank' rel='noreferrer' className='rounded-lg bg-gray-800 px-6 py-3 font-semibold transition hover:bg-gray-700'>Live Demo</a>
                 )}
            </div>
          </div>
      </div>
    </section>
  )
}

export default ProjectDetails
