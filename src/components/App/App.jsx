import React from 'react';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';



const App = () => {
    return(<div>
       <BrowserRouter>
       <div>
           <Route path="/" component={} />
           <Route path="/about" component={} />
           <Route path="/projects" component={} />
           <Route path="/skills" component={} />
           <Route path="/contact" component={} />
       </div>
       </BrowserRouter>
    </div>);
}

export default App;