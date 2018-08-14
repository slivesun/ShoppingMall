/**
 * Created by Moudi on 2017/2/23.
 */
"use strict";
let express = require('express');
let router = express.Router();
let Add = require('../models/add');
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


//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'美特斯',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '衬衣',
//  ejfl: '男士',
//  spmc:'衬衣',
//  sppp:'美特斯',
//  yf:'12',
//  spbh:'2111',
//  spsj:"2886",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '裤子',
//  ejfl: '男士',
//  spmc:'裤子',
//  sppp:'美特斯',
//  yf:'12',
//  spbh:'2111',
//  spsj:"278",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'美特斯',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '衬衣',
//  ejfl: '男士',
//  spmc:'衬衣',
//  sppp:'Dickies',
//  yf:'12',
//  spbh:'2111',
//  spsj:"2886",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '裤子',
//  ejfl: '男士',
//  spmc:'裤子',
//  sppp:'Dickies',
//  yf:'12',
//  spbh:'2111',
//  spsj:"278",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'Dickies',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'Dickies',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '衬衣',
//  ejfl: '男士',
//  spmc:'衬衣',
//  sppp:'Dickies',
//  yf:'12',
//  spbh:'2111',
//  spsj:"2886",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '裤子',
//  ejfl: '男士',
//  spmc:'裤子',
//  sppp:'Barbour',
//  yf:'12',
//  spbh:'2111',
//  spsj:"278",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'Dickies',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '衬衣',
//  ejfl: '男士',
//  spmc:'衬衣',
//  sppp:'G-STAR',
//  yf:'12',
//  spbh:'2111',
//  spsj:"2886",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '裤子',
//  ejfl: '男士',
//  spmc:'裤子',
//  sppp:'G-STAR',
//  yf:'12',
//  spbh:'2111',
//  spsj:"278",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'G-STAR',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'Barbour',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '鞋子',
//  ejfl: '男士',
//  spmc:'鞋子',
//  sppp:'Barbour',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '裤子',
//  ejfl: '男士',
//  spmc:'裤子',
//  sppp:'Barbour',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '裤子',
//  ejfl: '男士',
//  spmc:'裤子',
//  sppp:'Barbour',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '衬衣',
//  ejfl: '男士',
//  spmc:'衬衣',
//  sppp:'Barbour',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
//Add.create({
//	yjfl: '衬衣',
//  ejfl: '男士',
//  spmc:'衬衣',
//  sppp:'Barbour',
//  yf:'12',
//  spbh:'2111',
//  spsj:"288",
//  spkc:"100",
//  onoff:false,
//  off:false
//});
router.get('/add', (req, res, next) => {
let obj=req.query;
let act=obj.act;
let id;

const PAGE_SIZE = 12;
switch(act) {
    case 'add':
    	let yjfl = decodeURI(req.query.yjfl)
    	let ejfl = decodeURI(req.query.ejfl)
    	let spmc = decodeURI(req.query.spmc)
    	let sppp = decodeURI(req.query.sppp)
    	let spjs = decodeURI(req.query.spjs)
    	let   yf = decodeURI(req.query.yf)
    	let spbh = decodeURI(req.query.spbh)
    	let spsj = decodeURI(req.query.spsj)
    	let spkc = decodeURI(req.query.spkc)
      	let onoff = decodeURI(req.query.onoff)
      	let off = decodeURI(req.query.off)
      if (!yjfl) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        let time = +new Date();
        yjfl = yjfl.replace('\n','');
        let shangpin = new Add({
            time: time,
            yjfl: yjfl,
            ejfl: ejfl,
		    spmc: spmc,
		    sppp:sppp,
		    spjs:spjs,
		    yf:yf,
		    spbh:spbh,
		    spsj:spsj,
		    spkc:spkc,
		    onoff:onoff,
		    off:off
        });
        shangpin.save((err, o) => {
          resData.code = 0;
          resData.msg = '提交成功！';
          resData.id = o._id;
          resData.time = o.time;
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
     		Add.remove({_id: Oall[ii]}, (err,data) => {
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
      Add.count({}, (err, n) => {
        resData.code = 0;
        console.log(n)
        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
        resData.count = Math.ceil(n / PAGE_SIZE);
        resData.total = n
        res.json(resData);
      });
      break;
    case 'gets':
    	let yjf = ''
        let spp = ''
        let j = {}
        if (req.query.state && req.query.pinpai) {
        	yjf = decodeURI(req.query.state)
        	spp = decodeURI(req.query.pinpai)
        	j = {yjfl:yjf,sppp:spp}
        } else if(req.query.state && req.query.sf){
        	yjf = decodeURI(req.query.state)
        	j = {yjfl:yjf}
        	
        } else if(req.query.state && req.query.sp){
        	spp = decodeURI(req.query.state)
        	j = {sppp:spp}
        }
        console.log(j)
      	Add.count(j, (err, n) => {
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
        Add
        .find({})
        .sort('-time')
        .skip(PAGE_SIZE * (page-1))
        .limit(PAGE_SIZE)
        .exec((err, data) => {
          let arr = [];
          for (let o of data) {
            let obj = {
            	id: o._id,
			    yjfl: o.yjfl,
	            ejfl: o.ejfl,
			    spmc: o.spmc,
			    sppp: o.sppp,
			    spjs: o.spjs,
			    yf: o.yf,
			    spbh: o.spbh,
			    spsj: o.spsj,
			    spkc: o.spkc,
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
        let name = ''
        let oj = {}
        if (req.query.state && req.query.pinpai) {
        	st = decodeURI(req.query.state)
        	name = decodeURI(req.query.pinpai)
        	oj = {yjfl:st,sppp:name}
        } else if(req.query.state && req.query.sp){
        	st = decodeURI(req.query.state)
        	oj = {sppp:st}
        	
        } else if(req.query.state && req.query.sf){
        	st = decodeURI(req.query.state)
        	oj = {yjfl:st}
        }
        
        console.log(oj)
        
        
        let page2=Number(obj.page);
        Add.find(oj)
            .sort('-time')
            .skip(PAGE_SIZE * (page2-1))
            .limit(PAGE_SIZE)
            .exec((err, data) =>{
                let arr=[];
                for(let o of data){
                    let obj2={
                    	id: o._id,
                        yjfl: o.yjfl,
			            ejfl: o.ejfl,
					    spmc: o.spmc,
					    sppp: o.sppp,
					    spjs: o.spjs,
					    yf: o.yf,
					    spbh: o.spbh,
					    spsj: o.spsj,
					    spkc: o.spkc,
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
        Add.find({spbh:bianhao})
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
                        yjfl: o.yjfl,
			            ejfl: o.ejfl,
					    spmc: o.spmc,
					    sppp: o.sppp,
					    spjs: o.spjs,
					    yf: o.yf,
					    spbh: o.spbh,
					    spsj: o.spsj,
					    spkc: o.spkc,
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
router.post('/add',(req,res)=> {
    const json = {code: 3, msg: "错误"};
    const body = req.body;
    let act = body.act;
    console.log(body)
    switch (act) {
        case 'edit':
            let id=body.id;
            Add.update({_id:id},body,(error,data)=>{
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