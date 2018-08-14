import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Oderlist from './oderlist';



class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props)
        return (
            <div class="contents">

                <div class="breadcrumb">
                    <span>订单详情</span>
                    <div id="bread_r">
                        <div class="remove4">
                            <Link to="oderlist" component={Oderlist}  id="remove3">关闭订单</Link>
                        </div>
                    </div>
                </div>
                
                <div class="jb">
                    <div class="j-t">
                        <div class="f-img j-img">
                            <img src="" alt="" class="iconfont icon-shuqian"/>
                            <span>基本信息</span>
                        </div>
                        <div class="comsearch comsearch_t comsearch_t2">
                            <section class="tBody tbody" id="td">
                                <table id="tab" width="600" align="center" border="1">
                                    <thead>
                                        <th index="id">订单编号</th>
                                        <th>发货单流水号</th>
                                        <th index="price">用户账号</th>
                                        <th>支付方式</th>
                                        <th>配送方式</th>
                                        <th>物流单号</th>
                                    </thead>
                                    <tbody id="tb">
                                        <tr>
                                            <td>201707196398345</td>

                                            <td>201707196398345</td>
                                            <td>18000000000</td>
                                            <td>支付宝</td>
                                            <td>顺丰快递</td>
                                            <td>123456</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>

                
                <div class="jb">
                    <div class="j-t">
                        <div class="f-img j-img">
                            <img src="" alt="" class="iconfont icon-shuqian"/>
                            <span>收货人信息</span>
                        </div>
                        <div class="comsearch comsearch_t comsearch_t2">
                            <section class="tBody tbody" id="td">
                                <table id="tab" width="600" align="center" border="1">
                                    <thead>
                                        <th index="id">收货人</th>
                                        <th>手机号码</th>
                                        <th index="price">邮政编码</th>
                                        <th>收货地址</th>
                                        <th>支付金额</th>

                                    </thead>
                                    <tbody id="tb">
                                        <tr>
                                            <td>大鸭梨</td>
                                            <td>18000000000</td>
                                            <td>518000</td>
                                            <td>广东省深圳市南山区科兴科学园</td>
                                            <td>1000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
                
                <div class="jb">
                    <div class="j-t">
                        <div class="f-img j-img">
                            <img src="" alt="" class="iconfont icon-shuqian"/>
                            <span>商品信息</span>
                        </div>
                        <div class="comsearch comsearch_t comsearch_t2">
                            <section class="tBody tbody" id="td">
                                <table id="tab" width="600" align="center" border="1">
                                    <thead>
                                        <th index="id">商品图片</th>
                                        <th>商品名称</th>
                                        <th index="price">货号</th>
                                        <th>属性</th>
                                        <th>数量</th>
                                        <th>小计</th>
                                    </thead>
                                    <tbody id="tb">
                                        <tr>
                                            <td>
                                                <img src="images/shop1.jpg" alt=""/>
                                            </td>

                                            <td>
                                                <p>银色星芒刺绣网纱底裤</p>
                                                <p>
                                                    品牌：
                                                    <i> Victoris Secret</i>
                                                </p>
                                            </td>
                                            <td>No86577</td>
                                            <td>
                                                <p>尺寸：
                                                    <i>X</i>
                                                </p>
                                                <p>
                                                    颜色：
                                                    <i>黑色</i>
                                                </p>
                                            </td>
                                            <td>1</td>
                                            <td>123456</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="images/shop1.jpg" alt=""/>
                                            </td>

                                            <td>
                                                <p>银色星芒刺绣网纱底裤</p>
                                                <p>
                                                    品牌：
                                                    <i>Victorias Secret</i>
                                                </p>
                                            </td>
                                            <td>No86577</td>
                                            <td>
                                                <p>尺寸：
                                                    <i>X</i>
                                                </p>
                                                <p>
                                                    颜色：
                                                    <i>黑色</i>
                                                </p>
                                            </td>
                                            <td>1</td>
                                            <td>123456</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="images/shop1.jpg" alt=""/>
                                            </td>

                                            <td>
                                                <p>银色星芒刺绣网纱底裤</p>
                                                <p>
                                                    品牌：
                                                    <i> Secret</i>
                                                </p>
                                            </td>
                                            <td>No86577</td>
                                            <td>
                                                <p>尺寸：
                                                    <i>X</i>
                                                </p>
                                                <p>
                                                    颜色：
                                                    <i>黑色</i>
                                                </p>
                                            </td>
                                            <td>1</td>
                                            <td>123456</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>

                
                <div class="jb">
                    <div class="j-t">
                        <div class="f-img j-img">
                            <img src="" alt="" class="iconfont icon-shuqian"/>
                            <span>订单跟踪(待定)</span>
                        </div>
                        <div class="track"></div>
                    </div>
                </div>


            </div>

        );
    }
}

export default Order;