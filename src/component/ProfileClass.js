import React, { Component } from 'react'

export default class ProfileClass extends Component {
    render() {
        return (
            <div>
                <div>ProfileClass</div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}
