import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home';
import {AllNotes} from './pages/allNotes';
import { Navbar } from './components/navbar';
import { Alert } from './components/alert';
import { AlertState } from './context/alert/AlertState';
import { FireBaseState } from './context/firebase/FirebaseState';



function App() {
  return (
    <FireBaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Switch>
              <Route path={'/'} exact component={Home} />
            </Switch>
            <Alert />
            <Switch>
              <Route path={'/notes'} component={AllNotes} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FireBaseState>
  );
}

export default App;
