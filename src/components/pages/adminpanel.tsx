import {getUser, addUser} from '../../scripts/adminfetch';

import React from 'react';

/*
    Testing connection with the
    web server(nodejs)
 */
const AdminPanel = () => {

    return(
    <div>
        <button onClick={() => getUser('http://localhost:4000/admin/getuser')}>Get User</button>
        <button onClick={() => addUser('http://localhost:4000/admin/adduser')}>Add User</button>
        <button>Delete User</button>
        <button>Edit User</button>
    </div>);
}

export default AdminPanel;