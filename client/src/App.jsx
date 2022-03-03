import React from 'react';
import './styles/app.scss';
import Toolbar from './components/Toolbar';
import SettingBar from './components/SettingBar';
import Canvas from './components/Canvas';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App=()=>{
    return(
        <BrowserRouter>
       <div className='app'>
            <Switch>
                <Route path='/:id'>
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
                </Route>
                <Redirect to={`${(+new Date).toString(16)}`}/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default App;