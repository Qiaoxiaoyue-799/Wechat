/*
const  formatMsg = require('./fmtwxmsg.js');
function help(){
    return '你好这是一个微信测试号';
}

//处理用户发来的消息
//第一个参数是解析后的用户消息
//第二个参数是要返回的消息对象
//基本处理过程:根据用户发过来的消息判断消息类型并进行处理
function userMsg(wxmsg,retmsg){
    //关键词自动回复
    if(wxmsg.MsgType === 'text'){
        retmsg.msgtype = 'text';//设置要返回的消息类型为text
        switch(){
            case 'help':
            case '?':
            case '? ':
            case '帮助':
                retmsg.msg = help();
                return formatMsg(retmsg);
            case 'about':
                retmsg.msg = '我是这个测试号的开发者';
                return formatMsg(retmsg);
            default:
                //非关键词原样返回消息
                retmsg.msg = wxmsg.Content;
                return formatMsg(retmsg);
        }
    }
    //非文本类型的消息处理
    switch(wxmsg.MsgType){
        case 'image':

    }
}

exports.help = help;
exports.userMsg = userMsg;

exports.msgDispatch = function(){

}
*/