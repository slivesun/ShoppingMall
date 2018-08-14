import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Head from '../head/head'
import Index from '../index';
import Commoditylist from '../commoditylist'
import Addone from '../addone'
import Addtwo from '../addtwo'
import Oderlist from '../oderlist';
import Userlist from '../userlist';
import Trade from '../trade';
import Grade from '../grade';
import Thtk from '../thtk';
import Order from "../oder";


class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		return (
            < div className = "content" >
				<Head />
				<Route exact strict path='/' component={Index}/>
                <Route exact strict path='/index' component={Index}/>
                <Route exact strict path='/commoditylist' component={Commoditylist}/>
				<Route exact strict path='/addone' component={Addone}/>
				<Route exact strict path='/addtwo' component={Addtwo}/>
				<Route exact strict path='/oderlist' component={Oderlist}/>
				<Route exact strict path='/oder' component={Order}/>
				<Route exact strict path='/trade' component={Trade}/>
				<Route path='/thtk' component={Thtk}/>
				
				<Route exact strict path='/userlist' component={Userlist}/>
				<Route exact strict path='/grade' component={Grade}/>
				
			
            
            
            </div>

		);
	}
}

export default Content;