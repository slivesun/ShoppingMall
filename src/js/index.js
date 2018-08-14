import React, { Component } from 'react'

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



class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('main'));
		myChart.setOption( {
			title : {
				text: '订单数量',
				subtext: '6540'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['订单量']
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: false},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'订单量',
					type:'bar',
					data:[180,190,500,620,152,789,999,777,555,658,794,854],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				},
				// {
				// 	name:'降水量',
				// 	type:'bar',
				// 	data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
				// 	markPoint : {
				// 		data : [
				// 			{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
				// 			{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
				// 		]
				// 	},
				// 	markLine : {
				// 		data : [
				// 			{type : 'average', name : '平均值'}
				// 		]
				// 	}
				// }
			]
		});
                    
	}
	render() {
		return (
            <div>
                <div className="contents">
					<div className="overview">
						<div className="income">
							<div className="inc">
								<span className="iconfont icon-lianxirenweixuanzhong"></span>
								<div className="total">
									<p>1150</p>
									<i>商品数量</i>
								</div>

							</div>

						</div>
						<div className="income">
							<div className="inc">
								<span className="iconfont icon-xiaoshoubaobiao"></span>
								<div className="total">
									<p>6540</p>
									<i>订单数量</i>
								</div>

							</div>
						</div>
						<div className="income">
							<div className="inc">
								<span className="iconfont icon-gouwuche1"></span>
								<div className="total">
									<p>189852</p>
									<i>用户数量</i>
								</div>

							</div>
						</div>
						<div className="income">
							<div className="inc">
								<span className="iconfont icon-daiban"></span>
								<div className="total">
									<p>589</p>
									<i>退货数量</i>
								</div>

							</div>
						</div>
					</div>
				</div> 
				<div id="main" style={{marginTop:"50px"}}>
					<div id="main3" style={{"height":"100%"}}></div> 
				</div>
			
			
            
            
            </div>
            

		);
	}
}

export default Index;