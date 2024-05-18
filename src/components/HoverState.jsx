import React, { useState } from 'react'
import Navbar from './Navbar';
import Home from '../pages/Home';

const HoverState = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div>
            <Navbar hovered={hovered} />
            <Home
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
        </div>
    );
}

export default HoverState