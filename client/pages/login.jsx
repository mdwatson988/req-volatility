// import GoogleLogin from 'react-google-login';
import React from 'react';
import { useContext } from 'react';
import { UserEmailContext } from '../app.js'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../components/customInput.jsx';
// import RegularButton from '../components/button.jsx';
import Button from "@mui/material/Button";

function Login() {
  const { userEmail, setUserEmail } = useContext(UserEmailContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setUserEmail(e.currentTarget.value)
  }

  const handleClick = e => {
    navigate('/features/' + userEmail);
  }

  return (
    <div className="Login">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            // id="password"
            formControlProps={{
              fullWidth: true
            }}
            // handleChange={handleChange}
            type="password"
          />

          <Button type="button" onClick={handleClick} color="primary" id="featureButton">
            Log in
          </Button>
          <p><i>or</i></p>
          <Button type="button" color="primary" id="featureButton">
            Create User
          </Button>
        </form>
      </div>
  )



  // const handleLogin = async (googleData) => {
  //   console.log(googleData)
  //   const res = await fetch('/api/google-login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   });

  //   const userData = await res.json();
  //   console.log('userData: ', userData)
  //   if (userData) {
  //     setUser(userData);
  //     console.log(userData)
  //     navigate('/features/' + userData.email)
  //   // console.log(googleData)
  //   }
  // }

  // const handleFailure = (error) => {
  //   console.log(error);
  //   error.details ? alert(error.details) : alert(error);
  // }

  // return (
  //   <div className='Login'>
  //     <header className='LoginHeader'>
  //       <div>
  //         <GoogleLogin
  //           clientId={process.env.VOLATRACK_GOOGLE_CLIENT_ID}
  //           buttonText="Log in with Google"
  //           onSuccess={handleLogin}
  //           onFailure={handleFailure}
  //           cookiePolicy={'single_host_origin'}
  //         ></GoogleLogin>
  //       </div>
  //     </header>
  //   </div>
  // )
}

export default Login;