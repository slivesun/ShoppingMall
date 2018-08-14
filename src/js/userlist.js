import React, { Component } from 'react'
import '../css/public.css'
import '../css/commodity.css'



class Userlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[],
            yhid:'',
            yhzh:'',
            num:1,
            PageC:'',
            name:'',
            se:'',
            dj:''
        
         };
    }

    componentDidMount() {
        this.getArr();
    }
    
    getData = async (url) => {
        console.log(33333333)
        console.log(url)
        let data = await fetch('http://localhost:88/api/userlist?' + url)
        
        return await data.json();
        
    }
    
    getArr = async (num = 1,state,search) => {
        let {arr,PageC,changeNum}=this.state;
        //请求当页的数据
        //let newArr = await this.getData('act=get&page='+num)
        
        switch (state) {
            case "yhid":   
                let yhid = await this.getData('act=search&yhid=' + search + '&page=' + num)
                let iNum = await this.getData('act=gets&state=' + state + '&search='+ search);
                this.setState({arr:yhid,PageC:iNum.count,name:"yhid",se:search,num:num});
                break;
            case "yhzh":
                let yhzh = await this.getData('act=search&yhzh=' + search + '&page=' + num)
                let zNum = await this.getData('act=gets&state=' + state + '&search=' + search);
                this.setState({arr:yhzh,PageC:zNum.count,name:"yhzh",se:search,num:num});
                break;
            case "yhdj":
                let yhdj = await this.getData('act=search&yhdj=' + search + '&page=' + num)
                let dNum = await this.getData('act=gets&state=' + state + '&search=' + search);
                this.setState({arr:yhdj,PageC:dNum.count,name:"yhdj",se:search,num:num});
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
        
        let {name,se} = this.state
        this.getArr(i,name,se)
        
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
        fetch('http://localhost:88/api/userlist', {
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
        fetch('http://localhost:88/api/userlist?act=del&all=' + jsonall)
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
        fetch('http://localhost:88/api/userlist?act=del&all=' + jsonall)
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
    
    
    yhid = (ev) =>{
        let {value:yhid} =ev.target
        this.setState({yhid})
    }
    yhzh = (ev) =>{
        let {value:yhzh} =ev.target
        this.setState({yhzh})
    }
    syhid = (ev) =>{
        let {yhid,num} = this.state
        num = 1
        if (yhid !== '') {
            this.getArr(num, 'yhid', yhid)
        }
        
    }
    syhzh = (ev) =>{
        let {yhzh,num} = this.state
        num = 1
        if (yhzh !== '') {
            this.getArr(num, 'yhzh', yhzh)
        }
    }
    
    sxj = (id) =>{
        let {arr,name,se,num} = this.state
        
        let c= null
        arr.forEach((e,i)=>{
            if (e.id == id) {
                 e.onoff = !e.onoff
                 c = e
            }
        })
        console.log(c)
        c.act = "edit"
        fetch('http://localhost:88/api/userlist', {
            method: "post",
            body:new URLSearchParams(c).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((e) => e.json())
        .then(data => {
            this.getArr(num,name,se)
        })

    }
    yhdj = (ev) =>{
        let {value:dj} = ev.target
        this.setState({dj})

    }
    dj = () =>{
        let {dj,num} = this.state
        num = 1
        if (dj == "不限等级") {
            this.getArr(num)
        } else {
            this.getArr(num, 'yhdj', dj)
        }
        
    }
    qb = () =>{
        let {num} = this.state
        num = 1
        this.getArr(num)
    }
    render() {
        let {arr,PageC,yhid,yhzh,dj,whole} = this.state
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
                        <td>{e.yhid}</td>
                        <td>{e.yhzh}</td>
                        <td>{e.yhnc}</td>
                        <td>{e.yhdj}</td>
                        <td>{e.xfje}</td>
                        <td>{e.ddsl}</td>
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
                        <td>
                            <i>编辑</i>
                            <i
                                onClick={()=>{
                                    this.dele(e.id)
                                }}
                            >删除</i>
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
                    <a href="#">用户管理</a>
                    <span>用户列表</span>
                    <div id="bread_r">
                        <div className="remove4">
                            <a href="javascript:;" id="remove5"
                                onClick={this.remove}
                            >批量删除</a>
                        </div>
                        
                    </div>
                </div>


                <div className="search"></div>
                
                <div className="comsearch comsearch_t">
                    <div className="comsearch_h comsearch_h1">
                        <ul id="order">
                            <li>
                                <div className="active"
                                    onClick = {this.qb}
                                >
                                    <p>
                                        <span>全部用户(</span>
                                        <span className="cache">10000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="comsearch_h">
                        <ul>
                            <li id="sch">
                                <input type="text" placeholder="用户ID" id="searchs"
                                    value={yhid}
                                    onChange = {this.yhid}
                                />
                                <input type="button" value="搜索" id="searchs-btn"
                                    onClick = {this.syhid}
                                />
                            </li>

                            <li id="sch">
                                <input type="text" placeholder="用户账号" id="searchs"
                                    value = {yhzh}
                                    onChange = {this.yhzh}
                                />
                                <input type="button" value="搜索" id="searchs-btn"
                                    onClick = {this.syhzh}
                                />
                            </li>
                            <li id="sch">
                               <select name="不限等级" id="set"
                                    value = {dj}
                                    onChange = {this.yhdj}
                               >
                                <option >不限等级</option>
                                <option >普通会员</option>
                                <option >黄金会员</option>
                                <option >铂金会员</option>
                                <option >钻石会员</option>
                               </select>
                                <input type="button" value="搜索" id="searchs-btn"
                                    onClick = {this.dj}
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
                                <th index="id">用户ID</th>
                                <th>用户账户</th>
                                <th index="price">用户昵称</th>
                                <th>会员等级</th>
                                <th>消费金额</th>
                                <th>订单数量</th>
                                <th>账号启用状态</th>
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

export default Userlist;