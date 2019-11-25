import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'

class Header extends Component {

    componentWillMount () {
        this.setState ({
            'headerText': this.props.headerText
        })
    }
    
    render () {
        var headerStyle = {
            backgroundColor: "#006064",
            height: "70px"
        }
        var typographyStyle = {
            color: "#F3E5F5",
            fontSize: '30px',
            paddingTop: '15px'
        }
        return (
            <div style = {headerStyle}>
                <div style = {typographyStyle}>
                    <b> {this.state.headerText} </b>
                </div>
            </div>
        )
    }
}

export default Header