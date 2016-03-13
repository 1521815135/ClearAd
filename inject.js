//alert('chrome inject test');
console.log('%c chrome inject success','font-color:red;');
var flag = ['#','.'];
function $(obj){
    var arr = obj.split(' ');
    for(var key in arr){
        if (key[0] == "#") {
            //return document.getElementById()
        }
    }
}

//清除电影天堂广告
(function (){
    var url = window.location.href;
    if (url.indexOf('http://www.dytt8.net/')>'-1') {
        if(url != 'http://www.dytt8.net/'){
            document.getElementById('cs_left_couplet').style.display = "none";
            document.getElementById('cs_right_couplet').style.display = "none";//
        }
        setTimeout(function() {
            document.getElementById('MZADX_6628').innerHTML = "";
        }, 3000);
        document.getElementById('MZADX_4721').innerHTML = "";
    }
})();

//清除http://k8yy.com/广告
(function (){
    document.getElementById('__QY_CP_LEFT_Div').style.display = "none";
    document.getElementById('__QY_CP_RIGHT_Div').style.display = "none";
})();