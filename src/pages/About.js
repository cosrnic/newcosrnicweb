import React from 'react'
import { FaTwitter, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Flag from '../img/welsh-flag.png'
function About() {
  return (
    <div className='flex text-white justify-center w-full ml-32 md:ml-36 lg:ml-0 mt-8 lg:text-xl items-center text-center font-medium z-[100] font-poppins max-w-max lg:max-w-none'>
      <div>
        About Me
        <div className='p-4 mt-4 bg-gray-900 rounded-lg border-2 border-blue-500 h-auto md:h-[200px] md:w-[500px] lg:h-[550px] w-auto lg:w-[700px]'>
          <span className='lg:text-lg text-justify'>
            Hey, I'm Cosmic and I make things. <br /> What things? Well lots of things, such as Minecraft Plugins, Discord Bots, Websites, Logos and More.
            <br />
            <br />
            Socials<br />
            <span className='mt-2 inline-flex p-2'>
              <a href='https://twitter.com/cosrnic_' rel="noreferrer" target={'_blank'}><FaTwitter size={22} className='hover:text-blue-500 transition-all outline border-1 outline-offset-[5px] rounded-full'/></a>
              <a href='https://www.youtube.com/channel/UC5oqJF5goUYYcdSmLyEIV7Q' rel="noreferrer" target={'_blank'}><FaYoutube size={22} className='ml-6 hover:text-blue-500 transition-all outline border-1 outline-offset-[5px] rounded-full'/></a>
              <a href='https://twitch.tv/cosrnic' rel="noreferrer" target={'_blank'}><FaTwitch size={22} className='ml-6 hover:text-blue-500 transition-all outline border-1 outline-offset-[5px] rounded-full'/></a>
              <Link to='/discord'><FaDiscord size={22} className='ml-6 hover:text-blue-500 transition-all outline border-1 outline-offset-[5px] rounded-full'/></Link>
            </span><br /><br />
            Other Things<br />
            My favourite artists are <a href='https://www.youtube.com/user/JoshChaceHD' rel='noreferrer' target={'_blank'}><span className='font-bold hover:underline text-blue-500'>Josh A</span></a> and <a href='https://www.youtube.com/c/DJBOOTYBUTT' rel='noreferrer' target={'_blank'}><span className='font-bold hover:underline text-blue-500'>Jake Hill</span></a><br />
            My favourite songs are <a href='https://youtu.be/WriCXaW2ZuU' rel='noreferrer' target={'_blank'}><span className='text-blue-500 hover:underline '>Sober - Josh A</span></a>, <a href='https://youtu.be/9TMymE2IpzY' rel='noreferrer' target={'_blank'}><span className='text-blue-500 hover:underline'>Dying Lately(full album) - Jake Hill</span></a>, <a href='https://youtu.be/GYwOWO929R0' rel='noreferrer' target={'_blank'}><span className=' text-blue-500 hover:underline'>All Time Low - Josh A</span></a><br />
            <br />
            <span>"Personal" Things</span>
            <br />
            My name is private <br />
            I am 17 years old <br />
            I live in Wales <img src={Flag} alt='' className='h-[25px] w-auto rounded inline-flex' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default About