import React, { Component } from 'react'


class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="contents">

                <div className="breadcrumb">
                    <span>会员等级设置</span>
                    <div id="bread_r">
                        <div className="remove4">
                            <a href="" id="remove3">添加</a>
                        </div>
                    </div>
                </div>
              
                <div className="jb">
                    <div className="j-t">
                        <div className="f-img j-img">
                            <img src="" alt="" className="iconfont icon-shuqian"/>
                            <span>数据列表</span>
                        </div>
                        <div className="comsearch comsearch_t comsearch_t2">
                            <section className="tBody tbody" id="td">
                                <table id="tab" width="600" align="center" border="1">
                                    <thead>
                                        <tr>
                                        <th index="id">等级名称</th>
                                        <th>默认会员等级</th>
                                        <th index="price">成长值满足点</th>
                                        <th>免运费标准</th>
                                        <th>评价奖励</th>
                                        <th>备注</th>
                                        <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tb">
                                        <tr>
                                            <td>普通会员</td>
                                            <td><img src="" alt="" className="iconfont icon-kaiguan4 active"/></td>
                                            <td>1</td>
                                            <td>199元/每笔</td>
                                            <td>+5成长值/条</td>
                                            <td>无</td>
                                            <td><i>编辑</i></td>
                                        </tr>
                                        <tr>
                                            <td>白金会员</td>
                                            <td>
                                                <img src="" alt="" className="iconfont icon-kaiguan4 "/>
                                            </td>
                                            <td>5000</td>
                                            <td>199元/每笔</td>
                                            <td>+10成长值/条</td>
                                            <td>无</td>
                                            <td>
                                                <i>编辑</i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>普通会员</td>
                                            <td>
                                                <img src="" alt="" className="iconfont icon-kaiguan4"/>
                                            </td>
                                            <td>10000</td>
                                            <td>99元/每笔</td>
                                            <td>+15成长值/条</td>
                                            <td>无</td>
                                            <td>
                                                <i>编辑</i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>钻石会员</td>
                                            <td>
                                                <img src="" alt="" className="iconfont icon-kaiguan4 "/>
                                            </td>
                                            <td>15000</td>
                                            <td>69元/每笔</td>
                                            <td>+20成长值/条</td>
                                            <td>无</td>
                                            <td>
                                                <i>编辑</i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
              
             


            </div>

        );
    }
}

export default Member;