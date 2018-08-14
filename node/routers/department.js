
const express = require('express');
const router = express.Router();
const Department = require('../model/department');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

router.get('/', (req, res) => {
    const json = {code:3,msg:"错误"};
    let obj=req.query;
    let act=obj.act;
    let id,content;
    const PAGE_SIZE=10;
    switch(act){
        case 'get':    //获取数据
            let page=Number(obj.page);
            if(!page){
                json.code=-1;
                json.msg='参数错误';
                res.json(json);
            }else{
                Department.find({})
                        .sort('-time')
                        .skip(PAGE_SIZE * (page-1))
                        .limit(PAGE_SIZE)
                        .exec((err, data) =>{
                              let arr=[];
                              for(let o of data){
                                  let obj2={
                                      id:o.id,
                                      checked:o.checked,
                                      bmmc:o.bmmc,
                                      bmms:o.bmms,
                                      bmfzr:o.bmfzr,
                                      sjbm:o.sjbm
                                  }
                                  arr.push(obj2);
                              }
                              res.json(arr);
                          })
            }
            break;
        case 'get_page_count':      //获取页码对应的数据
            Department.count({},(error,n)=>{
                json.code=0;
                json.msg='页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
                json.count=Math.ceil(n/PAGE_SIZE);
                res.json(json);
            });
            break;
        case 'del':         //点击删除
            id=req.query.id;
            Department.remove({_id:id},(error)=>{
                if(!error){
                    json.code=0;
                    json.msg='删除成功';
                    res.json(json);
                }else{
                    json.code=-1;
                    json.msg='删除失败';
                    res.json(json);
                }
            })
            break;
        case 'delAll':         //批量删除
            let all=req.query.all;
            let l=JSON.parse(all);
            console.log(l);
            for(let i=0;i<l.length;i++){
                Department.remove({_id:l[i]},(error,data)=>{
                    if(!error){
                        console.log(data);
                        json.code=0;
                        json.msg='删除成功';
                    }else{
                        json.code=-1;
                        json.msg='删除失败';
                    }
                })
            }
            break;
        case 'search':
            let name=req.query.name;
            console.log(name);
            let page2=Number(obj.page);
            Department.find({bmmc: name} )
                .sort('-time')
                .skip(PAGE_SIZE * (page2-1))
                .limit(PAGE_SIZE)
                .exec((err, data) =>{
                    let arr=[];
                    for(let o of data){
                        let obj2={
                            id:o.id,
                            checked:o.checked,
                            bmmc:o.bmmc,
                            bmms:o.bmms,
                            bmfzr:o.bmfzr,
                            sjbm:o.sjbm
                        }
                        arr.push(obj2);
                    }
                    res.json(arr);
                })
            break;
        default:
            break;

    }
});
router.post('/',(req,res)=> {
    const json={code: 3, msg: "错误"};
    const body=req.body;
    let act=body.act;
    let {checked,bmmc,bmms,bmfzr,sjbm} = body;
    switch (act) {
        /*case 'add':     //添加数据
            content=obj.content;
            if(!content){
                json.code=-1;
                json.msg='参数错误';
            }else{
                let cont=new Department({
                    bmmc:bmmc,
                    bmms:bmms,
                    bmfzr:bmfzr,
                    sjbm:sjbm,
                    edit:'编辑',
                    look:'查看'
                });
                cont.save((error,contInfo)=>{
                    json.code=0;
                    json.msg='提交成功！';
                    json.id=contInfo._id;
                    res.json(json);
                })
            }
            break;*/
        case 'add':
            if(!bmmc||!bmms||!bmfzr||!sjbm){
                res.json(json);
                return;
            };
            Department.findOne({bmmc},(error,data)=>{
                if(data){
                    json.code = 1;
                    json.msg = '用户名已占用';
                    res.json(json);
                }else{
                    Department.create({
                        checked:false,
                        bmmc,
                        bmms,
                        bmfzr,
                        sjbm
                    },(error,data)=>{
                        if(!error){
                            json.code = 0;
                            json.msg = '注册成功!';
                            json.data = {checked,bmmc,bmms,bmfzr,sjbm};
                            res.json(json);
                        }
                    });
                }
            });
            break;
    }
})
router.post('/bj',(req,res)=> {
    const json = {code: 3, msg: "错误"};
    const body = req.body;
    let act = body.act;
    switch (act) {
        case 'edit':
            let id=body.id;
            Department.update({_id:id},body,(error,data)=>{
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