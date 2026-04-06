import React from 'react';
import {  Routes, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const linkStyle=({isActive})=>({
    margin:'0 10px',
    textDecoration:'none',
    color:isActive?'red':'blue',
    fontWeight:isActive?'bold':'normal'
  });
  return(
    <div>
      <nav>
   <NavLink to="/" style={linkStyle} end>Home</NavLink>
   <NavLink to="/about" style={linkStyle}>About</NavLink>
   <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
   </nav>
   <hr/>
 <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
 </Routes>
    </div>

);
}
export default App;



import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);


import React from 'react';

function Home(){
    return <h2>Home Page</h2>
}

export default Home;


import React from 'react';

function Contact(){
    return <h2>Contact Page</h2>
}

export default Contact;


import React from 'react';

function About(){
    return <h2>About Page</h2>
}

export default About;
