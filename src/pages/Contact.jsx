import { MdEmail } from 'react-icons/md'
import { BiLogoTelegram, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div className='bg-black pb-2 h-screen lg:h-[100%]'>
      <div className="text-sm breadcrumbs ml-4 lg:ml-0">
        <ul>
          <li>
            <NavLink to='/'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Home
            </NavLink>
          </li> 
          <li>
            <NavLink to="/contact">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Contact
            </NavLink>
          </li> 
        </ul>
      </div>
      <div className='m-4 lg:m-0 lg:mt-4 bg-neutral-900 rounded-3xl border border-neutral-700 flex flex-col justify-center items-center lg:px-20 lg:py-32 mt-16'>
      <h2 className='text-white text-3xl lg:text-5xl font-bold py-4'>Let's talk</h2>
      <p className=' p-4 lg:w-[600px] mt-5 text-center text-zinc-400 text-lg font-normal lg:leading-[27px]'>Interested in working together or have a question? Feel free to reach out. I'm here to help you turn your ideas into amazing digital realities. Looking forward to hearing from you soon!</p>
      <div className='flex flex-col gap-y-3 lg:flex mt-12 items-center gap-x-4'>
        <button className='flex bg-black py-2 px-[17px] rounded-lg border border-neutral-700 items-center hover:shadow-md hover:shadow-blue-950 duration-200'>
          <MdEmail className='mr-[10px]' />
          <a href="mailto:haydarovhojiakbar97@gmail.com">haydarovhojiakbar97@gmail.com</a>
        </button>
        <div className='flex gap-x-6 mb-2'>
            <a href='https://t.me/Haydarov_22_01' className='bg-black py-[12px] px-3 border border-neutral-700 rounded-lg hover:shadow-md hover:shadow-blue-950 duration-200'>
          <BiLogoTelegram/>
        </a>
        <a href='https://instagram.com/_hojiakbar_haydarov__?igshid=MzRlODBiNWFlZA==' className='bg-black py-[12px] px-3 border border-neutral-700 rounded-lg hover:shadow-md hover:shadow-blue-950 duration-200'>
          <BiLogoInstagram/>
        </a>
        <a href='' className='bg-black py-[12px] px-3 border border-neutral-700 rounded-lg hover:shadow-md hover:shadow-blue-950 duration-200'>
          <BiLogoLinkedin/>
        </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact