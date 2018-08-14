import React, { Component } from 'react'
import Inde from './index.js'
import Login from '../js/login'
import Reg from '../js/register'
import {renderC} from './routers'



const routes = [
    
    {
        path: '/:id',
        exact: true,
        component: Inde
    },
    {
        path:'/',
        exact: true,
        render:(props)=><Login url={props}/>
    },{
        path:'/index/register',
        render:(props)=><Reg url={props}/>
    }
]
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {renderC(routes)}
            </div>
            
        );
    }
}

export default App;
























