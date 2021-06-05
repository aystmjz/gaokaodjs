setInterval(function(){daojishi()},1000);//刷新
var internet_flag="网络已断开";
var internet_pass_time=0;
var fl=1;
var exam_name='联考'
var exam_date='24'
var exam_day=0;
var exam_hour=0;
var exam_minutes=0;
var exam_seconds=0;
var exam_day_set=560;
var exam_color_set=3;
var English_day_set=0;
var English_unit=0;
var English_name="Unit";
var English_line="__";
var kslf=0;
function daojishi(){
	
	var w=word(); 
	var z=new Date();
	var local_time_year=z.getFullYear();//年
	var local_time_month=z.getMonth()+1;//月
	var local_time_day=z.getDate();//日
	var local_time_hour=z.getHours();//时
	var local_time_minutes=z.getMinutes();//分
	var local_time_seconds=z.getSeconds();//秒
	var local_time_week=z.getDay();//星期
	var gaokaori=31+28+31+30+31+7;//高考在6月7日
	var passed=hpassed();//一年过了多少天
	var shi=hshi();//剩余时
	var fen=hfen();//剩余分
	var miao=hmiao();//剩余秒
	var gaokao=hgaokao();
	var tian=htian();//剩余天
	var g=gaokaonian();//判断高考
	function hpassed(){
		if (local_time_year%4==0){
			if (local_time_month==1){passed=local_time_day}
			else if (local_time_month==2){passed=31+local_time_day}
			else if (local_time_month==3){passed=59+local_time_day+1}
			else if (local_time_month==4){passed=90+local_time_day+1}
			else if (local_time_month==5){passed=120+local_time_day+1}
			else if (local_time_month==6){passed=151+local_time_day+1}
			else if (local_time_month==7){passed=181+local_time_day+1}
			else if (local_time_month==8){passed=212+local_time_day+1}
			else if (local_time_month==9){passed=243+local_time_day+1}
			else if (local_time_month==10){passed=273+local_time_day+1}
			else if (local_time_month==11){passed=304+local_time_day+1}
			else if (local_time_month==12){passed=334+local_time_day+1}
		}
		else {
			if (local_time_month==1){passed=local_time_day}
			else if (local_time_month==2){passed=31+local_time_day}
			else if (local_time_month==3){passed=59+local_time_day}
			else if (local_time_month==4){passed=90+local_time_day}
			else if (local_time_month==5){passed=120+local_time_day}
			else if (local_time_month==6){passed=151+local_time_day}
			else if (local_time_month==7){passed=181+local_time_day}
			else if (local_time_month==8){passed=212+local_time_day}
			else if (local_time_month==9){passed=243+local_time_day}
			else if (local_time_month==10){passed=273+local_time_day}
			else if (local_time_month==11){passed=304+local_time_day}
			else if (local_time_month==12){passed=334+local_time_day}
		}
		return passed;
	}
	function hgaokao(){
		if ((local_time_year+1)%4 ==0&&passed>=gaokaori){gaokao=gaokaori+1}
		else if (local_time_year%4==0&&passed<=gaokaori+1){gaokao=gaokaori+1}
		else {gaokao=gaokaori}
		return gaokao;
	}
	function htian(){
		if (local_time_year%4==0&&passed>=gaokao){tian=366-passed+gaokaori-1}
		else if (local_time_year%4==0&&passed<gaokao){tian=gaokao-passed-1}
		else if ((local_time_year+1)%4==0&&passed>=gaokaori){tian=365-passed+gaokao-1}
		else if (local_time_year%4!=0&&passed<gaokaori){tian=gaokaori-passed -1}
		else {tian=365-passed+gaokaori-1}
		if(local_time_year==2020){tian+=365}
		if((local_time_year==2021&&local_time_month==6&&local_time_day<7)||(local_time_year==2021&&local_time_month<6)){tian+=365}
		if((local_time_year==2022&&local_time_month==6&&local_time_day>=7)||(local_time_year==2022&&local_time_month>6)||(local_time_year>2022)){tian=0}
		if(tian<=100){
			document.getElementById("shengyutian").style.color = "red";
			document.getElementById("shengyushi").style.color = "red";
			document.getElementById("shengyufen").style.color = "red";
			document.getElementById("shengyumiao").style.color = "red";
		}
		return tian;
	}
	tian=checktian(tian);
	function checktian(i){
		if (i<100&&i>9){i="0"+i}
		if (i<10){i="00"+i}
		return i;
	}
	function hshi(){
		shi=24-1-local_time_hour;
		if((local_time_year==2022&&local_time_month==6&&local_time_day>=7)||(local_time_year==2022&&local_time_month>6)||(local_time_year>2022)){shi=0}
		return shi;
	}
	function hfen(){
		fen=60-1-local_time_minutes;
		if((local_time_year==2022&&local_time_month==6&&local_time_day>=7)||(local_time_year==2022&&local_time_month>6)||(local_time_year>2022)){fen=0}
		return fen;
	}
	function hmiao(){
		miao=60-1-local_time_seconds;
		if((local_time_year==2022&&local_time_month==6&&local_time_day>=7)||(local_time_year==2022&&local_time_month>6)||(local_time_year>2022)){miao=0}
		return miao;
	}
	shi=check(shi);
	fen=check(fen);
	miao=check(miao);
	local_time_month=check(local_time_month);
	local_time_day=check(local_time_day);
	local_time_hour=check(local_time_hour);
	local_time_minutes=check(local_time_minutes);
	local_time_seconds=check(local_time_seconds);
	function check(i){
		if (i<10){i="0"+i}
		return i;
	}
	function gaokaonian(){
		if(passed<=gaokaori){
			g=local_time_year
		}
		else{
			g=local_time_year+1
		}
		g=2022
		return g;
	}
	function word()
	{
		//if() return 
	}

	var exam_flag=0;
	exam_minutes=fen;
	exam_seconds=miao;
	exam_hour=shi;
	exam_day=tian-exam_day_set;
	if(exam_day<=-1){exam_minutes=0;exam_seconds=0;exam_hour=0};
	if(kslf==1||exam_day<-1){exam_day=99;exam_hour=99;exam_minutes=99;exam_seconds=99;exam_flag=1;exam_name='___';exam_date=' '}
	if(exam_day<=0)exam_day=0;
	if(exam_day>exam_color_set||exam_flag==1){document.getElementById("exam_day").style.color = "white";document.getElementById("exam_hour").style.color = "white";document.getElementById("exam_minutes").style.color = "white";
	document.getElementById("exam_seconds").style.color = "white";document.getElementById("exam_name").style.color = "white";document.getElementById("exam_date").style.color = "white";}
	if(exam_day<=exam_color_set){document.getElementById("exam_day").style.color = "red";document.getElementById("exam_hour").style.color = "red";document.getElementById("exam_minutes").style.color = "red";
	document.getElementById("exam_seconds").style.color = "red";document.getElementById("exam_name").style.color = "red";document.getElementById("exam_date").style.color = "red";}
	
	English_unit=554-tian-English_day_set;
	if(local_time_week==1||local_time_week==6){
		document.getElementById("English_unit").style.color = "red";
		document.getElementById("English_name").style.color = "red";
	}
	else{
		document.getElementById("English_unit").style.color = "white";
		document.getElementById("English_name").style.color = "white";
	}



var ctime=0;
ctime=local_time_hour*3600+local_time_minutes*60+local_time_seconds*1;
var cctime=0;
var x;
var ss=0;
var ff=0;
var mm=0;
function onLine(callback){
    var img = new Image();
    img.src = 'https://www.baidu.com/favicon.ico?_t=' + Date.now();
    img.onload=function(){
        if (callback) callback(true)        
    };
    img.onerror=function(){
        if (callback) callback(false)
    };
}	

function getValue()
{
$.getJSON('http://localhost/test.txt',
function(data){
alert(data);
});
}


onLine(function(flag){
if(flag){
	if(fl==1){internet_pass_time=local_time_hour*3600+local_time_minutes*60+local_time_seconds*1}fl=0;cctime=ctime-internet_pass_time;ss=Math.floor(cctime/3600);x=cctime%3600;ff=Math.floor(x/60);x=x%60;mm=x;internet_flag='网络已连接'+ss+'h'+ff+'min'+mm+'s'/*+internet_pass_time+'h'+ctime+'local_time_day'+cctime+'cc'+local_time_hour+'local_time_hour'+local_time_minutes+'local_time_minutes'+local_time_seconds+'local_time_seconds'*/;if(ss>=24||ff>=60||mm>=60||ss<0||ff<0||mm<0){internet_flag='错误'}
	if(mm<=9){
		English_line="_____";
	}
	else
	English_line="__";
}else{
	internet_flag='网络未连接';fl=1;
	English_line='_______________________________';
   }
})
	



/*
 
var url="http://www.163.com/index.html?user=xie&pass=123456&age=30&sex=man&interest=看书|游戏";
        
function urlToObject(url) {
	//url.split("?")[1] 也可以是
	var arr=url.split("?").pop().split("&");
	//分割开来 user=xie&pass=123456&age=30&sex=man&interest=看书|游戏"
   var obj={};                           
   //arr0 - arr4 ~~~user=xie pass=123456 age=30 sex=man interest=看书|游戏"
   arr.forEach(function (t) {           //遍历我们的这个数组
		var arr1=t.split("=");          //user xie......
		if(arr1[1].indexOf("|")>-1){    //数组对象的 塞选条件"|"
			obj[arr1[0]]=arr1[1].split("|");
			//arr1[0] interest , arr1[1] 看书|游戏
			console.log(obj[arr1[0]]);
			obj[arr1[0]]=obj[arr1[0]].map(function (t2) {
				return getNum(t2);
			})
		}else{
			obj[arr1[0]]=getNum(arr1[1]);
		}

   });
	console.log(obj);
}

function getNum(str) {  //判断如果值为数值，将字符串转化为数值
	if(isNaN(Number(str))) return str;
	return Number(str);
}

urlToObject(url);




*/




$( "button" ).click( function (){
    $( "div" ).load( 'https://github.com/aystmjz/gaokaodjs/blob/main/news #container' );
});






	document.getElementById("div").innerHTML=div;
	document.getElementById("shengyutian").innerHTML=tian;
	document.getElementById("shengyushi").innerHTML=shi;
	document.getElementById("shengyufen").innerHTML=fen;
	document.getElementById("shengyumiao").innerHTML=miao;
	document.getElementById("dangqiannian").innerHTML=local_time_year;
	document.getElementById("dangqianyue").innerHTML=local_time_month;
	document.getElementById("dangqianri").innerHTML=local_time_day;
	document.getElementById("dangqianshi").innerHTML=local_time_hour;
	document.getElementById("dangqianfen").innerHTML=local_time_minutes;
	document.getElementById("dangqianmiao").innerHTML=local_time_seconds;
	document.getElementById("gaokaonian").innerHTML=g;
	document.getElementById("wangluo").innerHTML=internet_flag;
	document.getElementById("exam_name").innerHTML=exam_name;
	document.getElementById("exam_date").innerHTML=exam_date;
	document.getElementById("exam_day").innerHTML=exam_day;
	document.getElementById("exam_hour").innerHTML=exam_hour;
	document.getElementById("exam_minutes").innerHTML=exam_minutes;
	document.getElementById("exam_seconds").innerHTML=exam_seconds;
	document.getElementById("English_unit").innerHTML=English_unit;
	document.getElementById("English_name").innerHTML=English_name;
	document.getElementById("English_line").innerHTML=English_line;
}