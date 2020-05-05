import React from 'react';
import ReactDOM from 'react-dom';
import SignInSide from './signside.js';
import ResponsiveDrawer from './MenuTs.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';



function App() {
	
	
  return (
    <div >
    <Router>
   
        <Route path="/" exact component={SignInSide} />
        
         <Route path="/ListDetails" exact component={ResponsiveDrawer} />
         
    </Router> 
		
			
		
		
    </div>
  );
}

export default App;