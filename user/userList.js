import React from 'react';
import { Link, Route } from 'react-router-dom';
import UserCreate from './create';

class UserList extends React.Component {
   render() {
        
        return (
            <div>
                <h1>user section</h1>
                <Link to="/usre/create">create User</Link>
                <Route path="/usre/create" component={UserCreate}/>
            </div>
        );
    }
}

export default UserList;