import { NavLink } from 'react-router-dom'
import { BiCodeAlt } from 'react-icons/bi'
// images
import { Comfy, Ansor, Articles, Crud, Glasses, Portfolio, RandomUser, Shortly, SpiderGame, Unsplash, Weather } from '../assets'
const images = [
  { id: 1, img: Comfy, link: "https://comfy-store-shop.netlify.app/", title: "comfy", desciption: "Comfy store -> is an online furniture store" },
  { id: 2, img: Ansor, link: "https://ansor-med-hojiakbar.netlify.app", title: "ansor med", desciption: "Ansar Med -> is a hospital that provides treatment in various ways. Ansar med clinic treats with natural methods" },
  { id: 3, img: Articles, link: "https://articles-react.netlify.app", title: "articles", desciption: "Articles ->  come in various articles" },
  { id: 4, img: Portfolio, link: "https://hojiakbarhaydarov.netlify.app", title: "portfolio", desciption: "This site is a portfolio about myself" },
  { id: 5, img: RandomUser, link: "https://user-random-hojiakbar.netlify.app", title: "random user", desciption: "Random user -> visits people on this site and can see information about them. Additional searches, cleaning and deletion are possible" },
  { id: 6, img: Unsplash, link: "https://unsplash-search-site-hojiakbar.netlify.app", title: "unsplash", desciption: "Unsplash -> images come in random view and their information can be viewed" },
  { id: 7, img: Weather, link: "https://weather-app-khojiakbar.netlify.app", title: "weather app", desciption: "Weather -> this site is a site that determines the weather in countries. A search is given and the answer is displayed" },
  { id: 8, img: SpiderGame, link: "https://spider-game-hojiakbar.netlify.app", title: "spider man game", desciption: "Spider Man Game -> this game has 3 stages. You choose one of them and start the game." },
  { id: 9, img: Shortly, link: "https://shortly-hojiakbar.netlify.app", title: "shortly", desciption: "Shorty -> makes given links look short." },
  { id: 10, img: Crud, link: "https://crud-khojiakbar.netlify.app", title: "crud", desciption: "CRUD -> crud data creation can be deleted and updated." },
  { id: 11, img: Glasses, link: "https://glasses-project.netlify.app", title: "glasses", desciption: "Glasses -> glasses site, glasses are selected and the price is displayed on the screen. You can also delete it if you want." },
]
function Work() {
  return (
    <div className="pt-20 flex flex-col px-5">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <NavLink to='/'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Home
            </NavLink>
          </li> 
          <li>
            <NavLink to="/work">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Work
            </NavLink>
          </li> 
        </ul>
      </div>
      <h3 className="text-white text-3xl lg:text-5xl font-bold">My work</h3>
      <p className="w-96 lg:w-[700px] text-zinc-400 text-base lg:text-lg mt-4 font-normal ">Here's a glimpse of some of my recent and exciting projects. Each of them reflects my focus on user-centered design and my commitment to excellence in user experience.</p>

      {images.map((image) => {
        const { id, img, link, title, desciption } = image
        return (
          <div className="card lg:card-side bg-base-100 shadow-xl my-6 " key={id}>
            <figure><img className='lg:h-96 lg:w-[700px]' src={img} alt="Album"/></figure>
            <div className="card-body">
              <h2 className="card-title capitalize font-bold text-white text-xl lg:text-3xl">
                { title }
              </h2>
              <p className='text-zinc-400 mt-2 text-base lg:text-lg w-[400px]'>
                { desciption }
              </p>
              <div className="card-actions justify-end">
                <NavLink to={link} className="btn btn-success"><BiCodeAlt/> Live Demo</NavLink>
              </div>
            </div>
          </div>
        )
      })}

      
    </div>
  )
}

export default Work