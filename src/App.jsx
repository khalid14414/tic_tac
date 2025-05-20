import './App.css'
import Footer from './components/Footer.jsx'
import Main from './components/main.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  


  return (
    <>
    <Navbar />
      <h1>HELLO WORLD</h1>
      <Main>
         <h1>Welcome to the Main Component</h1>
          <p>This is the main content area.</p>
      </Main>
      <Main>
        <h3>This is a New main Component</h3>
      </Main>
      <Footer name="Philp" >
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      </Footer>

    </>
  )
}

export default App
