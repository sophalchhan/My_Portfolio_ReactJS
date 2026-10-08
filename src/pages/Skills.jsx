import React from 'react'

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
    name: "VUE",
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
  return (
    <section className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className='mx-auto max-w-7xl'>
        {/* ================= HEADER ================= */}
        <div className='mb-16 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500'>My Skills</p>
            <h1 className='text-4xl font-bold sm:text-5xl'>Technologies I Use</h1>
            <p className='mx-auto mt-4 max-w-2xl text-gray-400'>
                Here are some of the technologies and tools I use to build
                modern and scalable web applications.
            </p>
            <div className='mx-auto mt-6 h-1 w-20 rounded-full bg-blue-600'></div>
        </div>
      </div>
      {/* ================= SKILLS GRID ================= */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill)=>(
            <div key={skill.id} className='rounded-xl border border-gray-800 bg-gray-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-600'>
                {/* Skill Header */}
                <div className='mb-4 flex items-center justify-between'>
                    <div>
                        <h2 className='text-lg font-semibold'>{skill.name}</h2>
                        <p className='mt-1 text-sm text-gray-500'>{skill.category}</p>
                    </div>
                </div>
                <span className='font-semibold text-blue-500'>{skill.level}%</span>
            </div>
            
        ))}
      </div>
    </section>
  )
}

export default Skills
