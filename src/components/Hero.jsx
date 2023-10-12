import image from '../assets/image.jpg'
function Hero() {
  return (
    <div className='flex flex-col gap-10 lg:flex-row justify-center items-center h-[100vh]'>
      <img src={image} alt="" className='w-48 h-48 rounded-3xl lg:w-96 lg:h-96 opacity-70' />
      <div className='w-96'>
        <h1 className='text-4xl lg:text-5xl text-white font-bold'>Hi, I'm <span className='text-primary'>Haydarov Hojiakbar</span></h1>
        <p className='text-zinc-400 mt-4 text-base lg:text-xl font-normal leading-6'>I'm a passionate Product Designer focused on crafting remarkable digital experiences. My aim is to blend functionality and aesthetics to create impactful solutions</p>
      </div>
      
    </div>
  )
}

export default Hero