import React from 'react';
import './App.css';
// import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import ContactUs from './routes/ContactUs';
import Layout from './routes/Layout';
import ProjectDetail from './projects/ProjectDetail';



function App() {
  return (
   <>
   <div className='App'>
   <Routes>
     <Route  element={<Layout />} >
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="product-detail" element={<ProjectDetail />} />
      
     </Route>

   </Routes>
   </div>
   </>
  );
}

export default App;
