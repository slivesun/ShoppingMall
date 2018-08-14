import React, { Component } from 'react'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        };
    }
    pa = () => {
        let {PageC} =this.props
        console.log(9999999)
    }
    changepage = (i) => {
        console.log("444444444")
        let { getArr } = this.props;
        getArr(i)
        
    }
    render() {
        let {PageC}=this.props;
        
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
            <div className="pag">
                <a href="">上一页</a>
                {newA}
                
                <a href="">下一页</a> 到 第
                <input type="text" placeholder="1"/> 页
                <button>确定</button>
            </div>
        );
    }
}

export default Page;