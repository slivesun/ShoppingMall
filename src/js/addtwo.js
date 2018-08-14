import React, { Component } from 'react'

class Addtwo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="contents">
                <div className="breadcrumb">
                    <a href="#">商品管理</a>
                    <span>添加商品</span>
                    <div id="bread_r">
                    </div>
                </div>
                <div id="list">
                    <div className="l-h">
                        <div className="lis">
                            <span>1</span>
                            <i>填写商品信息</i>
                        </div>
                        <div className="lis">
                            <span id="lis2">2</span>
                            <i id="i2">填写商品属性</i>
                        </div>
                        <span id="uimg2"></span>
                    </div>
                </div>

                <div className="default">
                    <div className="de-f">
                        

                    </div>



                    <div className="de-r">
                        <div className="de-rr">
                            <div className="f-img">
                                <img src="" alt="" className="iconfont icon-shuqian"/>
                                <span>商品属性</span>
                            </div>
                            
                            <div id="format">
                                <div className="sort">
                                    <div className="s-l s-l2">
                                        <i>*</i>
                                        <span>商品规格：</span>
                                    </div>
                                </div>
                                <div className="sort">
                                    <div className="s-l  s-l3">
                                        <span>尺寸：</span>
                                    </div>
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>
                                        <span>M</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>
                                        <span>X</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>
                                        <span>XL</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>
                                        <span>2XL</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>
                                        <span>3XL</span>
                                    </label>
                                </div>

                                <div className="sort">
                                    <div className="s-l  s-l3">
                                        <span>颜色：</span>
                                    </div>
                                    <div className="color">
                                        <label>
                                            <input type="checkbox" className="ip"/>
                                            <span className="ck"></span>
                                        </label>
                                        <span>黑色</span>
                                        <i>删除</i>
                                    </div>

                                    <div className="color">
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>
                                    </label>
                                    <span>粉色</span>
                                    <i>删除</i>

                                    </div>
                                    <div className="color">
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>

                                    </label>
                                    <span>白色</span>
                                    <i>删除</i>
                                    </div>
                                    <div className="color"></div>
                                    <label>
                                        <input type="checkbox" className="ip"/>
                                        <span className="ck"></span>

                                    </label>
                                    <span>红色</span>
                                    <i>删除</i>
                                </div>

                                <div className="sort">
                                    <div className="s-l s-l3">
                                        <i></i>
                                        <span></span>
                                    </div>
                                    <input type="text"/>
                                    <button id="btn">增加</button>
                                </div>


                            </div>



                            <div className="comsearch comsearch_t">
                                
                                <section className="tBody" id="td">
                                    <table id="tab" width="600" align="center" border="1">
                                        <thead>
                                            <th index="id">尺码</th>
                                            <th>颜色</th>
                                            <th index="price">销售价格</th>
                                            <th>商品库存</th>
                                            <th>操作</th>
                                        </thead>
                                        <tbody id="tb">
                                            <tr>
                                                <td>M</td>
                                                
                                                <td>黑色</td>
                                                <td>108</td>
                                                <td>1000</td>
                                                <td>
                                                    <i className="del">删除</i>
                                                </td>
                                            </tr>
                                           
                                            <tr>
                                                <td>X</td>
                                            
                                                <td>粉色</td>
                                                <td>108</td>
                                                <td>1000</td>
                                                <td>
                                                    <i className="del">删除</i>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>XL</td>
                                            
                                                <td>白色</td>
                                                <td>108</td>
                                                <td>1000</td>
                                                <td>
                                                    <i className="del">删除</i>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2XL</td>
                                            
                                                <td>红色</td>
                                                <td>108</td>
                                                <td>1000</td>
                                                <td>
                                                    <i className="del">删除</i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3XL</td>
                                            
                                                <td>黑色</td>
                                                <td>108</td>
                                                <td>1000</td>
                                                <td>
                                                    <i className="del">删除</i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            
                            </div>








                            <ul>
                                <li>
                                    <div className="l_img">
                                        <img src="images/shop1.jpg" alt=""/>
                                    </div>
                                    <i>删除图片</i>
                                </li>
                                <li>
                                    <div className="l_img">
                                        <img src="images/shop1.jpg" alt=""/>
                                    </div>
                                    <i>删除图片</i>
                                </li>
                                <li>
                                    <div className="l_img">
                                        <img src="images/shop1.jpg" alt=""/>
                                    </div>
                                    <i>删除图片</i>
                                </li>
                                <li>
                                    <div className="l_img">
                                        <img src="images/shop1.jpg" alt=""/>
                                    </div>
                                    <i>删除图片</i>
                                </li>

                            </ul>


                            <div className="sort">
                                <div className="s-l s-l3">
                                    <input type="button" value="上传图片" id="upload"/>
                                </div>
                                <span id="ms">最多可以上传5张图片，建议尺寸800*800px</span>
                            </div>

                            <div className="sort">
                                <div className="s-l s-l2">
                                    <i>*</i>
                                    <span>上市年份：</span>
                                </div>
                                <select name="" id="">
                                    <option value="">2017</option>
                                    <option value="">2018</option>
                                    <option value=""></option>
                                    <option value=""></option>

                                </select>
                                <div className="sort">
                                    <div className="s-l s-l2">
                                        <i>*</i>
                                        <span>材质参数：</span>
                                    </div>
                                    <input type="text"/>
                                </div>

                            </div>

                        </div>



                        <div id="next2">完成,提交商品</div>
                    </div>

                </div>
                </div>


        );
    }
}

export default Addtwo;