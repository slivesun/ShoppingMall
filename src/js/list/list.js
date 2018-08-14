import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            onoff:true,
            prev:null,
            off:[
                true, true, true, true, true, true, true, true, true
            ]
         };
    }
    componentDidMount(){
        (function(){
            const oUl = document.getElementById('oUl')
            const aa = oUl.getElementsByTagName('a')
             const as = Array.from(aa)


            as.forEach((e, i) => {
                e.onclick = function () {
                    if (i == 0) {
                        let oli2 = this.parentNode.parentNode.getElementsByTagName('li')
                        let fli = e.parentNode
                        console.log(fli);
                        
                        fli.onclick = function () {
                            for (let j = 0; j < oli2.length; j++) {
                                oli2[j].classList.remove('active')

                            }
                            fli.classList.add('active')
                            
                        }
                    }
                    let next = this.nextElementSibling
                    if (next) {
                        let oul = this.parentNode.parentNode.getElementsByTagName('ul')
                        let nextli = next.getElementsByTagName('li')
                        let oli = this.parentNode.parentNode.getElementsByTagName('li')
                        let len = nextli.length * 32
                        let ali = Array.from(next.children)
                        if (next != oul) {
                            if (next.style.height == len + 'px') {
                                for (let i = 0; i < oul.length; i++) {
                                    oul[i].style.height = '0px'
                                }
                                next.style.height = '0px'
                            }
                            else {
                                for (let i = 0; i < oul.length; i++) {
                                    oul[i].style.height = '0px'
                                }
                                next.style.height = len + 'px'
                            }
                        }
                        ali.forEach(e => {
                            e.onclick = function () {
                                for (let j = 0; j < oli.length; j++) {
                                    oli[j].classList.remove('active')

                                }
                                this.classList.add('active')
                            }
                        })

                    }
                }
            });
        })()
    }
    
    
    
    render() {
        let {onoff} = this.state
        return (
            <div className="sidebar" id="sidebar">
            <div className="ce">
                <div className="shortcuts  iconfont icon-aislogo">Falcon</div>
            </div>
            <ul id="oUl">
                <li className="active" onClick={this.click}>
                    <Link  className="dli" to="/index">
                        <i className="icon-home " id="home"></i>
                        <span className="add">首页</span>
                    </Link>

                </li>
                <li onClick={this.click} >
                    <a  className="dli">
                        <i className="icon-desktop"></i>
                        <span className="add">商品管理</span>
                        <i className="iconfont icon-xiangxiajiantou"></i>
                    </a>
                    <ul className="down">
                        <li className="add ddd" onClick={this.cl}>
                            <Link to="/commoditylist">
                                <span className="add">商品列表</span>
                            </Link>
                        </li>
                        <li className="add ddd">
                            <Link to="/addone">
                                <span className="add">添加商品</span>
                            </Link>
                        </li>
                    </ul>
                </li>
               

                <li onClick={this.click}>
                    <a  className="dli">
                        <i className="icon-list"></i>
                        <span className="add">订单管理</span>
                        <i className="iconfont icon-xiangxiajiantou"></i>
                    </a>
                    <ul className="down">
                        <li className="add ddd">
                            <Link to="/oderlist">
                                <span className="add">订单列表</span>
                            </Link>
                        </li>
                        <li className="add ddd">
                            <Link to="/thtk">
                                <span className="add">退货申请处理</span>
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                <li onClick={this.click}>
                    <a  className="dli">
                        <i className="icon-credit-card"></i>
                            <span className="add">交易管理</span>
                        <i className="iconfont icon-xiangxiajiantou"></i>
                    </a>
                    <ul className="down">
                        <li className="add ddd">
                            <Link to="/trade">
                                <span className="add">交易统计</span>
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                <li onClick={this.click}>
                    <a  className="dli">
                        <i className="icon-user"></i>
                        <span className="add">用户管理</span>
                        <i className="iconfont icon-xiangxiajiantou"></i>
                    </a>
                    <ul className="down">
                        <li className="add ddd">
                            <Link to="/userlist">
                                <span className="add">用户列表</span>
                            </Link>
                        </li>
                        <li className="add ddd">
                            <Link to="/grade">
                                <span className="add">用户等级设置</span>
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                
                
                
                
            </ul>
        </div>
        
        );
    }
}

export default List;