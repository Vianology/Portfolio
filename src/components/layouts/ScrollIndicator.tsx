import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"

// Ordre des sections tel qu'affiché dans la page (voir les "id" dans App.tsx et Footer.tsx)
const SECTION_IDS = ["home", "about", "experiences", "projects", "contact", "footer"]

const ScrollIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const tickingRef = useRef(false)

  const updateScrollState = useCallback(() => {
    const sections = SECTION_IDS
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const scrollPosition = window.scrollY + window.innerHeight / 2

    let newIndex = 0
    sections.forEach((section, i) => {
      if (section.offsetTop <= scrollPosition) newIndex = i
    })
    setActiveIndex(newIndex)

    // Vraiment tout en bas de la page (après le footer), pas seulement
    // dans la dernière section listée ci-dessus.
    setIsAtBottom(
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    )
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(() => {
        updateScrollState()
        tickingRef.current = false
      })
    }

    updateScrollState()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [updateScrollState])

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const nextIndex = Math.min(activeIndex + 1, SECTION_IDS.length - 1)

    if (nextIndex === activeIndex) {
      // Déjà sur la dernière section listée (le footer) mais pas encore
      // tout en bas du document : on termine la descente jusqu'au bout.
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
      return
    }

    document.getElementById(SECTION_IDS[nextIndex])?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isAtBottom ? "Remonter en haut de la page" : "Aller à la section suivante"}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-accent-content shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
    >
      {isAtBottom ? (
        <ArrowUp className="w-5 h-5 animate-bounce motion-reduce:animate-none" />
      ) : (
        <ArrowDown className="w-5 h-5 animate-bounce motion-reduce:animate-none"/>
      )}
    </button>
  )
}

export default ScrollIndicator