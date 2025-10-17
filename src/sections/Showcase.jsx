import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = React.useRef(null);
    const project1Ref = React.useRef(null);
    const project2Ref = React.useRef(null);
    const project3Ref = React.useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
            card, 
            { y: 50, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 1,
                delay: 0.3 * ( index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
            })
    });

    gsap.fromTo(
        sectionRef.current, 
        { opacity: 0 }, 
        {opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
    }, []);

  return (
    <section id='work'ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src='/images/project1.png' alt='HooBank' /> 
            </div>
            <div className='text-content'>
              <h2>HooBank, All Your Financial Needs in Just One Click</h2>
              <p>HooBank is a fictional bank website built with React and TailwindCSS to showcase modern web design principles and responsive layouts. With a focus on user experience, HooBank provides a seamless online banking experience across all devices.</p>
            </div>
          </div>

          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
                <div className='image-wrapper bg-[#ffefdb]'>
                    <img src='/images/project2.png' alt='the cottage' />
                </div>
                <h2>A Replica of The Cottage Downderry's Landing Page</h2>
            </div>
            <div className='project' ref={project3Ref}>
                <div className='image-wrapper bg-blue-50'>
                    <img src='/images/project3.png' alt='the counter' />
                </div>
                <h2>The Counter App</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Showcase
