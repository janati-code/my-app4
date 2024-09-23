
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import Mainpage from './components/nav/Mainpage';

// import Cardlist from './pages/Cardlist';
// import Form from './pages/Form';

function App() {
  return (
   
    <React.Fragment >
       <BrowserRouter>
      <Mainpage />
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
