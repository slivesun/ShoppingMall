import React, { Component } from 'react'
import '../css/public.css'
import '../css/add.css'
import '../css/commodity.css'
import '../css/user.css'
import '../css/jd.css'
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';
class Trade extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[]
         };
    }
    componentDidMount(){
        this.getArr()

        var myChart = echarts.init(document.getElementById('main'));

        myChart.setOption ({
            title: {
                text: '用户访问来源',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [{
                        value: 335,
                        name: '直接访问'
                    },
                    {
                        value: 310,
                        name: '邮件营销'
                    },
                    {
                        value: 234,
                        name: '联盟广告'
                    },
                    {
                        value: 135,
                        name: '视频广告'
                    }
                ]
            }]
        });
    }
    getArr = () => {
        fetch('http://localhost:88/api/oderlist?act=obtain')
        .then((e) => e.json())
        .then(data => {
            this.setState({arr:data})
            
        })
    }

    render() {
        let {arr} = this.state
        console.log(arr)
        return (
            <div className="contents">
                <div className="breadcrumb">
                    <a href="#">交易管理</a>
                    <span>交易统计</span>
                    <div id="bread_r">
                    </div>
                </div>

                <div className="jb">
                    <div className="j-t">
                        <div className="f-img j-img">
                            <img src="" alt="" className="iconfont icon-shuqian"/>
                            <span>交易数据</span>
                            <div className="jt-r">
                                <button className="active"
                                    onClick = {this.getArr}
                                >昨天</button>
                                <button>最近7天</button>
                                <button>最近30天</button>
                            </div>
                        </div>
                        <div className="comsearch comsearch_t comsearch_t2  comsearch_t comsearch_t3">
                            <section className="tBody tbody" id="td2">
                                <table id="tab" width="600" align="center" border="1">
                                    <thead>
                                        <th index="id">浏览人数</th>
                                        <th>下单人数</th>
                                        <th index="price">订单数</th>
                                        <th>下单件数</th>
                                        <th>有效订单数</th>
                                        <th>下单金额</th>
                                    </thead>
                                    <tbody id="tb">
                                        <tr>
                                            <td>1888</td>
                                            <td>80</td>
                                            <td>144</td>
                                            <td>643</td>
                                            <td>130</td>
                                            <td><i className="is">￥</i>1905871.71</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <th index="id">退款金额</th>
                                        <th>付款人数</th>
                                        <th index="price">付款订单数</th>
                                        <th>付款件数</th>
                                        <th>付款金额</th>
                                        <th>客单价</th>
                                    </thead>
                                    <tbody id="tb">
                                        <tr>
                                            <td><i className="is">￥</i>1046.01</td>
                                            <td>55</td>
                                            <td>81</td>
                                            <td>381</td>
                                            <td><i className="is">￥</i>1967849.99</td>
                                            <td><i className="is">￥</i>24294.44</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                            <div id="main" style={{margin:" 0 auto",width:" 100%",top:"50px"}}>
                            </div>
                        </div>
                    </div>

                </div>

               
               

            </div>

        );
    }
}

export default Trade;