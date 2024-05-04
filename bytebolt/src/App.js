import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
    //   <Router>
    //   <Switch>
    //     <Route exact index path="/" component={Home} />
    //   </Switch>
    // </Router>

  );
}

export default App;
