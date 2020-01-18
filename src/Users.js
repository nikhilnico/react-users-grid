import React from 'react';
import './Users.css';
import User from './User';

class Users extends React.Component {

    render() {

        const users = this.props.users;

        return(
            <>
                <div className="users-list">
                    {users.map(function(obj, index){
                        return <User user={obj} key={index} />;
                    })
                    }
                </div>
            </>
        );
    }
}

export default Users;
