import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'
const Help = ({ location }) => {
    const history = useHistory();
    return (
        <>
            <Navbar />
            <div id="help" className="others">
                <h1>Hello !!</h1>
                <h2>This is your Help page</h2>
            </div>
        </>
    );
}

export default Help