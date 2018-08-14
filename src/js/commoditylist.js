import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/commodity.css'
import '../css/public.css'


class Commoditylist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[],
            PageC:'',
            Pval:'所有品牌',
            Fval:'所有分类',
            spbh:'',
            name:'',
            onum:'1',
            whole:false
        };
    }
    componentDidMount() {
        this.getArr();
    }
    
    getData = async (url) => {
        let data = await fetch('http://localhost:88/api/add?' + url)
        
        return await data.json();
        
    }
    
    getArr = async (num = 1,state,search,s,tol) => {
        let {arr,PageC,changeNum}=this.state;
        //请求当页的数据
        //let newArr = await this.getData('act=get&page='+num)
        switch (state) {
            case "search":
                if (s && tol) {
                    let fp = await this.getData('act=' + state + '&state=' + search + '&pinpai='+tol +'&page=' + num)
                    let fpNum = await this.getData('act=gets&state=' + search + '&pinpai=' + tol);
                    this.setState({arr:fp,PageC:fpNum.count,name:"search"});
                } else if (s == "sp"){
                    let p = await this.getData('act=' + state + '&state=' + search + '&sp='+s+ '&page=' + num)
                    let pNum = await this.getData('act=gets&state=' + search + '&sp=' +s);
                    this.setState({arr:p,PageC:pNum.count,name:"search"});
                } else if (s == "sf") {
                    let f = await this.getData('act=' + state + '&state=' + search + '&sf=' + s + '&page=' + num)
                    let fNum = await this.getData('act=gets&state=' + search + '&sf=' + s);
                    this.setState({arr:f,PageC:fNum.count,name:"search"});
                }
                
                break;
            case "bianhao":
                let dd = await this.getData('act=bianhao&state=' + search + '&page=' + num)
                let dNum = await this.getData('act=gets&state=' + search);
                this.setState({arr:dd,PageC:dNum.count,name:"bianhao"});
                break;
            default:
                let newArr = await this.getData('act=get&page=' + num)
                let pageNum = await this.getData('act=get_page_count');
                this.setState({arr:newArr,PageC:pageNum.count});
                break;
        }
        
    }

    
    
    page=()=>{
        let {PageC}=this.state;
        console.log(PageC);
    }

    changepage = (i) => {
        
        let {name,Pval,Fval,onum} = this.state
        console.log(Pval,Fval)
        if (Fval == "所有分类") {
            this.getArr(i, name, Pval, "sp")
            console.log("商品")
        } else if(Pval == "所有品牌"){
            console.log("品牌")
            this.getArr(i, name, Fval, "sf")
        }else{
            console.log("并且")
            this.getArr(i, name, Fval, "sf", Pval)
        }
        this.setState({onum:i})
        
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
        console.log(this)
        fetch('http://localhost:88/api/add', {
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
        
        let {arr,edn,name,se,whole} = this.state

        console.log(arr)
        let all = []
        arr.forEach((e,i)=>{
            if (e.off == true) {
                all.push(e.id)
            }
        })
        let jsonall = JSON.stringify(all)
        fetch('http://localhost:88/api/add?act=del&all=' + jsonall)
        .then((e) => e.json())
        .then(data => {
            if (data.code === 0) {
                this.getArr(edn,name,se)
                this.setState({whole:false})
            } 
        })
        
        
        
    }
    dele = (pid) =>{
        let {arr,edn,name,se,whole} = this.state
        let all = []
        all.push(pid)
        console.log(all)
        let jsonall = JSON.stringify(all)
        fetch('http://localhost:88/api/add?act=del&all=' + jsonall)
        .then((e) => e.json())
        .then(data => {
            if (data.code === 0) {
                this.getArr(edn,name,se)
            } 
        })
    }
    change = (pid) =>{
        let {arr} = this.state
        arr.forEach((e,i)=>{
            if (e.id === pid) {
                e.off = !e.off
            }
        })
        let off = arr.every((e,i)=>{
           return e.off === true
        })
        this.setState({arr,whole:off})
    }
    whole =() =>{
        let {arr,whole} = this.state
        whole = !whole
        arr.forEach(e=>{
            //e.off = !e.off
            whole ? (e.off = true) : e.off = false
        })
        console.log(whole)
        this.setState({arr,whole})

    }
    pval = (ev)=>{
        
        let {Fval} = this.state
        let {value:Pval,num} = ev.target
        this.setState({Pval})
        
        if (Fval !== "所有分类" && Pval !== "所有品牌") {
            this.getArr(num, "search", Fval, "sp", Pval)
        } else if (Fval == "所有分类" && Pval == "所有品牌") {
            this.getArr(num)
        } else if (Pval == "所有品牌") {
            this.getArr(num, "search", Fval, "sf")
        } else {
            this.getArr(num, "search", Pval,"sp")
        }
        
    }
    fval = (ev)=>{
        
        let {Pval} = this.state
        let {value:Fval,num} = ev.target
        this.setState({Fval})
        
        if (Pval !== "所有品牌" && Fval !== "所有分类") {
            this.getArr(num, "search", Fval,"sf",Pval)
        } else if (Fval == "所有分类" && Pval == "所有品牌") {
            this.getArr(num)
        } else if (Fval == "所有分类") {
            this.getArr(num, "search", Pval, "sp")
        } else {
            this.getArr(num, "search", Fval, "sf")
        }
    }
    spbh = (ev) =>{
        let {value:spbh} =ev.target
        this.setState({spbh})
    }
    search = () =>{
        let {spbh,num} = this.state
        
        this.getArr(num,"bianhao",spbh)
    }
    sxj = (id) =>{
        let {arr,name,Pval,Fval,onum} = this.state
        
        let c= null
        arr.forEach((e,i)=>{
            if (e.id == id) {
                 e.onoff = !e.onoff
                 c = e
            }
        })
        console.log(c)
        c.act = "edit"
        fetch('http://localhost:88/api/add', {
            method: "post",
            body:new URLSearchParams(c).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((e) => e.json())
        .then(data => {
            if (data.code === 0) {
                if (Fval == "所有分类") {
                    this.getArr(onum, name, Pval, "sp")
                    console.log("商品")
                } else if (Pval == "所有品牌") {
                    console.log("品牌")
                    this.getArr(onum, name, Fval, "sf")
                } else {
                    console.log("并且")
                    this.getArr(onum, name, Fval, "sf", Pval)
                }
            } 
        })

    }
    render() {
        let {arr,PageC,Fval,Pval,spbh,whole} = this.state
        console.log(arr)
        let newList = arr.map((e,i)=>{
            return <tr>
                        <td>
                            <label>
                                <input 
                                    type="checkbox"
                                    checked={e.off}
                                    onChange={()=>{this.change(e.id)}}
                                />
                                <span></span>
                            </label>
                        </td>
                        <td>{e.spbh}</td>
                        <td>{e.spmc}</td>
                        <td>{e.sppp}</td>
                        <td>{e.yf}</td>
                        <td>{e.spsj}</td>
                        <td>
                            <img 
                                src="" 
                                alt="" 
                                onClick={()=>{
                                    this.sxj(e.id)
                                }}
                                className={e.onoff?"iconfont icon-kaiguan4 active":"iconfont icon-kaiguan3"}
                            />
                        </td>
                        <td>{e.spkc}</td>
                        <td>
                            
                            <i>
                                <img src="" alt="" className="iconfont icon-bianji-copy"/>
                            </i>
                            <i
                                onClick = {()=>{
                                    this.dele(e.id)
                                }}
                            >
                                <img src="" alt="" className="iconfont icon-shanchu2"/>
                            </i>
                        </td>
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
                    <a href="#">商品管理</a>
                    <span>商品列表</span>
                    <div id="bread_r">
                        <div className="add">
                            <Link to="/addone" id="add">添加商品</Link>
                        </div>
                        <div className="remove">
                            <a 
                                href="javascript:;" 
                                id="remove"
                                onClick = {this.remove}
                            >批量删除</a>
                        </div>
                    </div>
                </div>

                <div className="search"></div>
                
                <div className="comsearch comsearch_t">
                    <div className="comsearch_h">
                        <ul>
                            <li>
                                <select 
                                    name="所有分类" 
                                    value={Fval}
                                    onChange={this.fval}
                                >
                                    <option >所有分类</option>
                                    <option >鞋子</option>
                                    <option >衬衣</option>
                                    <option >裤子</option>
                                </select>
                            </li>
                            <li>
                                <select 
                                    name="所有品牌" 
                                    value={Pval}
                                    onChange={this.pval}
                                >
                                    <option >所有品牌</option>
                                    <option >G-STAR</option>
                                    <option >Barbour</option>
                                    <option >Dickies</option>
                                    <option >美特斯</option>
                                </select>
                            </li>
                            <li id="sch">
                                <input 
                                    type="text" 
                                    placeholder="商品编号" 
                                    id="searchs"
                                    value={spbh}
                                    onChange={this.spbh}
                                />
                                <input 
                                    type="button" 
                                    value="搜索" 
                                    id="searchs-btn"
                                    onClick = {this.search}
                                />
                            </li>
                        </ul>
                    </div>
                    <section className="tBody">
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
                                <th index="id">商品编号</th>
                                <th>商品名称</th>
                                <th index="price">商品品牌</th>
                                <th>货号</th>
                                <th>价格</th>
                                <th>上架</th>
                                <th>库存</th>
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

export default Commoditylist;