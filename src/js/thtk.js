import React, { Component } from 'react'
import '../css/public.css'
import '../css/commodity.css'


class Thtk extends Component {
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
        let data = await fetch('http://localhost:88/api/thtk?' + url)
        
        return await data.json();
        
    }
    
    getArr = async (num = 1,state,search) => {
      //  console.log(state)
        let {arr,PageC,changeNum,name,se,edn,whole}=this.state;
        
        //请求当页的数据
        //let newArr = await this.getData('act=get&page='+num)
        const oder= document.getElementById("order")
        const Odiv = oder.querySelectorAll("div")
        
        console.log(Odiv)
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
            case "daichuli":
                let da = await this.getData('act=search&state='+ state + '&page=' + num)
                let dapageNum = await this.getData('act=getp&state='+ state);
                Odiv[1].className = 'active'
                Odiv[1].children[0].children[1].innerHTML = dapageNum.total
                this.setState({arr:da,PageC:dapageNum.count,name:state,edn:num,whole:false});
                break;
            case "tuihuozhong":
                let tuihuozhong = await this.getData('act=search&state=' + state + '&page=' + num)
                let fapageNum = await this.getData('act=getp&state=' + state);
                Odiv[2].className = 'active'
                Odiv[2].children[0].children[1].innerHTML = fapageNum.total
                this.setState({arr:tuihuozhong,PageC:fapageNum.count,name:state,edn:num,whole:false});
                break;
            case "yichuli":
                let yi = await this.getData('act=search&state=' + state + '&page=' + num)
                let yipageNum = await this.getData('act=getp&state=' + state);
                Odiv[3].className = 'active'
                Odiv[3].children[0].children[1].innerHTML = yipageNum.total
                this.setState({ arr: yi, PageC: yipageNum.count,name:state,edn:num,whole:false });
                break;
            case "yijvjue":
                let wan = await this.getData('act=search&state='+ state + '&page=' + num)
                let wanpageNum = await this.getData('act=getp&state=' + state);
                Odiv[4].className = 'active'
                Odiv[4].children[0].children[1].innerHTML = wanpageNum.total
                this.setState({arr:wan,PageC:wanpageNum.count,name:state,edn:num,whole:false});
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
                this.setState({arr:newArr,PageC:pageNum.count,whole:false});
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
        c.ddzt = "已完成"
        c.act = "edit"
        console.log(this)
        fetch('http://localhost:88/api/thtk', {
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
            } else if (data.code === 1) {
                this.setState()
            }
        })
        console.log(c.ddbh,arr,v)



    }
    remove = () =>{
        let {arr,edn,name,se} = this.state
        let all = []
        arr.forEach((e,i)=>{
            if (e.onoff == true) {
                all.push(e.id)
            }
        })
        let jsonall = JSON.stringify(all)
        fetch('http://localhost:88/api/thtk?act=del&all=' + jsonall)
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
        let {arr,whole} = this.state
        arr.forEach((e,i)=>{
            if (e.id === pid) {
                e.onoff = !e.onoff
            }
           
        })
        let off = arr.every((e,i)=>{
           return e.onoff === true
        })
        console.log(whole,off,arr)
         this.setState({arr,whole:off})
    }
    whole =() =>{
        let {arr,whole} = this.state
        whole = !whole
        arr.forEach(e=>{
           // e.onoff = !e.onoff
            whole ? (e.onoff = true) : e.onoff = false //全选
        })
        console.log(whole)
        this.setState({arr,whole})

    }
    // <tr>
    //     <td>
    //         <label>
    //             <input type="checkbox"/>
    //             <span></span>
    //         </label>
    //     </td>
    //     <td>201707196398345</td>
    //     <td>2018-02-12 14:48:38</td>
    //     <td>18000000000</td>
    //     <td>¥200.00</td>
    //     <td>大梨</td>
    //     <td>待处理</td>
    //     <td>
    //         <i>查看详情</i>
    //     </td>
    // </tr>

    render() {
        let {arr,changeNum,PageC,num,whole} = this.state
        let newList = arr.map((e,i)=>{
            return <tr key={i}>
                        <td>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked = {
                                        e.onoff
                                    }
                                    onChange = {()=>{this.change(e.id)}}
                                />
                                <span
                                   
                                ></span>
                            </label>
                        </td>
                        <td>{e.ddbh}</td>
                        <td>{e.sqsj}</td>
                        <td>{e.yhzh}</td>
                        <td>{e.tkje}</td>
                        <td>{e.lxr}</td>
                        <td>{e.sqzt}</td>
                        <td>
                            <i>查看详情</i>
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
        console.log(PageC)
        for(let i=1;i<=PageC;i++){
           newA.push(<span 
                key={i} 
                
                onClick={()=>{
                    this.changepage(i)
                }}
            >{i}</span>);
        }
        return (
            <div class="contents">
                <div class="breadcrumb">
                    <a href="#">订单管理</a>
                    <span>退款申请处理</span>
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


                <div class="search"></div>
                
                <div class="comsearch comsearch_t">
                    <div class="comsearch_h comsearch_h1">
                        <ul id="order">
                            <li>
                                <div 
                                    class="active"
                                    onClick={()=>{this.getArr(num,"quanbu")}}
                                >
                                    <p>
                                        <span>全部申请(</span>
                                        <span class="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"daichuli")}}
                                >
                                    <p>
                                        <span>待处理(</span>
                                        <span class="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"tuihuozhong")}}
                                >
                                    <p>
                                        <span>退货中(</span>
                                        <span class="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"yichuli")}}
                                >

                                    <p>
                                        <span>已处理(</span>
                                        <span class="cache">1000</span>
                                        <span>)</span>
                                    </p>

                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={()=>{this.getArr(num,"yijvjue")}}
                                >
                                    <p>
                                        <span>已拒绝(</span>
                                        <span class="cache">1000</span>
                                        <span>)</span>
                                    </p>

                                </div>
                            </li>
                          
                        </ul>
                    </div>
                    <div class="comsearch_h">
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
                    <section class="tBody">
                        <table id="tab" width="600" align="center" border="1">
                            <thead>
                                <th>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            checked={whole}
                                            onChange = {this.whole}
                                        />
                                        <span></span>
                                    </label>
                                </th>
                                <th index="id">订单编号</th>
                                <th>申请时间</th>
                                <th index="price">用户账号</th>
                                <th>退款金额</th>
                                <th>联系人</th>
                                <th>申请状态</th>
                                <th>操作</th>
                            </thead>
                            <tbody id="tb">
                                {newList}

                            </tbody>
                        </table>
                    </section>

                    <div id="page">
                        <div class="pag">
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

export default Thtk;