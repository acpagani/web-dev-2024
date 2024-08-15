import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Info from './components/Info'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header/>
      <div className="mainInfo">
        <section id="info">
          <Info/>
          <Skills/>
        </section>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
