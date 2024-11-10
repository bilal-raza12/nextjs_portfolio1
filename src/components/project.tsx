
import Image from 'next/image'
import Link from 'next/link'
const project= [
    {
     title: 'Dynamic Resume Builder',
     description:"A responsive application that allows user to build their resume.",
     technologies: ['HTML','CSS','Typescript'],
     image: '/images/dynamicresume.jpeg', 
     link:"https://shareable-resume-builder-omega.vercel.app/",
    },
    {
        title: 'Random Joke Genrator',
        description:"An application to freshen and lighten the mood of the user by generating hilarious and funny jokes.",
        technologies: ['Next.js','React','Tailwind CSS','Typescript'],
        image: '/images/rjg.jpeg', 
        link:"https://shareable-resume-builder-omega.vercel.app/",
       },
       {
        title: 'Coffee Bliss: Coffee shop',
        description:"A coffe shop website where user can order the coffeee of their choice .",
        technologies: ['HTML','CSS','Javascript'],
        image: '/images/coffeebliss.jpeg', 
        link:"https://shareable-resume-builder-omega.vercel.app/",
       },
      
]
const Projects = () => {
  return (
    <div className=' projects-container py-16 px-8'>
        <h2 className='project-title'>My Projects</h2>
        <div className='project-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                project.map((p) => (
                    <div key={p.title} className='
                    project-card 
                   '>
                       <div className='.project-image-container'>
                           <Image src={p.image} alt={p.title} className='project-image' width={600} height={240} ></Image>
                       </div>                       
                       <div className='project-details'>
                         <h2 className=
                         'project-title'>
                            {p.title}
                         </h2>
                         <p className='project-description'>
                              {p.description}
                         </p>
                         <p className='project.technologies'>
                            <span className='text-[#e23737]'>Technologies:</span>{p.technologies.join(', ')}
                         </p>
                         <Link href={p.link} className='project-link'>View Project</Link>

                       </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Projects