import React, { Component } from 'react'

import '../css/login.css'




class Reg extends Component {
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
    //注册
    reg = () =>{
        let {uval,pval} = this.state
        let {url:{history}} = this.props;
        if (uval && pval) {
            fetch('http://localhost:88/api/user/register',{
                method:"post",
                body: `username=${uval}&password=${pval}`,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
            .then((e)=>e.json())
            .then(data => {
                if(data.code === 0){
                    alert("注册成功")
                    setTimeout(function(){
                        history.push('/');
                    },500)
                    
                }else if(data.code === 1){
                    alert("用户名已存在")
                }
            })
        }else{
            alert('请输入内容')
        }
    }
    
    click = () =>{
        let {url:{history}} = this.props;
        history.push('/')
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
                        <div className="submit">
                            <input type="button"  value="注册"
                                onClick={this.reg}
                            />
                        </div>
                        
                        <ul className="new">
                            <li className="new_center">
                                <p className="sign">已有账户？
                                    <span 
                                        style={{cursor:"pointer",color:"#06d995"}}
                                        onClick = {this.click}
                                    >登录</span>
                                </p>
                            </li>
                            <div className="clearfix"></div>
                        </ul>
                    </form>
                </div>
                <div className="copy_layout login" style={{marginTop:"11em"}}>
                    <p>Copyright &copy; 2018.Company name All rights reserved</p>
                </div>
            
            </div>
        );
    }
}

export default Reg;