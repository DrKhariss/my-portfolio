import React from 'react'
import { socialImgs } from '../Constants'

const Footer = () => {
  return (
  <footer className='footer'>
    <div className='footer-container'>
        <div className='socials'>
            {socialImgs.map((img) => (
                <a className='icon' target='_blank' href={img.url} key={img.url}>
                    <img
                    src={img.imgPath}  /> 
                </a>
            ))}
        </div>
        <div className='flex flex-col justify-center md:items-end items-center'>
            <p className='text-center'>
                © {new Date().getFullYear()} Kharis Nkemena.
            </p>
        </div>
    </div>
  </footer>
  )
}

export default Footer
