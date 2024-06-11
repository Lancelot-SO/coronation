import React, { useEffect, useState } from 'react'

import ProjectRed from './ProjectRed'

import { projectsNav } from '../data'
import { projectsData } from "../data"

const ProjectsRed = () => {

    const [item, setItem] = useState({ name: 'View All' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0);

    useEffect(() => {
        //get the projects based on the clicked item in projectNav

        if (item.name === 'View All') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(
                (project) => {
                    return project.category === item.name
                }
            );
            setProjects(newProjects)
        }

    }, [item])

    const handleClick = (e, index) => {
        setItem({
            name: e.target.textContent
        })
        setActive(index)
    }

    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col w-[1120px] h-[1530px]'>
                    <ul className='flex w-[607px] h-[52px] items-center gap-4'>
                        {projectsNav.map((item, index) => {

                            return <li
                                onClick={(e) => {
                                    handleClick(e, index);
                                }}
                                key={index} className={`${active === index ? 'bg-secondary text-white' : ''} cursor-pointer p-2 rounded-[34px] border border-black text-black flex items-center justify-center text-[16px]`}>{item.name}</li>
                        })}
                    </ul>

                    {/* display all the projects here */}
                    <div className='grid grid-cols-3'>
                        {
                            projects.map((item) => {
                                return <ProjectRed item={item} key={item.id} />
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsRed