import React, { Component } from 'react'

export default class ProfileClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "suyog",
                location: "ktm"
            }
        }



        console.log("constructor child" + this.props.name)
    }

    async componentDidMount() {
        console.log("componentDidMount child upper" + this.props.name)

        //api calls
        const data = await fetch("https://api.github.com/users/suyogit")
        const response = await data.json()
        console.log(response) //this will be printed after parent componentDidMount is called because of async function and await keyword 
        this.setState({
            userInfo: response
        })

        console.log("componentDidMount child lower" + this.props.name)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate child")

    }

    componentWillUnmount() {
        console.log("componentWillUnmount child")
    }


    render() {

        console.log("render child" + this.props.name)

        return (
            <div>
                <div>ProfileClass</div>
                <img src={this.state.userInfo.avatar_url} alt="photo" />
                <div>Name: {this.state.userInfo.name}</div>
                <div>Location: {this.state.userInfo.location}</div>
            </div>
        )
    }
}
