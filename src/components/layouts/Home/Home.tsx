import { useEffect, useState } from "react"
import { Mail, Download } from "lucide-react"
import profile_picture from "../../../assets/profile_picture.png"
import "./Home.css"

const getGreeting = (): string => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 18) return "Bonjour"

  if (hour >= 18 && hour < 22) return "Bonsoir"
  return "Salut"
}

const Home = () => {
  const [greeting, setGreeting] = useState(getGreeting)

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreeting()), 60_000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="w-full max-w-6xl mx-auto px-4 py-8 md:py-20 min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Colonne Gauche : Texte */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-base-content">
            {greeting} ! <br />Je suis
            <span className="text-accent ml-2">Kplolali AGBENONWOSSI</span>  
          </h1>
          
          <p className="my-6 text-base sm:text-lg text-base-content/80 max-w-lg leading-relaxed">
            Mon travail se partage entre le développement d'applications web fullstack et l'expérimentation de systèmes embarqués.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a 
              href="#contact"
              className="btn btn-accent gap-2 sm:w-fit px-6"
            >
              <Mail className="w-5 h-5" />
              Me contacter
            </a>

            <a 
              href="public/docs/CV_AGBENONWOSSI_Kokou_Kplolali.pdf"
              download
              className="btn btn-outline btn-accent gap-2 sm:w-fit px-6"
            >
              <Download className="w-5 h-5" />
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Colonne Droite : Forme & Image Masquée Positionnée en Haut */}
        <div className="flex justify-center items-center order-1 md:order-2">
          {/* Conteneur principal */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 aspect-square relative flex items-center justify-center shrink-0">
            
            {/* Cercle extérieur en pointillés */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent/40 animate-spin-slow"></div>

            {/* Forme Morphing avec masque (overflow-hidden) */}
            <div className="w-full h-full animate-morph overflow-hidden border-2 md:border-4 border-accent shadow-2xl relative">
              <img 
                src={profile_picture}
                alt="Kplolali AGBENONWOSSI"
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[140%] max-w-none object-cover object-top"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Home