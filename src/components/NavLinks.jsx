import { NavLink } from "react-router-dom"

const links = [
    { id: 1, url: '/', text:"home"},
    {id: 2, url: '/work', text: "work"},
    {id: 3, url: '/about', text: "about"},
    { id: 4, url: '/contact', text: "contact" },
]
function NavLinks() {
  return (
      <>
          {links.map((link) => {
              const { id, url, text } = link
              return (
                  <li key={id} className="list-none hover:bg-neutral-900 py-2 px-[14px] rounded-lg duration-200">
                      <NavLink to={url} className='text-white text-base font-semibold leading-normal capitalize '>{ text }</NavLink>
                  </li>
              )
          })}
    </>
  )
}

export default NavLinks