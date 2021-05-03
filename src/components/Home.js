import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'
const Home = () => {
    return (
        <>
            <Navbar />
            <div id="home" className="others">
                <h1>Hello !!</h1>
                <h2>This is your Dashboard page</h2>
            </div>

        </>
    );
}

export default Home;