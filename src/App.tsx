import Navbar from "./components/layouts/Navbar"
import Home from "./components/layouts/Home/Home"
import About from "./components/layouts/About"
import Contact from "./components/layouts/Contact"
import Experiences from "./components/layouts/Experiences"
import Projects from "./components/layouts/Projects"
import Footer from "./components/layouts/Footer"
import ScrollIndicator from "./components/layouts/ScrollIndicator"

function App() {

  return (
    <>
      <header className="px-5 md:px-[8%]">
        <Navbar/>
      </header>
      <main>
        <div className="px-5 md:px-[8%]">
          <Home/>
        </div>
        <About/>
        <div className="px-5 md:px-[8%]">
          <Experiences/>
          <Projects/>
          <Contact/>
        </div>
      </main>
      <Footer/>
      <ScrollIndicator/>
    </>
  )
}

export default App