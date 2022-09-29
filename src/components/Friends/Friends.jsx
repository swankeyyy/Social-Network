import React from 'react';
import Friend from './Friend/Friend';



const Friends = (props) => {
    let friendlist = props.state.friends.map(friend => <Friend name = {friend.name} id = {friend.id}/>)
    return (
        <div>
        {friendlist}
        </div>
    )
}

export default Friends