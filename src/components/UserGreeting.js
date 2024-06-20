import React from "react";

function UserGreeting(isLoggedIn){
    return (
        <div>
            {isLoggedIn.userLog==="true"?<p>Welcome to React JS!</p>:<p>Please login into website.</p>}
        </div>
    );
}

export default UserGreeting;