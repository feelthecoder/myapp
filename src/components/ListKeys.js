import React from "react";

function UserList({users}){
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    );
}

function ListKeys(){
    const users = [{id:1,name:'vikas',email:'xyz@gmail.com'},{id:2,name:'sahil',email:'xyfddfdz@gmail.com'}]

    return <UserList users={users}/>
}

export default ListKeys;