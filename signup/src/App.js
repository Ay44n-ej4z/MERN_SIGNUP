import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import { Input, Button } from '@material-ui/core';

class App extends Component {
  constructor(){
    super()
    this.state = {
      fullName: '',
      username: '',
      email:'',
      password: '',

    } 
    this.changeFullname = this.changeFullname.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullname(event) {
    this.setState ({
      fullName: event.target.value
    })
  }
  changeUsername(event) {
    this.setState ({
      username: event.target.value
    })
  }

  changeEmail(event) {
    this.setState ({
      email: event.target.value
    })
  }
  changePassword(event) {
    this.setState ({
      password: event.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const registered = {
        fullName: this.state.fullName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    }
    axios.post('http://localhost:4000/app/signup', registered)
    .then(response => console.log(response.data))

    this.setState({
      fullName: '',
      username: '',
      email:'',
      password: '',

    })
  }

  render() {
    return (
      <div className = "container">
          <div className = "form-div">
            <form onSubmit= {this.onSubmit}>
              <div className = "fullName">
              <Input type = "text"
              placeholder = "Fullname"
              onChange = {this.changeFullname}
              value = {this.state.fullName}
              style = {{color: "white"}}
              />
              </div>
              <div className = "userName">
              <Input type = "text"
              placeholder = "Username"
              onChange = {this.changeUsername}
              value = {this.state.username}
              style = {{color: "white"}}
              />
              </div>
              <div className = "email">
              <Input type = "text"
              placeholder = "E-mail"
              onChange = {this.changeEmail}
              value = {this.state.email}
              style = {{color: "white"}}
              />
              </div>
              <div className = "password">
              <Input type = "password"
              placeholder = "Password"
              onChange = {this.changePassword}
              value = {this.state.password}
              style = {{color: "white"}}
              />
              </div>
              <div  className = "btn" >
              <Button variant="outlined" color="primary" type = 'submit'
              value = "submit" >Submit</Button>
              </div>
            </form>
          </div>
        </div>
      
    )
  }
}

export default App



