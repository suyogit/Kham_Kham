import React, { Component } from 'react'

export default class ProfileClass extends Component {

    constructor(props) {
        super(props)
        console.log("constructor child" + this.props.name)
    }

    componentDidMount() {
        console.log("componentDidMount child" + this.props.name)
    }


    render() {

        console.log("render child" + this.props.name)

        return (
            <div>
                <div>ProfileClass</div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}
