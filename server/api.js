 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 
 router.post('/dologin', function(req, res, next) {
     const username = req.body.username;
     const password = req.body.password;
     var sql = "SELECT UserID,MaChucVu,COUNT(username) as isCanLogin FROM `user` WHERE username = '"+username+"' AND password = '"+password+"'";
	res.locals.connection.query(sql, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
	});
});
router.post('/thongtinuser', function(req, res, next) {
    const userId = req.body.userId;
    var sql = "SELECT user.UserID,user.name, user.username, user.email, user.DiaChi, user.GioiTinh, CAST(user.NgaySinh AS DATE) as NgaySinh, user.SoDienThoai, user.TrangThai, chucvu.TenCV FROM user INNER JOIN chucvu ON user.MaChucVu=chucvu.MaCV WHERE user.UserID='"+userId+"'";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.get('/users', function(req, res, next) {
   res.locals.connection.query('SELECT * FROM `user`', function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
router.get('/danhsachusers', function(req, res, next) {
    res.locals.connection.query('SELECT `UserID`, `name`, `username`, `email`, `GioiTinh`, `NgaySinh`,`TrangThai` FROM `user` ', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
 router.get('/chucvu', function(req, res, next) {
    res.locals.connection.query('SELECT `MaCV`, `TenCV` FROM `chucvu`', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
    });
 });
router.post('/adduser', function(req, res, next) {
    var sql = "INSERT INTO `user`( `name`, `username`, `email`, `password`, `DiaChi`, `GioiTinh`, `NgaySinh`, `SoDienThoai`, `TrangThai`, `MaChucVu`) VALUES "+
    "('"+req.body.name+"','"+req.body.username+"','"+req.body.email+"','"+req.body.password+"','"+req.body.DiaChi+"','"+req.body.GioiTinh
    +"','"+req.body.NgaySinh+"','"+req.body.SoDienThoai+"','"+req.body.TrangThai+"','"+req.body.MaChucVu+"')";
   res.locals.connection.query(sql, function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify({"status": 200 ,"error": null, "response": results}));
   });
});
 module.exports = router; // for fix error Router.use() requires a middleware function but got a Object