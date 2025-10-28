import TitleHeader from '../components/TitleHeader'
import { aboutMe } from '../Constants'
import GlowCard from '../components/GlowCard'

const AboutMe = () => {
  return (
    <section id='aboutMe' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title='Get to Know Me A Bit More'
          sub='About Me!'
        />

        <div className='lg:columns-3 md:columns-2 columns-1 mt-16' >
          {aboutMe.map(({ imgPath, heading, text }, index) => (
            <GlowCard
            key={index} 
            card={{ heading, text }}>
              {index === 0 ? (
                <div className='flex flex-col items-center text-center gap-5' >
                  <img
                    src={imgPath}
                    alt='Kharis Nkemena'
                    className='rounded-full object-cover w-40 h-40 border border-white/20'/>
                  <h3 className='font-semibold text-3xl'>{heading}</h3>
                </div>
              ) : (

                <div>
                  <h3 className='font-semibold text-2xl mb-2'>{heading}</h3>
                  <p className='text-white-50 mb-2'>{text}</p>
                </div>
              )}
            </GlowCard>
            ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
