import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../Constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// import { techStackImgs } from '../Constants'



const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, 
            opacity: 1, 
            ease: 'power2.inout',
            stagger: 0.2, 
            duration: 1,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center',
          }
        })
    })



  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5 z-50'>
        <TitleHeader 
        title='Tech Stacks I have Worked With'
        sub='Skills I Bring to the Table'
        />

        <div className='tech-grid'>
            {techStackIcons.map((icon) => (
                <div
                key={icon.name} 
                className='card-border tech-card overflow-hidden group xl:rounded-r-3xl rounded-lg'>
                    <div className='tech-card-animated-bg'/>
                    <div className='tech-card-content'>
                        <div tech-icon-wrapper>
                            <TechIcon model={icon}/>
                            <div className='padding-x w-full'>
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* {techStackImgs.map((icon) => (
                <div 
                key={icon.name} 
                className='card-border tech-card overflow-hidden group xl:rounded-3xl rounded-lg'>
                    <div className='tech-card-animated-bg' />
                    <div className='tech-card-content'>
                        <div className='tech-icon-wrapper'>
                            <img 
                            src={icon.imgPath} />
                        </div>
                        <div className='padding-x w-full'>
                            <p>{icon.name}</p>
                        </div>
                    </div>
                </div>
            ))} */}



        </div>
      </div>
    </div>
  )
}

export default TechStack
