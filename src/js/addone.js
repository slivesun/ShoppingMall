import React, { Component } from 'react'
import '../css/public.css'
import '../css/add.css'
import {withRouter} from 'react-router-dom'

class Addone extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            yjfl:'',
            ejfl:'',
            spmc:'',
            sppp:'',
            spjs:'',
            yf:'',
            spbh:'',
            spsj:'',
            spkc:'',
            onoff:false,
            off:false

        };
    }
    yiji = (ev) =>{
        let {value:yjfl} = ev.target
        this.setState({yjfl})

    }
    erji = (ev) => {
        let {value:ejfl} = ev.target
        this.setState({ejfl})
    }
    sppp = (ev) =>{
        let {value:sppp} = ev.target
        this.setState({sppp})
    }
    spmc = (ev) =>{
        let {value:spmc} = ev.target
        this.setState({spmc})
    }
    spsj = (ev) => {
        let {value:spsj} = ev.target
        this.setState({spsj})
    }
    spkc = (ev) => {
        let {value:spkc} = ev.target
        this.setState({spkc})
    }
    spbh = (ev) => {
        let {value:spbh} = ev.target
        this.setState({spbh})
    }
    spjs = (ev) => {
        let {value:spjs} = ev.target
        this.setState({spjs})
    }
    yf = (ev) => {
        let {value:yf} = ev.target
        this.setState({yf})
    }
    add = ()=>{
        let {ejfl,yjfl,sppp,spmc,spsj,spkc,spbh,spjs,yf,onoff,off} = this.state
        let {history} = this.props;
        console.log(history)
        fetch('http://localhost:88/api/add?act=add&yjfl=' + yjfl + '&ejfl=' + ejfl + '&sppp=' + sppp + '&spmc=' + spmc + '&spsj=' + spsj + '&spkc=' + spkc + '&spjs=' + spjs + '&spbh=' + spbh + '&yf=' + yf + '&onoff=' + onoff + '&off=' + off)
            .then((e)=>e.json())
            .then(data => {
                if(data.code === 0){
                    alert("添加成功")
                    setTimeout(function(){
                        history.push('/commoditylist');
                    },500)
                    
                }else if(data.code === 1){
                    alert("用户名已存在")
                }
            })
    }
    render() {
        let {ejfl,yjfl,sppp,spmc,spsj,spkc,spbh,spjs,yf,onoff} = this.state
        return (
            <div className="contents">
                <div className="breadcrumb">
                    <a href="#">商品管理</a>
                    <span>添加商品</span>
                    <div id="bread_r">
                    </div>
                </div>
                <div id="list">
                    <div className="l-h" style={{lineHeight:"110px",fontSize:"20px",textAlign:"center"}}>
                            填写商品信息
                    </div>
                </div>

                <div className="default">
                    <div className="de-f" id="de-f">

                    </div>



                    <div className="de-r">
                        <div className="de-rr">
                            <div className="f-img">
                                <img src="" alt="" className="iconfont icon-shuqian"/>
                                <span>基本信息</span>
                            </div>
                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>商品分类：</span>
                                </div>

                                <select 
                                    name="默认"
                                    value={yjfl}
                                    onChange = {this.yiji}
                                >
                                    <option >默认</option>
                                    <option >鞋子</option>
                                    <option >衬衣</option>
                                    <option >裤子</option>
                                </select>
                                <select 
                                    name="默认"
                                    value={ejfl}
                                    onChange = {this.erji}
                                >
                                    <option >默认</option>
                                    <option >男士</option>
                                    <option >女士</option>
                                </select>
                            </div>

                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>商品名称：</span>
                                </div>

                                <input 
                                    type="text" 
                                    value={spmc}
                                    onChange = {this.spmc}
                                />
                            </div>

                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>商品品牌：</span>

                                </div>
                                <select 
                                    name="请选择品牌" 
                                    value={sppp}
                                    onChange = {this.sppp}
                                >
                                    <option >请选择品牌</option>
                                    <option >G-STAR</option>
                                    <option >Barbour</option>
                                    <option >Dickies</option>
                                </select>
                            </div>

                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>商品介绍：</span>
                                </div>
                                <textarea 
                                    name="" 
                                    id="" 
                                    cols="40" 
                                    rows="10" 
                                    style={{"resize":"none"}} 
                                    placeholder="请输入内容"
                                    value={spjs}
                                    onChange={this.spjs}
                                ></textarea>
                            </div>

                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>运费：</span>
                                </div>

                                <input 
                                    value={yf}
                                    onChange={this.yf}
                                    placeholder="请输入运费"
                                    style={{textIndent:"8px"}}
                                type="text"/>
                            </div>

                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>商品编号：</span>
                                </div>

                                <input 
                                    value={spbh}
                                    onChange={this.spbh}
                                    type="text"
                                    placeholder="请输入编号"
                                    style={{textIndent:"8px"}}
                                />
                            </div>

                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>商品售价：</span>
                                </div>

                                <input 
                                    value={spsj}
                                    onChange={this.spsj}
                                    placeholder="请输入商品售价"
                                    style={{textIndent:"8px"}}
                                type="text"/>
                            </div>

                            <div className="sort">
                                <div className="s-l">
                                    <i className="dl">*</i>
                                    <span>商品库存：</span>
                                </div>

                                <input 
                                    value={spkc}
                                    onChange={this.spkc}
                                    placeholder="请输入件数"
                                    style={{textIndent:"8px"}}
                                type="text"/>
                            </div>


                            <div className="sort">
                                <div className="s-l">
                                    <span>服务保证：</span>
                                </div>
                                <label>
                                    <input type="checkbox" className="ip"/>
                                    <span className="ck"></span>
                                    <span>无忧退换</span>
                                </label>
                                <label>
                                    <input type="checkbox" className="ip"/>
                                    <span className="ck"></span>
                                    <span>快速退款</span>
                                </label>
                                <label>
                                    <input type="checkbox" className="ip"/>
                                    <span className="ck"></span>
                                    <span>免费包邮</span>
                                </label>
                            </div>

                            <div 
                                id="next"
                                onClick={this.add}
                                style={{cursor:"pointer"}}
                            >商品添加完成</div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default withRouter(Addone);