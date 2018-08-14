/**
 * Created by Moudi on 2017/2/23.
 */
"use strict";
let express = require('express');
let router = express.Router();
let Oderlist = require('../models/oderlist');
let multiparty = require('multiparty');
let fs = require('fs');
let resData;

router.use(function (req, res, next) {
  resData = {
    code: 0,
    msg: ''
  };
  next();
});



//weibo
//http://localhost:88/api/oderlist?act=get&page=1
//
//Oderlist.create({
//	ddbh: "201845678",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566259999",
//  ddje:"2263",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "2017095592",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15186566666",
//  ddje:"2864",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566659999",
//  ddje:"2639",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//
//
//Oderlist.create({
//	ddbh: "201845678",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566259999",
//  ddje:"2263",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "2017095592",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15186566666",
//  ddje:"2864",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566659999",
//  ddje:"2639",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//
//Oderlist.create({
//	ddbh: "201845678",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566259999",
//  ddje:"2263",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "2017095592",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15186566666",
//  ddje:"2864",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566659999",
//  ddje:"2639",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//
//
//Oderlist.create({
//	ddbh: "201845678",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566259999",
//  ddje:"2263",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "2017095592",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15186566666",
//  ddje:"2864",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566659999",
//  ddje:"2639",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//
//Oderlist.create({
//	ddbh: "201845678",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566259999",
//  ddje:"2263",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "2017095592",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15186566666",
//  ddje:"2864",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566659999",
//  ddje:"2639",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//
//
//Oderlist.create({
//	ddbh: "201845678",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"18566259999",
//  ddje:"2263",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"已关闭",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "2017095592",
//  tjsj: "2018-02-12 04:48:58",
//  yhzh:"15186566666",
//  ddje:"2864",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"待付款",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-07-26 04:48:58",
//  yhzh:"18566659999",
//  ddje:"26",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"待发货",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-07-26 04:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已发货",
//  onoff:false,
//  
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-07-16 04:48:58",
//  yhzh:"18566659999",
//  ddje:"26",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"待发货",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-07-16 04:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已发货",
//  onoff:false,
//  
//});
//Oderlist.create({
//	ddbh: "201842578",
//  tjsj: "2018-07-25 05:48:59",
//  yhzh:"18566659999",
//  ddje:"26",
//  zffs:"支付宝",
//  ddly:"APP订单",
//  ddzt:"待发货",
//  onoff:false
//});
//Oderlist.create({
//	ddbh: "201757152",
//  tjsj: "2018-07-25 14:48:58",
//  yhzh:"15122966666",
//  ddje:"2856",
//  zffs:"微信",
//  ddly:"APP订单",
//  ddzt:"已发货",
//  onoff:false,
//  
//});
//http://localhost:88/api/oderlist?act=get&page=1

router.get('/oderlist', (req, res, next) => {
  
  //console.log(req.query);
  let obj=req.query;
  let act=obj.act;
  
  console.log(req.query)
  let id,content;
  const PAGE_SIZE = 12;

  switch(act) {
    case 'add':
      content = req.query.content;
      if (!content) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        let time = +new Date();
        content = content.replace('\n','');
        let weibo = new Oderlist({
          content: content,
          time: time,
          like: 0,
          dislike: 0
        });
        weibo.save((err, newWeiboInfo) => {
          resData.code = 0;
          resData.msg = '提交成功！';
          resData.id = newWeiboInfo._id;
          resData.time = newWeiboInfo.time;
          res.json(resData);
        });
      }
      break;
     case 'del':
     	let all=req.query.all
     	//console.log(all);
     	let Oall =JSON.parse(all)
     	//console.log(Oall)
     	for (let ii = 0;ii<Oall.length;ii++) {
     		Oderlist.remove({_id: Oall[ii]}, (err,data) => {
		        if (!err) {
		          resData.code = 0;
		          resData.msg = '删除成功';
		          //res.json(resData);
		        } else {
		          resData.code = -1;
		          resData.msg = '删除失败';
		          //res.json(resData);
		        }
		    });
     	}
     	setTimeout(function () {
     		res.json(resData)
     	},300)
      	
      break;
    
    case 'get_page_count':
    	
      Oderlist.count({}, (err, n) => {
        resData.code = 0;
        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
        resData.count = Math.ceil(n / PAGE_SIZE);
        resData.total = n
        res.json(resData);
      });
      break;
    case 'getd':
    	let ddbh=req.query.state
    	
    	
      	Oderlist.count({ddbh: ddbh}, (err, n) => {
	        resData.code = 0;
	        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
	        resData.count = Math.ceil(n / PAGE_SIZE);
	        resData.total = n
	        res.json(resData);
      	});
      break;
	case 'gety':
		let yhzh=req.query.state
	  	Oderlist.count({yhzh: yhzh}, (err, n) => {
	        resData.code = 0;
	        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
	        resData.count = Math.ceil(n / PAGE_SIZE);
	        resData.total = n
	        res.json(resData);
	  	});
	break;
    case 'getp':
    	let nam=""
    	switch (req.query.state){
        	case "quanbu":
        		 nam = decodeURI("全部")
        		break;
        	case "daifukuan":
        		 nam = decodeURI("待付款")
        		break;
        	case "daifahuo":
        		 nam = decodeURI("待发货")
        		 console.log('laiml')
        		break;
        	case "yifahuo":
        		 nam = decodeURI("已发货")
        		break;
        	case "yiwancheng":
        		 nam = decodeURI("已完成")
        		break;
        	case "yiguanbi":
        		 nam = decodeURI("已关闭")
        		break;
        	
        	default:
        		break;
        }
    	
      	Oderlist.count(nam==decodeURI("全部")?{}:{ddzt: nam}, (err, n) => {
	        resData.code = 0;
	        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
	        resData.count = Math.ceil(n / PAGE_SIZE);
	        resData.total = n
	        res.json(resData);
      	});
      break;
    case 'get':
      let page = Number(req.query.page);
      if (!page) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        Oderlist
        .find({})
        .sort('-time')
        .skip(PAGE_SIZE * (page-1))
        .limit(PAGE_SIZE)
        .exec((err, data) => {
          let arr = [];
          for (let o of data) {
            let obj = {
            	id: o._id,
	            ddbh: o.ddbh,
			    tjsj: o.tjsj,
			    yhzh: o.yhzh,
			    ddje: o.ddje,
			    zffs: o.zffs,
			    ddly: o.ddly,
			    ddzt: o.ddzt,
			    onoff: o.onoff
            };
            arr.push(obj);
          }
          res.json(arr);
        });
      }
      break;
    case 'obtain':
	        Oderlist.find({})
	            .sort('-time')
	            .exec((err, data) =>{
	                let arr=[];
	                if(err){
	                	console.log(err)
	                }
	                for(let o of data){
	                	console.log()
	                    let obj4={
	                    	id: o._id,
	                        ddbh: o.ddbh,
						    tjsj: o.tjsj,
						    yhzh: o.yhzh,
						    ddje: o.ddje,
						    zffs: o.zffs,
						    ddly: o.ddly,
						    ddzt: o.ddzt,
						    onoff: o.onoff
	                    }
	                    arr.push(obj4);
	                }
	                res.json(arr);
	            })
        break;
    case 'search':
        let name = ""
        
        switch (req.query.state){
        	case "quanbu":
        		 name = decodeURI("全部")
        		break;
        	case "daifukuan":
        		 name = decodeURI("待付款")
        		break;
        	case "daifahuo":
        		 name = decodeURI("待发货")
        		 console.log('laiml')
        		break;
        	case "yifahuo":
        		 name = decodeURI("已发货")
        		break;
        	case "yiwancheng":
        		 name = decodeURI("已完成")
        		break;
        	case "yiguanbi":
        		 name = decodeURI("已关闭")
        		break;
        	
        	default:
        		break;
        }
        
        
        let page2=Number(obj.page);
        Oderlist.find(name==decodeURI("全部")?{}:{ddzt: name})
            .sort('-time')
            .skip(PAGE_SIZE * (page2-1))
            .limit(PAGE_SIZE)
            .exec((err, data) =>{
                let arr=[];
                console.log("11111")
                arr.page = Math.ceil(data.length/6);
            //    console.log(arr.page)
                for(let o of data){
                    let obj2={
                    	id: o._id,
                        ddbh: o.ddbh,
					    tjsj: o.tjsj,
					    yhzh: o.yhzh,
					    ddje: o.ddje,
					    zffs: o.zffs,
					    ddly: o.ddly,
					    ddzt: o.ddzt,
					    onoff: o.onoff
                    }
                    arr.push(obj2);
                }
                res.json(arr);
            })
        break;
    case 'yonghu':
        let yonghu = req.query.yonghu
        let page3=Number(obj.page);
        Oderlist.find({yhzh:yonghu})
            .sort('-time')
            .skip(PAGE_SIZE * (page3-1))
            .limit(PAGE_SIZE)
            .exec((err, data) =>{
                let arr=[];
                if(err){
                	console.log(err)
                }
                for(let o of data){
                	console.log()
                    let obj3={
                    	id: o._id,
                        ddbh: o.ddbh,
					    tjsj: o.tjsj,
					    yhzh: o.yhzh,
					    ddje: o.ddje,
					    zffs: o.zffs,
					    ddly: o.ddly,
					    ddzt: o.ddzt,
					    onoff: o.onoff
                    }
                    arr.push(obj3);
                }
                res.json(arr);
            })
        break;
    case 'dingdan':
        let dingdan = req.query.dingdan
        let page4=Number(obj.page);
        Oderlist.find({ddbh:dingdan})
            .sort('-time')
            .skip(PAGE_SIZE * (page4-1))
            .limit(PAGE_SIZE)
            .exec((err, data) =>{
                let arr=[];
                if(err){
                	console.log(err)
                }
                for(let o of data){
                	console.log()
                    let obj3={
                    	id: o._id,
                        ddbh: o.ddbh,
					    tjsj: o.tjsj,
					    yhzh: o.yhzh,
					    ddje: o.ddje,
					    zffs: o.zffs,
					    ddly: o.ddly,
					    ddzt: o.ddzt,
					    onoff: o.onoff
                    }
                    arr.push(obj3);
                }
                res.json(arr);
            })
        break;
    default:
      resData.code = -1;
      resData.msg = '参数错误';
      res.json(resData);
  }

});
router.post('/oderlist',(req,res)=> {
    const json = {code: 3, msg: "错误"};
    const body = req.body;
    let act = body.act;
    console.log(body)
    switch (act) {
        case 'edit':
            let id=body.id;
            Oderlist.update({_id:id},body,(error,data)=>{
                if(error){
                    json.code=-1;
                    json.msg='更新失败！';
                    res.json(json);
                }else{
                    json.code=0;
                    json.msg='更新成功！';
                    res.json(json);
                }
            })
            break;
		case 'obtain':
	        Oderlist.find({})
	            .sort('-time')
	            .skip(1)
	            .limit(12)
	            .exec((err, data) =>{
	                let arr=[];
	                if(err){
	                	console.log(err)
	                }
	                for(let o of data){
	                	console.log()
	                    let obj3={
	                    	id: o._id,
	                        ddbh: o.ddbh,
						    tjsj: o.tjsj,
						    yhzh: o.yhzh,
						    ddje: o.ddje,
						    zffs: o.zffs,
						    ddly: o.ddly,
						    ddzt: o.ddzt,
						    onoff: o.onoff
	                    }
	                    arr.push(obj3);
	                }
	                res.json(arr);
	            })
        break;
	}
		    
});
//http://localhost:88/api/thtk

//router.post('/thtk')
module.exports = router;