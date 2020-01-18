import React from 'react';

class User extends React.Component{

    render() {

        const { user } = this.props;
        const name = user.first_name + ' ' + user.last_name;

        return(
            <div className="row">
                <h4>{name}</h4>
                <p><img src={user.avatar} alt={name} /></p>
                <p>{user.email}</p>
            </div>
        );
    }
}

export default User;
