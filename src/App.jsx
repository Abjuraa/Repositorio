import react from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import TimeLine from './components/TimeLine.jsx'
import Languages from './components/Languages.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'


function App() {
  return (
    <div className="flex flex-col bg-primary">
      <MainLayout>
        <section id="welcome"><Hero /></section>
        <section id="aboutme"><AboutMe /></section>
        <section><TimeLine /></section>
        <section><Languages /></section>
        <section id='projects'><Projects /></section>
        <section id='contact'><ContactMe /></section>
      </MainLayout>
    </div>
  )
}

export default App
