import { LuMail } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"

const SOCIAL_LINKS = [
  {
    label: "Envoyer un email",
    href: "mailto:Kplolali@vianology.tech",
    icon: LuMail,
    external: false
  },
  {
    label: "Contacter sur WhatsApp",
    href: "https://wa.me/22890553169",
    icon: FaWhatsapp,
    external: true
  },
  {
    label: "Voir le profil GitHub",
    href: "https://github.com/Vianology/",
    icon: FiGithub,
    external: true
  },
  {
    label: "Voir le profil LinkedIn",
    href: "https://www.linkedin.com/in/kplolali-agbenonwossi-5a2a89246",
    icon: FaLinkedinIn,
    external: true
  }
]

const Footer = () => {
  return (
    <footer id="footer" className="footer footer-horizontal footer-center bg-base-300 text-base-content p-15">
      <aside className="flex flex-col items-center gap-1">
        <a href="#home" className="flex items-center font-bold text-2xl md:text-5xl">
          <span className="text-accent">___</span>
          vianology
          <span className="text-accent">___</span>
        </a>
        <p className="text-lg text-base-content/70">
          Développement web fullstack &amp; systèmes embarqués
        </p>
        <p className="text-lg text-base-content/50 mt-2">
          Copyright © {new Date().getFullYear()} Kokou Kplolali AGBENONWOSSI - Tous droits réservés
        </p>
      </aside>

      <nav aria-label="Réseaux sociaux">
        <div className="grid grid-flow-col gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="p-2 rounded-full text-base-content/70 hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </nav>
    </footer>
  )
}

export default Footer