import React, { useEffect, useState } from "react";

function useFriendStatus(friendId){
    const [isOnline,setIsOnline]  = useState(null);

    function handleChange(status){
        setIsOnline(status.isOnline);
    }

    useEffect(()=>{

        // ChatAPI.subscribe(friendId,handleChange);
        console.log('SUBSCRIBE')

        return ()=>{
            // ChatAPI.unsubscribe(friendId,handleChange);
            console.log('UNSUBSCRIBE')
        }

    })

    return isOnline;

}


function FriendStatus(props){

    const isOnline = useFriendStatus(props.friend.id);

    if(isOnline===null){
        return 'Loading...';
    }

    return isOnline?'Online':'Offline'
}

export default FriendStatus;