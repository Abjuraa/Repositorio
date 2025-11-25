import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import TimeLine from './components/TimeLine.jsx'
import Languages from './components/Languages.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'


function App() {
  const [loading, setLoading] = useState(true);
  const hasLoadedShow = localStorage.getItem('loadedMain');

  useEffect(() => {

    if (hasLoadedShow) {
      setLoading(false);
    } else {
      setTimeout(() => {
        localStorage.setItem('loadedMain', 'true');
        setLoading(false);
      }, 2000)
    }
  })

  if (loading) {
    return <LoadingScreen />
  }

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
