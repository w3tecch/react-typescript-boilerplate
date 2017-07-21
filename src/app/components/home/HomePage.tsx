import * as React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    public render(): JSX.Element {
        return (
            <div className='jumbotron'>
                <h1>Plurasight Administration</h1>
                <p>React, Redux and React Router in ES6</p>
                <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
