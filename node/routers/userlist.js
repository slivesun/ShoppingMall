/**
 * Created by Moudi on 2017/2/23.
 */
"use strict";
let express = require('express');
let router = express.Router();
let Userlist = require('../models/userlist');
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



router.post('/upload', (req, res, next) => {
  //生成对象，配置上传目标路径
  let form = new multiparty.Form({
    uploadDir: './public/files/',
    encoding: 'utf-8'
  });
  form.parse(req, function (err, fields, files) {
    fs.rename(files.file[0].path, './public/files/' + files.file[0].originalFilename, function (err) {
      if (err) {
       console.log('重命名失败');
      } else {
        resData.code = 0;
        resData.msg = '上传成功！';
        res.json(resData);
      }
    })
  });
});

//weibo
//http://localhost:88/api/oderlist?act=get&page=1
//http://localhost:88/api/oderlist?act=add



Userlist.create({
	yhid: '123456',
    yhzh: '13581568595',
    yhnc:'好男人',
    yhdj:'黄金会员',
    xfje:'120',
    ddsl:'2018',
    onoff:false,
    off:false
    
});
Userlist.create({
	yhid: '65656',
    yhzh: '1365668595',
    yhnc:'信任一枚',
    yhdj:'普通会员',
    xfje:'120',
    ddsl:'2018',
    onoff:true,
    off:false
    
});
Userlist.create({
	yhid: '895656',
    yhzh: '17581568595',
    yhnc:'炫酷',
    yhdj:'铂金会员',
    xfje:'120',
    ddsl:'2018',
    onoff:true,
    off:false
    
});
Userlist.create({
	yhid: '2354',
    yhzh: '1365668589',
    yhnc:'一枚',
    yhdj:'钻石会员',
    xfje:'120',
    ddsl:'2018',
    onoff:true,
    off:false
    
});
router.get('/userlist', (req, res, next) => {
let obj=req.query;
let act=obj.act;
let id;

const PAGE_SIZE = 12;
switch(act) {
    
    case 'del':
     	let all=req.query.all
     	//console.log(all);
     	let Oall =JSON.parse(all)
     	//console.log(Oall)
     	for (let ii = 0;ii<Oall.length;ii++) {
     		Userlist.remove({_id: Oall[ii]}, (err,data) => {
		        if (!err) {
		          resData.code = 0;
		          resData.msg = '删除成功';
		          //res.json(resData);
		        } else {
		          resData.code = -1;
		          resData.msg = '删除失败';
		        }
		    });
     	}
     	setTimeout(function () {
     		res.json(resData)
     	},300)
      	
      break;
    
    case 'get_page_count':
      Userlist.count({}, (err, n) => {
        resData.code = 0;
        console.log(n)
        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
        resData.count = Math.ceil(n / PAGE_SIZE);
        resData.total = n
        res.json(resData);
      });
      break;
    case 'gets':
    	let sta = decodeURI(req.query.search)
        let j = {}
        switch (req.query.state){
        	case "yhid":
        		j={yhid:sta}
        		break;
        	case "yhzh":
        		j={yhzh:sta}
        		break;
        	case "yhdj":
        		j={yhdj:decodeURI(sta)}
        		break;
        }
        console.log(sta,j)
      	Userlist.count(j, (err, n) => {
      		console.log(j,n)
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
        Userlist
        .find({})
        .sort('-time')
        .skip(PAGE_SIZE * (page-1))
        .limit(PAGE_SIZE)
        .exec((err, data) => {
          let arr = [];
          for (let o of data) {
            let obj = {
            	id: o._id,
			    yhid: o.yhid,
			    yhzh: o.yhzh,
	            yhnc: o.yhnc,
			    yhdj: o.yhdj,
			    xfje: o.xfje,
			    ddsl: o.ddsl,
			    onoff: o.onoff,
			    off:o.off
			    
			    
            };
            arr.push(obj);
          }
          res.json(arr);
        });
      }
      break;
    case 'search':
        let st = ''
        let oj = {}
        if (req.query.yhid) {
        	st = decodeURI(req.query.yhid)
        	oj = {yhid:st}
        } else if(req.query.yhzh){
        	st = decodeURI(req.query.yhzh)
        	oj = {yhzh:st}
        	
        } else if(req.query.yhdj){
        	st = decodeURI(req.query.yhdj)
        	oj = {yhdj:st}
        }
        
        console.log(oj)
        
        
        let page2=Number(obj.page);
        Userlist.find(oj)
            .sort('-time')
            .skip(PAGE_SIZE * (page2-1))
            .limit(PAGE_SIZE)
            .exec((err, data) =>{
                let arr=[];
                for(let o of data){
                    let obj2={
                    	id: o._id,
					    yhid: o.yhid,
					    yhzh: o.yhzh,
			            yhnc: o.yhnc,
					    yhdj: o.yhdj,
					    xfje: o.xfje,
					    ddsl: o.ddsl,
					    onoff: o.onoff,
					    off:o.off
                    }
                    arr.push(obj2);
                }
                res.json(arr);
            })
        break;
    case 'bianhao':
        let bianhao = req.query.state
        let page3=Number(obj.page);
        Userlist.find({spbh:bianhao})
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
					    yhid: o.yhid,
					    yhzh: o.yhzh,
			            yhnc: o.yhnc,
					    yhdj: o.yhdj,
					    xfje: o.xfje,
					    ddsl: o.ddsl,
					    onoff: o.onoff,
					    off:o.off
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
router.post('/userlist',(req,res)=> {
    const json = {code: 3, msg: "错误"};
    const body = req.body;
    let act = body.act;
    console.log(body)
    switch (act) {
        case 'edit':
            let id=body.id;
            Userlist.update({_id:id},body,(error,data)=>{
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
//http://localhost:88/api/thtk

//router.post('/thtk')
module.exports = router;