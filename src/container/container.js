import React from 'react';

import './container.scss'
import About from '../components/about';
import AvatarExamples from '../components/avatar_examples';
import Pricing from '../components/pricing';

function Container() {

    return (
        <>
            <header className = 'header'>
                <p className="logo">
                    Normaly
                </p>
                <nav>
                    <a href="#" className="underline" >About</a>
                    <a href="#work-section" className="underline">Work</a>
                    <a href="#pricing" className="underline">Pricing</a>
                </nav>
            </header>
            <main>
                <div className = 'title-box'>
                    <h1>Normaly</h1>
                    <p>Web Developer | 3D Artist | Dancer</p>
                </div>
                    <About />
                <div id = 'work-section'>
                    <h2 className = 'sub-title'>Commissions currently <span className = 'status'>closed</span></h2>
                </div>  
                    <AvatarExamples />
                    <Pricing />
            </main>
            <footer>
                <p>&copy;Normaly 2022</p>
            </footer>
        </>
    )
}

export default Container;