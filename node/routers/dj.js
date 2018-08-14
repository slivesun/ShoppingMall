/**
 * Created by Moudi on 2017/2/23.
 */
"use strict";
let express = require('express');
let router = express.Router();
let Dj = require('../models/dj');
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



//Dj.create({
//	djmc: "普通会员",
//  onoff:true,
//  czh:"0~4999",
//  myf:"99/笔",
//  pjbz:"+5成长值/条",
//  bz:"无",
//  
//});
//Dj.create({
//	djmc: "黄金会员",
//  onoff:true,
//  czh:"5000~9999",
//  myf:"89/笔",
//  pjbz:"+10成长值/条",
//  bz:"无",
//  
//});
//Dj.create({
//	djmc: "铂金会员",
//  onoff:true,
//  czh:"10000~14999",
//  myf:"69/笔",
//  pjbz:"+15成长值/条",
//  bz:"无",
//  
//});
//Dj.create({
//	djmc: "钻石会员",
//  onoff:true,
//  czh:"15000~",
//  myf:"99/笔",
//  pjbz:"+20成长值/条",
//  bz:"无",
//  
//});
//Dj.create({
//	djmc: "默认不启用",
//  onoff:false,
//  czh:"15000~",
//  myf:"99/笔",
//  pjbz:"+20成长值/条",
//  bz:"无",
//  
//});

router.get('/dj', (req, res, next) => {
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
     		Dj.remove({_id: Oall[ii]}, (err,data) => {
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
    
    
    case 'get':
      
        Dj
        .find({})
        .sort('-time')
        .exec((err, data) => {
          let arr = [];
          for (let o of data) {
            let obj = {
            	id: o._id,
			    djmc: o.djmc,
			    onoff: o.onoff,
	            czh: o.czh,
			    myf: o.myf,
			    pjbz: o.pjbz,
			    bz: o.bz
			    
            };
            arr.push(obj);
          }
          res.json(arr);
        });
      
      break;
    
    
    
    
    
    
    
    
    
    default:
      resData.code = -1;
      resData.msg = '参数错误';
      res.json(resData);
}

});
router.post('/dj',(req,res)=> {
    const json = {code: 3, msg: "错误"};
    const body = req.body;
    let act = body.act;
    console.log(body)
    switch (act) {
        case 'edit':
            let id=body.id;
            Dj.update({_id:id},body,(error,data)=>{
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