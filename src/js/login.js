import React, { Component } from 'react'

import '../css/login.css'




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            uval:'',
            pval:''
         };
    }
    //用户名
    changeuser = (ev)=>{
        this.setState({uval:ev.target.value})
    }
    //密码
    changepass = (ev)=>{
        this.setState({pval:ev.target.value})
    }
    
    //登录
    login = () =>{
        let {uval,pval} = this.state
        let {url:{history}} = this.props;
        if (uval && pval) {
            fetch('http://localhost:88/api/user/login',{
                method:"post",
                body: `username=${uval}&password=${pval}`,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
            .then((e)=>e.json())
            .then(data => {
                if(data.code === 0){
                    history.push('/index');
                }else if(data.code === -3){
                    alert("用户名或密码错误")
                }
            })
        }else{
            alert('请输入内容')
        }
    }
    //跳转注册
    click = () => {
        let {
            url: {
                history
            }
        } = this.props;
        history.push('/index/register')
    }
    render() {
        let {uval,pval} = this.state
        return (
            <div >
                <div className="login-logo">
                    <a href="index.html"></a>
                </div>
                <h2 className="form-heading">login</h2>
                <div className="app-cam">
                    <form>
                        <input type="text" className="text" 
                            value={uval}
                            placeholder="请输入账号" 
                            onChange={this.changeuser}
                        />
                        <input type="password" 
                            value={pval}
                            placeholder="请输入密码"
                            onChange={this.changepass}
                        />
                        
                            <input type="button"  value="登录"
                                onClick={this.login}
                            />
                        
                        
                        <ul className="new">
                            <li className="new_left"><p><a href="#">忘记密码?</a></p></li>
                            <li className="new_right">
                                <p className="sign">新来的？
                                    <span 
                                        style={{cursor:"pointer",color:"#06d995"}}
                                        onClick = {this.click}
                                    >注册</span>
                                </p>
                            </li>
                            <div className="clearfix"></div>
                        </ul>
                    </form>
                </div>
                <div className="copy_layout login" style={{marginTop:"14em"}}>
                    <p>Copyright &copy; 2018.Company name All rights reserved</p>
                </div>
            
            </div>
        );
    }
}

export default Login;