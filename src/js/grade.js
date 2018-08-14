import React, { Component } from 'react'
import '../css/commodity.css'
import '../css/jd.css'


class Grade extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[],
            djmc:"",
            czz:"",
            myf:"",
            pj:"",
            bz:"",
            pid:""
         };
    }

    componentDidMount() {
        this.getArr();
    }
    getData = async (url) => {
        let data = await fetch('http://localhost:88/api/dj?' + url)
        
        return await data.json();
        
    }
    getArr= async ()=>{
        let dj = await this.getData('act=get')

        this.setState({arr:dj})
    }
    xiugai = (id) =>{
        let {arr} = this.state
        let c = null
        arr.forEach((e, i) => {
            if (e.id == id) {
                e.onoff = !e.onoff
                c = e
            }
        })
        c.act = "edit"
        fetch('http://localhost:88/api/dj', {
            method: "post",
            body:new URLSearchParams(c).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((e) => e.json())
        .then(data => {
            this.getArr()
        })
    }
    qx = () =>{
        this.refs.bja.style.display = "none"
    }
    bj = (id) =>{
        let {arr,djmc,czz,bz,pj,myf,pid} = this.state
        this.refs.bja.style.display = "block"
        arr.forEach((e,i)=>{
            if (e.id === id) {
                djmc = e.djmc
                czz = e.czh
                bz = e.bz
                pj = e.pjbz
                myf = e.myf
            }
        })
        this.setState({djmc,czz,bz,pj,myf,pid:id})
    }
    djmc = () =>{
        let {djmc} = this.state
        djmc = this.refs.djmc.value
        this.setState({djmc})
    }
    czz = () =>{
        let {czz} = this.state
        czz = this.refs.czz.value
        this.setState({czz})
    }
    bz = () =>{
        let {bz} = this.state
        bz = this.refs.bz.value
        this.setState({bz})
    }
    pj = () =>{
        let {pj} = this.state
        pj = this.refs.pj.value
        this.setState({pj})
    }
    myf = () =>{
        let {myf} = this.state
        myf = this.refs.myf.value
        this.setState({myf})
    }
    qdxg = () =>{
        let {arr,djmc,czz,bz,pj,myf,pid} = this.state
        let c = null
        arr.forEach((e,i)=>{
            if (e.id == pid) {
                e.djmc = djmc
                e.czh = czz
                e.bz = bz
                e.pjbz = pj
                e.myf = myf
                c = e
            }
        })
        c.act = "edit"
        fetch('http://localhost:88/api/dj', {
            method: "post",
            body:new URLSearchParams(c).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((e) => e.json())
        .then(data => {
            this.getArr()
            this.refs.bja.style="none"
        })

    }
    render() {
        let {arr,djmc,czz,bz,pj,myf} = this.state
        console.log(arr) 
        let newArr = arr.map((e,i)=>{
            return <tr>
                        <td>{e.djmc}</td>
                        <td>
                            <img src="" alt="" 
                                onClick = {
                                    () => {
                                        this.xiugai(e.id)
                                    }
                                }
                                className={e.onoff?"iconfont icon-kaiguan4 active":"iconfont icon-kaiguan3"}
                            />
                        </td>
                        <td>{e.czh}</td>
                        <td>{e.myf}</td>
                        <td>{e.pjbz}</td>
                        <td>{e.bz}</td>
                        <td><i
                            onClick = {()=>{
                                this.bj(e.id)
                            }}
                        >编辑</i></td>
                    </tr>
        })
        return (
            <div className="contents">

                <div className="breadcrumb">
                    <span>会员等级设置</span>
                    <div id="bread_r">
                        <div className="remove4">
                            <a href="" id="remove3">添加</a>
                        </div>
                    </div>
                </div>
              
                <div className="jb" style={{position:"relative"}}>
                    <div className="j-t">
                        <div className="f-img j-img">
                            <img src="" alt="" className="iconfont icon-shuqian"/>
                            <span>数据列表</span>
                        </div>
                        <div className="comsearch comsearch_t comsearch_t2">
                            <section className="tBody tbody" id="td">
                                <table id="tab" width="600" align="center" border="1">
                                    <thead>
                                        <tr>
                                        <th index="id">等级名称</th>
                                        <th>启用状态</th>
                                        <th index="price">成长值满足点</th>
                                        <th>免运费标准</th>
                                        <th>评价奖励</th>
                                        <th>备注</th>
                                        <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tb">
                                        {newArr}
                                        
                                        
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                    <div className="bjxg" ref = "bja">
                		<div className="totop">
                			修改内容
                		</div>
                        <p><span>&nbsp;&nbsp;&nbsp;等级名称：</span>
                            <input type="text" 
                                value = {djmc}
                                ref="djmc"
                                onChange = {this.djmc}
                            />
                        </p>
                        <p><span>成长值满足：</span>
                            <input type="text" 
                            value = {czz}
                            ref = "czz"
                            onChange = {this.czz}
                            />
                        </p>
                        <p><span>免运费标准：</span>
                            <input type="text" 
                            value = {myf}
                            ref = "myf"
                            onChange = {this.myf}
                            />
                        </p>
                        <p><span>&nbsp;&nbsp;&nbsp;评价奖励：</span>
                            <input type="text" 
                            value = {pj}
                            ref = "pj"
                            onChange = {this.pj}
                            />
                        </p>
                        <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：</span>
                            <input type="text" 
                            value = {bz}
                            ref = "bz"
                            onChange = {this.bz}
                            />
                        </p>
                		
                		<button id="btn1" onClick = {this.qx}>取消</button>
                		<button id="btn2" onClick = {this.qdxg}>确定</button>
                	</div>
                </div>
              
             


            </div>

        );
    }
}

export default Grade;