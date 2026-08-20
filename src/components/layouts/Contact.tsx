import React, { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, User, MessageSquare, AtSign, Loader2, AlertCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import SectionHeader from "../ui/SectionHeader"

interface FormErrors {
  from_name?: string
  from_email?: string
  message?: string
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  
  // États des champs du formulaire
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  })

  // États de validation et statut
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null)

  // Validation des champs obligatoires
  const validateField = (name: string, value: string) => {
    let error = ""
    if (name === "subject") return "" // L'objet est optionnel

    if (!value.trim()) {
      error = "Ce champ est obligatoire."
    } else if (name === "from_email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Adresse email invalide."
    }
    return error
  }

  // Validation complète du formulaire
  const validateForm = () => {
    const newErrors: FormErrors = {
      from_name: validateField("from_name", formData.from_name),
      from_email: validateField("from_email", formData.from_email),
      message: validateField("message", formData.message)
    }
    return newErrors
  }

  // Le formulaire est valide si les 3 champs obligatoires sont remplis
  const isFormValid = 
    formData.from_name.trim() !== "" &&
    formData.from_email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email) &&
    formData.message.trim() !== ""

  // Gestion du changement dans les inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  // Marquer le champ comme "touché" lors de la perte de focus
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setTouched({
      from_name: true,
      from_email: true,
      message: true
    })

    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.values(validationErrors).some(err => err !== "") || !formRef.current) return

    setLoading(true)
    setStatus(null)

    try {
      // Objet par défaut si non renseigné
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject.trim() || "Message depuis le Portfolio",
        message: formData.message
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus({ type: "success", msg: "Message envoyé avec succès !" })
      
      // Réinitialisation du formulaire
      setFormData({ from_name: "", from_email: "", subject: "", message: "" })
      setTouched({})
      setErrors({})

      // Disparition du message de succès au bout de 3 secondes
      setTimeout(() => {
        setStatus(null)
      }, 3000)

    } catch (error) {
      console.error(error)
      setStatus({ type: "error", msg: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard." })

      setTimeout(() => {
        setStatus(null)
      }, 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          title="Me contacter"
          subtitle="Un projet en tête, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me laisser un message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          
          {/* Cartes d'informations */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            <div className="card bg-base-200 border border-base-300 p-6 shadow-lg hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">WhatsApp</h3>
                  <a
                    href="https://wa.me/22890553169"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-medium text-base-content hover:text-accent transition-colors"
                  >
                    +228 90 55 31 69
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 border border-base-300 p-6 shadow-lg hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">Email</h3>
                  <a href="mailto:Kplolali@vianology.tech" className="text-sm sm:text-base font-medium text-base-content hover:text-accent transition-colors">
                    Kplolali@vianology.tech
                  </a>
                </div>
              </div>
            </div>


            <div className="card bg-base-200 border border-base-300 p-6 shadow-lg hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">Téléphone</h3>
                  <a href="tel:+22890553169" className="text-sm sm:text-base font-medium text-base-content hover:text-accent transition-colors">
                    +228 90 55 31 69
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 border border-base-300 p-6 shadow-lg hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">Localisation</h3>
                  <p className="text-sm sm:text-base font-medium text-base-content">
                    Lomé, Togo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3">
            <div className="card bg-base-200 border border-base-300 shadow-xl p-6 sm:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                
                {/* Nom */}
                <div className="form-control w-full flex flex-col gap-1.5">
                  <label htmlFor="from_name" className="text-sm font-medium text-base-content/90">
                    Nom complet <span className="text-error">*</span>
                  </label>
                  <div className={`input input-bordered bg-base-100 flex items-center gap-3 transition-colors ${
                    touched.from_name && errors.from_name 
                      ? "border-error focus-within:outline-error" 
                      : "focus-within:outline-accent"
                  }`}>
                    <User className="w-4 h-4 text-base-content/50" />
                    <input 
                      id="from_name"
                      name="from_name" 
                      type="text" 
                      value={formData.from_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Votre nom et prénom" 
                      aria-invalid={Boolean(touched.from_name && errors.from_name)}
                      aria-describedby={touched.from_name && errors.from_name ? "from_name-error" : undefined}
                      className="grow text-sm bg-transparent border-none outline-none" 
                    />
                  </div>
                  {touched.from_name && errors.from_name && (
                    <span id="from_name-error" className="text-xs text-error flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.from_name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-control w-full flex flex-col gap-1.5">
                  <label htmlFor="from_email" className="text-sm font-medium text-base-content/90">
                    Adresse email <span className="text-error">*</span>
                  </label>
                  <div className={`input input-bordered bg-base-100 flex items-center gap-3 transition-colors ${
                    touched.from_email && errors.from_email 
                      ? "border-error focus-within:outline-error" 
                      : "focus-within:outline-accent"
                  }`}>
                    <AtSign className="w-4 h-4 text-base-content/50" />
                    <input 
                      id="from_email"
                      name="from_email" 
                      type="email" 
                      value={formData.from_email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="nom@exemple.com" 
                      aria-invalid={Boolean(touched.from_email && errors.from_email)}
                      aria-describedby={touched.from_email && errors.from_email ? "from_email-error" : undefined}
                      className="grow text-sm bg-transparent border-none outline-none" 
                    />
                  </div>
                  {touched.from_email && errors.from_email && (
                    <span id="from_email-error" className="text-xs text-error flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.from_email}
                    </span>
                  )}
                </div>

                {/* Objet (Optionnel) */}
                <div className="form-control w-full flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-base-content/90">
                    Objet <span className="text-xs text-base-content/50 font-normal">(Optionnel)</span>
                  </label>
                  <div className="input input-bordered bg-base-100 flex items-center gap-3 transition-colors focus-within:outline-accent">
                    <MessageSquare className="w-4 h-4 text-base-content/50" />
                    <input 
                      id="subject"
                      name="subject" 
                      type="text" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message" 
                      className="grow text-sm bg-transparent border-none outline-none" 
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-control w-full flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-base-content/90">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Écrivez votre message ici..." 
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                    className={`textarea textarea-bordered bg-base-100 text-sm resize-none leading-relaxed w-full transition-colors ${
                      touched.message && errors.message 
                        ? "border-error focus:outline-error" 
                        : "focus:outline-accent"
                    }`}
                  ></textarea>
                  {touched.message && errors.message && (
                    <span id="message-error" className="text-xs text-error flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Alerte succès/erreur */}
                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`alert ${status.type === "success" ? "alert-success text-success-content" : "alert-error text-error-content"} text-sm py-2 px-4 shadow-md transition-all duration-300`}
                  >
                    <span>{status.msg}</span>
                  </div>
                )}

                {/* Bouton d'envoi */}
                <button 
                  type="submit" 
                  disabled={!isFormValid || loading}
                  className="btn btn-accent mt-2 gap-2 w-full sm:w-fit sm:self-end px-8 disabled:bg-accent/40 disabled:text-base-content/50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact