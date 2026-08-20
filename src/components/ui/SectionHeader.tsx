import React from "react"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  className = "" 
}) => {
  // Séparation du dernier mot pour lui appliquer la couleur d'accent
  const words = title.trim().split(" ")
  const lastWord = words.pop()
  const mainText = words.join(" ")

  return (
    <div className={`text-center mb-12 ${className}`}>
      {/* 'lowercase first-letter:uppercase' force uniquement la 1ère lettre en majuscule */}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-base-content lowercase first-letter:uppercase">
        {mainText} {lastWord && <span className="text-accent">{lastWord}</span>}
      </h2>
      
      {subtitle && (
        <p className="mt-3 text-base-content/70 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader