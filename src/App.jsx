import Hero from './sections/Hero.jsx'
import Showcase from './sections/Showcase.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Contacts from './sections/Contacts.jsx'
import Footer from './sections/Footer.jsx'


const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <AboutMe />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App
