import React, { useEffect, useState } from 'react'

import CoreCareerRed from './CoreCareerRed'

import { careerNav } from '../data'
import { careerData } from "../data"

const CoreCareersRed = () => {

    const [item, setItem] = useState({ name: 'LIFE AT CORONATION' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0);


    useEffect(() => {
        //get the projects based on the clicked item in projectNav

        if (item.name === 'LIFE AT CORONATION') {
            setProjects(careerData);
        } else {
            const newCareers = careerData.filter(
                (project) => {
                    return project.category === item.name
                }
            );
            setProjects(newCareers)
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
                <div className='flex flex-col w-[1120px] h-[756px]'>
                    <ul className='flex w-[969.5px] h-[52px] border items-center mt-[60px] ml-8 gap-4'>
                        {careerNav.map((item, index) => {

                            return <li
                                onClick={(e) => {
                                    handleClick(e, index);
                                }}
                                key={index} className={`${active === index ? 'bg-secondary text-white' : ''} cursor-pointer border-r-2 p-2 flex items-center justify-center text-[16px]`}>{item.name}</li>
                        })}
                    </ul>

                    {/* display all the projects here */}
                    <div className=''>
                        {
                            projects.map((item) => {
                                return <CoreCareerRed item={item} key={item.id} />
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreCareersRed