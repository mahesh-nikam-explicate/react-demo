import React, { Component } from "react";

class LifeCycle extends Component {
    constructor() {
        super();
        console.log('Constructor');
    }

    // static getDerivedStateFromProps() {
    //     console.log("static getDerivedStateFromProps");
    // }

    render() {
        console.log("render");

        return(
            <div>
               
            </div>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");
    }


    // UNSAFE_componentWillMount() {
    //     console.log("UNSAFE_componentWillMount");
    // }

    // shouldComponentUpdate() {
    //     console.log("shouldComponentUpdate");
    // }


    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    // UNSAFE_componentWillReceiveProps() {
    //     console.log("UNSAFE_componentWillReceiveProps");
    // }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


    static getDerivedStateFromError() {
        console.log("static getDerivedStateFromError");
    }

    componentDidCatch() {
        console.log("componentDidCatch");
    }

}

export default LifeCycle;