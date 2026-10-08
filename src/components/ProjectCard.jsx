import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({project}) {
  return (
    <div className='group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition duration-300 hover:-translate-y-2 hover:border-blue-600'>
      {/* Project Image */}
      <div className='overflow-hidden'>
        <img src={project.image} alt="" className='h-56 w-full object-cover transition duration-500 group-hover:scale-105'/>
      </div>
       {/* Project Content */}
       <div className='p-6'>
        <h2 className='text-2xl font-bold'>{project.title}</h2>
        <p className='mt-3 line-clamp-3 leading-7 text-gray-400'>{project.description}</p>
         {/* Technologies */}
         <div className='mt-5 flex flex-wrap gap-2'>
            {project.technologies.map((technology)=>(
                <span key={technology} className='rounded-full bg-blue-600/10 px-3 py-1 text-sm text-blue-400'>{technology}</span>
            ))}
         </div>
         {/* Details Button */}
         <Link to={`/projects/${project.id}`} className='mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-semibold transition duration-300 hover:bg-blue-700'>
            View Details
         </Link>
       </div>
    </div>
  )
}

export default ProjectCard
