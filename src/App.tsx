import './App.css'
import MainPage from './pages/MainPage'
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
function App() {


  return (
    <>
<BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  <Footer />
</BrowserRouter>
    </>
  )
}

export default App
