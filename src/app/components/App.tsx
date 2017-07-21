import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends React.Component {

    public render(): JSX.Element {
        return (
            <div className='container-fluid'>
                <p>Header here...</p>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default App;
