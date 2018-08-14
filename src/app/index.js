import React, { Component } from 'react'
import List from '../js/list/list'
import Content from '../js/content/content';
import '../css/reset.css'
import '../icon/iconfont'
import '../css/font-awesome.min.css'
import '../css/indexmin870.css'




class Inde extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className = "main-container" >
                <List />
                <Content />
            </div>
        );
    }
}

export default Inde;
























