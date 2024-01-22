const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');
const {
    join, 
    login, 
    passwordReset, 
    passwordResetRequest
} = require('../controller/UserController');


// 회원가입 
router.use(express.json());
router.post('/join', join);

//로그인 
router.post('/login',login);

//비밀번호 초기화 요청
router.post('/reset', passwordResetRequest);

// 비밀번호 초기화
router.put('/reset', passwordReset);


module.exports = router;