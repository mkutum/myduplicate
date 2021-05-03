import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const HomePage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const style = {
        width: '100vw',
        height: '100vh',
        position: 'absolute'

    }
    const PostData = () => {

        fetch("https://workindipl.herokuapp.com/login/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    alert('Sorry You are not fetching properly');
                }
                else {
                    localStorage.setItem("jwt", data.access_token)
                    // localStorage.setItem("user", JSON.stringify(data.user))
                    // dispatch({ type: "USER", payload: data.user })
                    // M.toast({ html: "user signin successfully", classes: "#b71c1c green darken-4" })
                    history.push("/home", { from: "LoginPage" })
                    // console.log(history.push('/navbar'))
                    console.log('click')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <>
                <div style={style}>
                    <div style={{ display: 'grid', placeItems: 'center', marginTop: '70px', fontSize: '16px' }}>
                        <h2 className='text-success'>Welcome to Login Page</h2>
                        <TextField className="my-2 w-25 text-success" id="outlined-basic" type='text' label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField className="my-2 w-25" id="outlined-basic" type='password' label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button className='p-3 w-25' variant="contained" color="primary" onClick={() => PostData()}>
                            Login</Button>
                    </div>

                </div>
            </>
            <h1 className="text-center pt-2" style={{ color: "#0097e6" }}>Indiplanes </h1>
        </>
    );
}



export default HomePage;