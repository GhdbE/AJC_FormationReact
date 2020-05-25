import React from 'react';

import { Login } from './Login';

class App extends React.Component {
    
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Login></Login>
                    </div>
                </div>
            </div>
        );
    }
}

export default App