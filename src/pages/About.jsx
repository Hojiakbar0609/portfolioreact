import { Image } from '../assets'
import { NavLink } from 'react-router-dom'
function About() {
  return (
    <div className='bg-black h-[100%] pt-16 px-5 lg:px-0'>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <NavLink to='/'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Home
            </NavLink>
          </li> 
          <li>
            <NavLink to="/about">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              About
            </NavLink>
          </li> 
        </ul>
      </div>
      <h3 className='text-white text-3xl lg:text-5xl capitalize font-bold mt-6'>about me</h3>
      <div className='lg:grid lg:grid-cols-2 flex flex-col gap-y-4 gap-x-[450px] lg:justify-between mt-6 items-center'>
        <p className=' lg:w-[822px] text-white lg:text-[25px] font-normal lg:leading-[38px]'>With over 2 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that each design not only looks great but also delivers an exceptional experience</p>
        <img src={Image} alt=""  className='w-[270px] h-[270px] rounded-3xl border p-2 border-neutral-700'/>
      </div>
      <h3 className='text-white text-[32px] font-bold mt-5'>My skills</h3>
      <div className='flex-col lg:flex lg:flex-row gap-x-10 mt-5 px-5'>
        <ul className='list-disc'>
          <li className='text-zinc-400 text-lg font-normal mb-3'>User Interface (UI) Design</li>
          <li className='text-zinc-400 text-lg font-normal mb-3'>User Experience (UX) Design</li>
          <li className='text-zinc-400 text-lg font-normal mb-3'>User Research</li>
          <li className='text-zinc-400 text-lg font-normal mb-3'>HTML5, CSS3, SASS, BOOTSTRAP5, TAILWINDCSS, DAISYUI</li>
        </ul>
        <ul className='list-disc mb-4'>
          <li className='text-zinc-400 text-lg font-normal mb-3'>JAVASCRIPT, REACTJS, REDUX, REDUXTOOLKIT</li>
          <li className='text-zinc-400 text-lg font-normal mb-3'>Interaction Design</li>
          <li className='text-zinc-400 text-lg font-normal mb-3'>Responsive Design</li>
          <li className='text-zinc-400 text-lg font-normal mb-3'>Figma</li>
        </ul>
      </div>
    </div>
  )
}

export default About