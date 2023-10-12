import { HiDownload } from 'react-icons/hi'
import NavLinks from './NavLinks'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const notify = () => {
    toast.success('Download Succes!', {
      position: toast.POSITION.TOP_CENTER
    })
  }
  return (
    <div className=''>
          <div className="navbar flex justify-center items-center">
              <div className="navbar-center flex gap-x-6 mt-6">
               <NavLinks />
                <div className='dropdown dropdown-hover'>
                <a className='btn btn-outline btn-ghost duration-300 hidden lg:flex' href="resume.pdf" download="resume.pdf" onClick={notify}><HiDownload /> Download CV</a>
                <ToastContainer/>
                  <a href="resume.pdf" download="resume.pdf" tabIndex={0} className=' text-white text-xl flex lg:hidden'><HiDownload /></a>
                  <p tabIndex={0} className='lg:hidden flex dropdown-content absolute top-6 right-2 bg-success text-black rounded-lg p-2 w-40 items-center gap-x-3'><AiOutlineInfoCircle/>  Download CV</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar