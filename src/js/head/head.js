import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    tan = (ev) =>{
        let {ooff} = this.state
        ooff ? this.refs.tc.style.display = "none" : this.refs.tc.style.display = "block"
        this.setState({ooff:!ooff})
    }
    tc = () =>{
        let {history} = this.props;
        console.log(this)
        //history.push('/');
    }
    render() {
        return (
            <div className="cont">
                <div className="cont-r" style={{position:"relative"}}>

                    <div className="xiaoxigonggao">
                        
                    </div>

                    

                    <div id="user" 
                        onClick = {this.tan}
                        
                    >
                        <div className="user-icon"></div>
                    </div>

                    
                    <div 
                        onClick = {this.tc}
                    ref = "tc" style={{display:"none",textAlign:"center",color:"#bcbfc5",width:"50px",height:"25px",position:"absolute",bottom:"6px",right:"39px",cursor:"pointer"}}>退出</div>
                </div>
            </div>
        );
    }
}

export default Head;