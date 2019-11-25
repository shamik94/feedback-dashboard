import React, {Component} from 'react'
import Header from '../Header/Header'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class LoginPage extends Component{
  render () {

    var LoginPageStyle = {
        justifyContent: "center",
        height: "100%",
        display: "flex",
        alignItems: "center",
        height: "calc(100% - 70px)",
        flexDirection: "column"
    }
    var inputTextStyle = {
        width : "400px"
    }
    var ButtonStyle = {
        marginTop: "10px",
        marginLeft: "5px",
        marginRight: "5px",
        backgroundColor: "#6d4c41"
    }
    return (
    <div style={{height: "100%"}}>
        <Header headerText="PREPLACED PACKAGES"/>
        <div style = {LoginPageStyle}>
            <TextField style = {inputTextStyle} id="package-code" label="Package Code" variant="outlined" />
            <div>
                <Button style={ButtonStyle} variant="contained" color="primary"> Mentor </Button>
                <Button style={ButtonStyle} variant="contained" color="primary"> Student </Button>
            </div>
        </div>
    </div>
  )}
}

export default LoginPage
