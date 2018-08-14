import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import Page from './page';
import '../css/public.css'
import '../css/commodity.css'
import Order from './oder';


class Oderlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newArr:'',
            arr:[],
            PageC:1,//PageC是页码的总数
            changeNum:1, //当前是多少页,
            num:1,
            name:'',
            se:'',
            edn:"1",
            whole:false
         };
    }
    componentDidMount() {
        this.getArr();
    }
    
    getData = async (url) => {
        console.log(33333333)
        console.log(url)
        let data = await fetch('http://localhost:88/api/oderlist?' + url)
        
        return await data.json();
        
    }
    
    getArr = async (num = 1,state,search) => {
      //  console.log(state)
        let {arr,PageC,changeNum,name,se,edn,whole}=this.state;
        //请求当页的数据
        //let newArr = await this.getData('act=get&page='+num)
        const oder= document.getElementById("order")
        const Odiv = oder.querySelectorAll("div")
        
        if (state != undefined) {
            for (let i = 0; i < Odiv.length; i++) {
                Odiv[i].className=''
            }

        }
        switch (state) {
            case "quanbu":
                let quanbu = await this.getData('act=search&state='+ state + '&page=' + num)
                let QpageNum = await this.getData('act=get_page_count');
                console.log(QpageNum)
                Odiv[0].className='active'
                Odiv[0].children[0].children[1].innerHTML = QpageNum.total
                this.setState({arr:quanbu,PageC:QpageNum.count,name:state,edn:num,whole:false});
                break;
            case "daifukuan":
                let da = await this.getData('act=search&state='+ state + '&page=' + num)
                let dapageNum = await this.getData('act=getp&state='+ state);
                Odiv[1].className = 'active'
                Odiv[1].children[0].children[1].innerHTML = dapageNum.total
                this.setState({arr:da,PageC:dapageNum.count,name:state,edn:num,whole:false});
                break;
            case "daifahuo":
                let daifahuo = await this.getData('act=search&state=' + state + '&page=' + num)
                let fapageNum = await this.getData('act=getp&state=' + state);
                Odiv[2].className = 'active'
                Odiv[2].children[0].children[1].innerHTML = fapageNum.total
                this.setState({arr:daifahuo,PageC:fapageNum.count,name:state,edn:num,whole:false});
                break;
            case "yifahuo":
                let yi = await this.getData('act=search&state=' + state + '&page=' + num)
                let yipageNum = await this.getData('act=getp&state=' + state);
                Odiv[3].className = 'active'
                Odiv[3].children[0].children[1].innerHTML = yipageNum.total
                this.setState({ arr: yi, PageC: yipageNum.count,name:state,edn:num,whole:false });
                break;
            case "yiwancheng":
                let wan = await this.getData('act=search&state='+ state + '&page=' + num)
                let wanpageNum = await this.getData('act=getp&state=' + state);
                Odiv[4].className = 'active'
                Odiv[4].children[0].children[1].innerHTML = wanpageNum.total
                this.setState({arr:wan,PageC:wanpageNum.count,name:state,edn:num,whole:false});
                break;
            case "yiguanbi":
                let bi = await this.getData('act=search&state='+ state + '&page=' + num)
                let bipageNum = await this.getData('act=getp&state=' + state);
                Odiv[5].className = 'active'
                Odiv[5].children[0].children[1].innerHTML = bipageNum.total
                console.log(bipageNum)
                this.setState({arr:bi,PageC:bipageNum.count,name:state,edn:num,whole:false});
                break;
            case "yonghu":
                let yonghu = await this.getData('act=yonghu&yonghu=' + search + '&page=' + num)
                let hupageNum = await this.getData('act=gety&state=' + search);
                Odiv[0].className = 'active'
                Odiv[0].children[0].children[1].innerHTML = hupageNum.total
                this.setState({ arr: yonghu, PageC: hupageNum.count,edn:num,name:state,se:search,whole:false });
                break;
            case "dingdan":
                let dingdan = await this.getData('act=dingdan&dingdan=' + search + '&page=' + num)
                let DpageNum = await this.getData('act=getd&state=' + search);
                Odiv[0].className = 'active'
                Odiv[0].children[0].children[1].innerHTML = DpageNum.total
                this.setState({ arr: dingdan, PageC: DpageNum.count,edn:num,name:state,se:search,whole:false });
                break;
            default:
                console.log("llllllkhhjhbjhb")
                let newArr = await this.getData('act=get&page=' + num)
                let pageNum = await this.getData('act=get_page_count');
                Odiv[0].className = 'active'
                Odiv[0].children[0].children[1].innerHTML = pageNum.total
                this.setState({arr:newArr,PageC:pageNum.count,whole:false,edn:num,name:state,se:search});
                break;
        }

        // let pageNum = await this.getData('act=get_page_count');
        // this.setState({arr:newArr,PageC:pageNum.count});
        //请求总页
        
    }

    
    
    page=()=>{
        let {PageC}=this.state;
        console.log(PageC);
    }

    changepage = (i) => {
        
        let {name,se} = this.state
        console.log(name,se)
        this.getArr(i,name,se)
        
    }
    
    yonghu = () => {
        
        let {num} = this.state
        let yonghu = this.refs.yonghu.value
        this.getArr(num, "yonghu", yonghu)
    }
    dingdan = () => {
        
        let {num} = this.state
        let dingdan = this.refs.dingdan.value
        this.getArr(num,"dingdan",dingdan)
    }

    close = (v) =>{
        let {arr,edn,name,se} = this.state
        console.log(edn,name,se)
        let c = null
        arr.forEach((e,i)=>{
            if (e.id === v) {
                c = e
            }
        })
        c.ddzt = "已关闭"
        c.act = "edit"
        console.log(c)
        fetch('http://localhost:88/api/oderlist', {
            method: "post",
            body:new URLSearchParams(c).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((e) => e.json())
        .then(data => {
            if (data.code === 0) {
                this.getArr(edn,name,se)
            } 
        })
        console.log(c.ddbh,arr,v)



    }
    remove = () =>{
        
        let {arr,edn,name,se} = this.state

        console.log(arr)
        let all = []
        arr.forEach((e,i)=>{
            if (e.onoff == true) {
                all.push(e.id)
            }
        })
        let jsonall = JSON.stringify(all)
        fetch('http://localhost:88/api/oderlist?act=del&all=' + jsonall)
        .then((e) => e.json())
        .then(data => {
            if (data.code === 0) {
                this.getArr(edn,name,se)
            } else if (data.code === 1) {
                this.setState()
            }
        })


    }
    change = (pid) =>{
        let {arr} = this.state
        arr.forEach((e,i)=>{
            if (e.id === pid) {
                e.onoff = !e.onoff
            }
        })
        let off = arr.every((e,i)=>{
           return e.onoff === true
        })
        this.setState({arr,whole:off})
    }
    whole =() =>{
        let {arr,whole} = this.state
        whole = !whole
        arr.forEach(e=>{
            //e.onoff = !e.onoff 反选
            whole ? (e.onoff = true) : e.onoff = false //全选
        })
        console.log(whole)
        this.setState({arr,whole})

    }
    render() {
        let {arr,changeNum,PageC,num,whole} = this.state
        console.log(arr)
        let newList = arr.map((e,i)=>{
            return <tr key={i}>
                        <td>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked = {
                                        e.onoff
                                    }
                                    onChange = {
                                        () => {
                                            this.change(e.id)
                                        }
                                    }
                                />
                                <span
                                    // onClick= {()=>{this.change(e.id)}}
                                ></span>
                            </label>
                        </td>
                        <td>{e.ddbh}</td>
                        <td>{e.tjsj}</td>
                        <td>{e.yhzh}</td>
                        <td>{e.ddje}</td>
                        <td>{e.zffs}</td>
                        <td>{e.ddly}</td>
                        <td>{e.ddzt}</td>
                        <td>
                            <i>
                                <Link to="/oder" component={Order}>查看订单</Link>
                            </i>
                            <i 
                                onClick={() => {this.close(e.id)}}
                            >关闭订单</i>
                        </td>
                        <div className="xq" >
                            <p id= "gb"><a href="javascript:;" >关闭</a></p>
                            <div className="jbx">
                                <p >订单详情</p>
                                <ul className="jbxx">
                                    <li className="ll">订单编号</li>
                                    <li className="ll lk">提交时间</li>
                                    <li className="ll lk">订单状态</li>
                                    <li className="ll lk">支付方式</li>
                                    <li className="ll lk">订单金额</li>
                                    <li >123123</li>
                                    <li className=" lk">123123</li>
                                    <li className=" lk">123123</li>
                                    <li className=" lk">123123</li>
                                    <li className=" lk">123123</li>
                                </ul>
                                
                            </div>
                            <div className="shr">
                                <p >收货人信息</p>
                                <ul className="jbxx">
                                    <li className="ll">收货人</li>
                                    <li className="lk ll">联系方式</li>
                                    <li className="lk ll wd" >收货地址</li>
                                    <li className="lk ll">支付金额</li>
                                    <li className="">123123</li>
                                    <li className="lk">123123</li>
                                    <li className="lk wd" >123123</li>
                                    <li className="lk">123123</li>
                                </ul>
                            </div>
                            
                            <div className="fh">
                                <button >订单发货</button>
                            </div>
                        </div>
                    </tr>
                    
        })
        let newA = [];
        for(let i=1;i<=PageC;i++){
           newA.push(<span 
                key={i} 
                
                onClick={()=>{
                    this.changepage(i)
                }}
            >{i}</span>);
        }

        
        return (
            <div className="contents">
                <div className="breadcrumb">
                    <a href="#">订单管理</a>
                    <span>订单列表</span>
                    <div id="bread_r">
                        <div className="add">
                            <a 
                                href="javascript:;" 
                                id="add"
                                onClick = {this.close}
                            >关闭订单</a>
                        </div>
                        <div className="remove">
                            <a 
                                href="javascript:;" 
                                id="remove"
                                onClick = {this.remove}
                            >删除订单</a>
                        </div>
                    </div>
                </div>
                <div className="search"></div>
                <div className="comsearch comsearch_t">
                    <div className="comsearch_h comsearch_h1">
                        <ul id="order">
                            <li>
                                <div 
                                    className="active"
                                    onClick={()=>{this.getArr(num,"quanbu")}}
                                >
                                    <p>
                                        <span>全部订单(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"daifukuan")}}
                                >
                                    <p>
                                        <span>待付款(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"daifahuo")}}
                                >
                                    <p>
                                        <span>代发货(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"yifahuo")}}
                                >

                                    <p>
                                        <span>已发货(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>

                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"yiwancheng")}}
                                >
                                    <p>
                                        <span>已完成(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>

                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"yiguanbi")}}
                                >
                                    <p>
                                        <span>已关闭(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="comsearch_h">
                        <ul>
                            <li id="sch">
                                <input ref="dingdan" type="text" placeholder="订单号" id="searchs"/>
                                <input 
                                    
                                    type="button" 
                                    value="搜索" 
                                    id="searchs-btn"
                                    onClick= {this.dingdan}
                                />
                            </li>
                            <li id="sch">
                                <input ref="yonghu" type="text" placeholder="搜索人姓名/手机号" id="searchs"/>
                                <input 
                                    
                                    type="button" 
                                    value="搜索" 
                                    id="searchs-btn"
                                    onClick = {this.yonghu}
                                />
                            </li>
                        </ul>
                    </div>
                    <section className="tBody" style={{position:"relative"}}>
                        <table id="tab" width="600" align="center" border="1">
                        
                            <thead>
                                
                                    <th>
                                        <label>
                                            <input 
                                                type="checkbox"
                                                checked = {whole}
                                                onChange = {this.whole}
                                            />
                                            <span></span>
                                        </label>
                                    </th>
                                    <th index="id">订单编号</th>
                                    <th>提交时间</th>
                                    <th index="price">用户账号</th>
                                    <th>订单金额</th>
                                    <th>支付方式</th>
                                    <th>订单来源</th>
                                    <th>订单状态</th>
                                    <th>操作</th>
                                
                            </thead>
                            <tbody id="tb">
                                {newList}
                                
                            </tbody>
                        </table>
                    </section>
                    <div id="page">
                        <div className="pag">
                            <a href="">上一页</a>
                            {newA}
                            
                            <a href="">下一页</a> 到 第
                            <input type="text" placeholder="1"/> 页
                            <button>确定</button>
                        </div>
                    
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Oderlist;