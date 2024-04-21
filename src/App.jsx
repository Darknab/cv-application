
import './App.css';
import Education from './Education';
import Header from './Header';
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';

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

