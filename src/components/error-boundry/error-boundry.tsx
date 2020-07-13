import React, { Component } from "react"
import ErrorIndicator from '../error-indicator'

interface StateType {
    hasError: boolean
} 

export default class ErrorBoundry extends Component<{}, StateType> {
    
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError)
            return <ErrorIndicator />

        return this.props.children

    }
}