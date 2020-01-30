import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

//The main body styling
const MainDiv = styled.div`
  position: relative;
  width: 80%;
  height: 650px;
  margin-top: 10px;
  text-align: center;
  font-family: 'Assistant', sans-serif;
  z-index: 999;
  width: 30%;
  height: 60%;
  margin: 0 auto;
  background: #fff;
`;

//The log in form styling
const AuthForm = styled.form`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: left;
  input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  label {
    font-weight: 900;
    color: #333;
  }
  strong {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
`;

//Submit button styling
const SubmitButton = styled.button`
  text-transform: uppercase;
  outline: 0;
  background: #3042CF;
  color: #FFF;
  box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
  width: 100%;
  border: 0;
  border-radius: 20px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover, 
  &:active, 
  &:focus {
      background: #3042C0;
  }
`;

const OAuthButton = styled.a`
  display: block;
  text-transform: uppercase;
  outline: 0;
  background: #3042CF;
  color: #FFF;
  box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
  width: 100%;
  max-width: 294px;
  border: 0;
  border-radius: 20px;
  margin: 10px 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  text-align: center;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  text-decoration: none;
`;

const SpotifyButton = styled(OAuthButton)`
  background: #1DB954;
  &:hover, 
  &:active, 
  &:focus {
      background: #304200;
  }
`;

const GoogleButton = styled(OAuthButton)`
  background: #D3D3D3;
  &:hover, 
  &:active, 
  &:focus {
      background: #D3D303;
  }
`;

class Login extends Component {
  render() {
    if (this.props.currentUser) this.props.history.push('/user/mood');
    return (
      <MainDiv>
        <AuthForm onSubmit={ this.props.onLogin }>
          <div>
            <strong>LOG IN</strong>
            <label>Username</label>
            <input type="text" placeholder="Username"></input>
            <label>Password</label>
            <input type="password" placeholder="Password"></input>
            <SubmitButton>Login</SubmitButton>
            <GoogleButton href='/auth/google'>Login With Google</GoogleButton>
            <SpotifyButton href='/auth/spotify'>Login With Spotify</SpotifyButton>
          </div>
        </AuthForm>
      </MainDiv>
    )
  }
}

export default withRouter(Login);
