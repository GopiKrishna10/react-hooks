import React from 'react';
import { useLocation, useHistory } from 'react-router';
function About() {
    const location = useLocation();
    const history = useHistory();
    console.log('==Location', location);
    function goBackHandler() {
        history.goBack();
    }
    return (
        <>
            <div>Hello About </div>
            <div>Location = {location.pathname}</div>
            <button onClick={goBackHandler}>Go Back</button>
        </>

    );
}
export default About;