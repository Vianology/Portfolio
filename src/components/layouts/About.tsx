import type { ElementType } from "react"
import SectionHeader from "../ui/SectionHeader"
import profile_picture from "../../assets/profile_picture.png"
import { ABOUT_INFOS } from "../../data/aboutData"

const About = () => {
  return (
    <section id="about" className="bg-base-300 px-5 md:px-[8%] py-12">
        <div className="max-w-6xl mx-auto">
            <SectionHeader title="À propos de moi"/>
            <div className="flex justify-center items-center">
                <div className="hidden md:block">
                      <img
                          src={profile_picture}
                          alt="Kplolali AGBENONWOSSI"
                          className="w-70 object-cover rounded-xl bg-accent"
                      />
                </div>
                <div className="md:ml-4 space-y-4">
                    {
                        ABOUT_INFOS.map(info=>{
                            const Icon : ElementType | undefined = info.icon
                            return(
                                <div key={info.id}
                                    className="flex flex-col md:flex-row 
                                    items-center bg-base-100  p-5 rounded-xl md:w-96 shadow-xl">
                                    <div className="mb-2 md:mb-0">
                                        {Icon ? <Icon/> : null}
                                    </div>
                                    <div className="md:ml-4 text-center md:text-left">
                                        <h3 className="text-xl font-bold mb-1">
                                            {info.title}
                                        </h3>
                                        <p className="text-sm">
                                            {info.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default About