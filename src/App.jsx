
import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';

export default function App() {
  return (
    <>
      <Header />
      <Summary />
      <div className="grid-container">
        <div className="grid-left">
          <Education />
          <Skills />
        </div>
        <div className="grid-right">
          <Experience />
        </div>
      </div>
    </>
  )
}

