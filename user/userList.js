import React from 'react';
import { Link, Route } from 'react-router-dom';
import UserCreate from './create';

class UserList extends React.Component {
   render() {
        return (
            <div>
                <h1>user section</h1>
                <Link to="/user/create">create User</Link>
                <Route path="/user/create" component={UserCreate}/>
            </div>
        );
    }
}

export default UserList;