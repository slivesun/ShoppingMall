/**
 * Created by Moudi on 2017/2/23.
 */
"use strict";
let express = require('express');
let router = express.Router();
let Thtk = require('../models/thtk');
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
//http://localhost:88/api/Thtk?act=get&page=1
//
//Thtk.create({
//	ddbh: "201757152",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966249",
//  tkje:"12",
//  lxr:"张三",
//  sqzt:"待处理",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757153",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966248",
//  tkje:"15",
//  lxr:"张三看",
//  sqzt:"已拒绝",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757154",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966247",
//  tkje:"18",
//  lxr:"张上的三",
//  sqzt:"退货中",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757155",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966246",
//  tkje:"16",
//  lxr:"张发三",
//  sqzt:"已处理",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757156",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966245",
//  tkje:"25",
//  lxr:"张发三",
//  sqzt:"待处理",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757157",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966244",
//  tkje:"65",
//  lxr:"张股份三",
//  sqzt:"已拒绝",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757158",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966243",
//  tkje:"78",
//  lxr:"张额三",
//  sqzt:"退货中",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757159",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966242",
//  tkje:"456",
//  lxr:"张我",
//  sqzt:"已处理",
//  onoff:false
//});
//Thtk.create({
//	ddbh: "201757160",
//  sqsj: "2018-02-12 04:48:58",
//  yhzh:"15128966241",
//  tkje:"2856",
//  lxr:"张三发",
//  sqzt:"已处理",
//  onoff:false
//});
//http://localhost:88/api/Thtk?act=get&page=1

router.get('/thtk', (req, res, next) => {
  
  //console.log(req.query);
  let obj=req.query;
  let act=obj.act;
  
  
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
        let weibo = new Thtk({
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
     		Thtk.remove({_id: Oall[ii]}, (err,data) => {
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
    	
      Thtk.count({}, (err, n) => {
        resData.code = 0;
        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
        resData.count = Math.ceil(n / PAGE_SIZE);
        resData.total = n
        res.json(resData);
      });
      break;
    case 'getd':
    	console.log(req.query.state)
    	let ddbh=req.query.state
    	
    	
      	Thtk.count({ddbh: ddbh}, (err, n) => {
	        resData.code = 0;
	        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
	        resData.count = Math.ceil(n / PAGE_SIZE);
	        resData.total = n
	        res.json(resData);
      	});
      break;
	case 'gety':
		console.log(req.query.state)
		let yhzh=req.query.state
	  	Thtk.count({yhzh: yhzh}, (err, n) => {
	        resData.code = 0;
	        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
	        resData.count = Math.ceil(n / PAGE_SIZE);
	        resData.total = n
	        res.json(resData);
	  	});
	break;
    case 'getp':
    	console.log(req.query.state)
    	let nam=""
    	switch (req.query.state){
        	case "quanbu":
        		 nam = decodeURI("全部")
        		break;
        	case "daichuli":
        	console.log("44656465464654654654654")
        		 nam = decodeURI("待处理")
        		break;
        	case "tuihuozhong":
        		 nam = decodeURI("退货中")
        		 console.log('laiml')
        		break;
        	case "yichuli":
        		 nam = decodeURI("已处理")
        		break;
        	case "yijvjue":
        		 nam = decodeURI("已拒绝")
        		break;
        	
        	default:
        		break;
        }
    	
      	Thtk.count(nam==decodeURI("全部")?{}:{sqzt: nam}, (err, n) => {
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
        Thtk
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
			    sqsj: o.sqsj,
			    yhzh: o.yhzh,
			    tkje: o.tkje,
			    lxr: o.lxr,
			    sqzt: o.sqzt,
			    onoff: o.onoff
			    
            };
            arr.push(obj);
          }
          res.json(arr);
        });
      }
      break;
    case 'search':
        let name = ""
        console.log("4564651321313132")
        switch (req.query.state){
        	case "quanbu":
        		 name = decodeURI("全部")
        		break;
        	case "daichuli":
        		 name = decodeURI("待处理")
        		 console.log("loloo")
        		break;
        	case "tuihuozhong":
        		 name = decodeURI("退货中")
        		break;
        	case "yichuli":
        		 name = decodeURI("已处理")
        		break;
        	case "yijvjue":
        		 name = decodeURI("已拒绝")
        		break;
        	
        	default:
        		break;
        }
        
        
        let page2=Number(obj.page);
        Thtk.find(name==decodeURI("全部")?{}:{sqzt: name})
            .sort('-time')
            .skip(PAGE_SIZE * (page2-1))
            .limit(PAGE_SIZE)
            .exec((err, data) =>{
                let arr=[];
                for(let o of data){
                    let obj2={
                    	id: o._id,
			            ddbh: o.ddbh,
						sqsj: o.sqsj,
						yhzh: o.yhzh,
						tkje: o.tkje,
						lxr: o.lxr,
						sqzt: o.sqzt,
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
        Thtk.find({yhzh:yonghu})
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
						sqsj: o.sqsj,
						yhzh: o.yhzh,
						tkje: o.tkje,
						lxr: o.lxr,
						sqzt: o.sqzt,
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
        Thtk.find({ddbh:dingdan})
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
						sqsj: o.sqsj,
						yhzh: o.yhzh,
						tkje: o.tkje,
						lxr: o.lxr,
						sqzt: o.sqzt,
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
router.post('/thtk',(req,res)=> {
    const json = {code: 3, msg: "错误"};
    const body = req.body;
    let act = body.act;
    console.log(body)
    switch (act) {
        case 'edit':
            let id=body.id;
            Thtk.update({_id:id},body,(error,data)=>{
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

    }
});
module.exports = router;