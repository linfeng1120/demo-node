const express = require('express')

var router = express.Router()
// 要引入 user的数据库架构完成的状态
const user = require('../sql/user')


router.get('/',function(req,res,next){
    console.log('login  /')
    res.render('login')
})


router.post('/in',function(req,res,next){
    console.log('我进入 login  in里面了')
    let obj = req.body
    console.log(req.body);
    
    user.findOne(obj, (err, data) => {
        console.log(data);
        if(err){
            console.log('err',err)
        }
        if(data) {
            console.log('登录成功')
            res.cookie('isLogin','ok')
            // req.session.isLogin ='ok'
            res.redirect('/pro')
        } else {
            console.log(11111111);
            res.redirect('/register')
        }
    })

})









module.exports = router;