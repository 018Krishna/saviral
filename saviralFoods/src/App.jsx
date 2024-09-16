
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductDescription from "./components/ProductDescription";

function App() {
  

  return (
    <>
    <Router>
     
   <div className="App">
    <Routes>
    <Route path="/" element={<Homepage />} />
   
    <Route path="/product/:id" element={<ProductDescription />} />

    </Routes>

   </div>

    </Router>
    </>
  )
}

export default App
