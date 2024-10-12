import Accueil from "./Components/Accueil"
import Apropos from "./Components/Apropos"
import Competences from "./Components/Competences"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"



function App() {

  return (
    <div>
      <Navbar />
      <Accueil />
      <Apropos />
      <Competences />
      <Contact />
    </div>
  )
}

export default App
