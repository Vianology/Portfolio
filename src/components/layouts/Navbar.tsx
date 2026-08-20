import { NAV_LINKS } from "../../data/navigationData"

const Navbar = () => {
  return (
    <nav className="flex justify-center md:justify-between items-end p-4">
      <a href="#home"
        className="flex items-center font-bold text-3xl md:text-xl"
      >
        <span className="text-accent">___</span>
        vianology
        <span className="text-accent">___</span>
      </a>
      <ul className="hidden sm:flex space-x-2">

        {
          NAV_LINKS.map(link => (
            <li key={link.id}>
              <a href={link.href}
                className="btn btn-sm btn-ghost text-sm"
              >{link.label}</a>
            </li>
          ))
        }

      </ul>
    </nav>
  )
}

export default Navbar