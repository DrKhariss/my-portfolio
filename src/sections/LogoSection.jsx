import { logoIconsList } from '../Constants'

const LogoIcon = ({ icon }) => (
  <div className='flex-none flex-center marquee-item'>
    <img src={icon.imgPath} alt='logo-icon' />
  </div>
)

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge' />
      <div className='gradient-edge' />

      <div className='marquee h-50'>
        <div className='marquee-box md:gap-12 gap-5'>
          { logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
        </div>


    </div>
  )
}

export default LogoSection
