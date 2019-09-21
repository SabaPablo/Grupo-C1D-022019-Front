import React, { Component } from 'react';
import '../dist/css/App.css';
import Menues from "./Menues";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            menues: [],
        };
    }


    componentDidMount() {
        fetch('http://localhost:8080/api/menus')
            .then(res => res.json())
            .then((data) => {
                this.setState({ menues: data })
            })
            .catch(console.log)
    }

    render(){
        return (
            <div>
                <Menues menues={this.state.menues}/>
            </div>
        );
    }

}

export default Home;
