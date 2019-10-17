import React from 'react';
import {useParams} from 'react-router';
function User(){
    const {name} = useParams();
    return <div>Hello {name}</div>
}
export default User;