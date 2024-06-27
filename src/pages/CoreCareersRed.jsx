import React, { useEffect, useState } from 'react';
import CoreCareer from './CoreCareer';
import { careerNav, careerData } from '../data';

const CoreCareers = () => {
    const [selectedCategory, setSelectedCategory] = useState(careerNav[0].name);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const newCareers = careerData.filter(project => project.category === selectedCategory);
        setProjects(newCareers);
    }, [selectedCategory]);

    return (
        <div className="container mx-auto p-4 pt-8">
            <nav className="flex space-x-4 mb-8 pl-[200px]">
                {careerNav.map((navItem, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded ${selectedCategory === navItem.name ? 'bg-secondary text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setSelectedCategory(navItem.name)}
                    >
                        {navItem.name}
                    </button>
                ))}
            </nav>
            <div className='flex items-center justify-center'>
                <div>
                    {projects.map((item) => (
                        <CoreCareer item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreCareers;
