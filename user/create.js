import React from 'react';
import { Link, Route } from 'react-router-dom';

class UserCreate extends React.Component {
    render() {
        
        return (
            <div>
                <h1>route 1</h1>
                <Link to="/route-test/route2">Route2</Link>
                <Route path={`route-test/:route2`} component={Route2}/>
                {/* <Route exact path="/route-test/route2" component={Route2} /> */}
            </div>
        );
    }
}

export default UserCreate;