setInterval(function(){get()},5000);
setInterval(function(){leftTimer_main(exam_year_set,6,7,00,00,00,year_exam,month_exam,day_exam,00,00,00)},1000);

var internet_flag="网络已断开";
var internet_pass_time=0;
var fl=1;
var exam_year_set=2022;
var year_exam=2021
var month_exam=6
var day_exam=7
var exam_name='联考'
var exam_set=1;
var exam_day=0;
var exam_hour=0;
var exam_minutes=0;
var exam_seconds=0;
var exam_color_set=3;
var English_set=1;
var English_day_set=0;
var English_unit=0;
var English_name="Unit";
var English_line="__";
var kslf=0;
var author='©1908牟家正 2835632114@qq.com';
var edition='v2.1';

var $ = {
		get: function(url, js_obj, success, datatype) {
			var xhr = this.createXhr();
			xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						var result = xhr.responseText; 
						if (datatype == 'json') {
							result = JSON.parse(result);
						}
						success(result);
					}
				} 
			var str = this.params(js_obj); 
			url = url + '?' + str; 
			xhr.open('get', url);
			xhr.send(null);
		},
		createXhr: function() {
			var xmlhttp;
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
			}
			return xmlhttp;
		},
		params: function(obj) {
			var str = '';
			for (var key in obj) {
				str += key + '=' + obj[key] + '&';
			} 
			str = str.slice(0, -1);
			return str;
		}
	}

function get(){
	if(typeof(localStorage.author) == "undefined") {
	localStorage.setItem("author", "©1908牟家正 2835632114@qq.com");
	}
	if(typeof(localStorage.edition_set) == "undefined") {
		localStorage.setItem("edition_set", "0");
		}
	//localStorage.removeItem("author");
	$.get('https://gitee.com/aystmjz/aystmjz/raw/master/message/author', {
		}, 
		function(data) {
			if(data!==''){
				if(localStorage.author!==data){
					localStorage.author=data;
				}
			}
		},
		'text')
		author=localStorage.author;
	document.getElementById("author").innerHTML=author;
	$.get('https://gitee.com/aystmjz/aystmjz/raw/master/message/edition', {
		}, 
		function(data) {
			if(data!==''){
				if(localStorage.edition_set!==data){
					localStorage.edition_set=1;
				}
			}
		},
		'text')
	if(localStorage.edition_set==1){
		document.getElementById("edition").style.color = "red";
		edition="有新版本";
	}
    document.getElementById("edition").innerHTML=edition;
}


function leftTimer_main(year,month,day,hour,minute,second,year_exam,month_exam,day_exam,hour_exam,minute_exam,second_exam){ 
	var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); 
	var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); 
	var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); 
	var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
	var seconds = parseInt(leftTime / 1000 % 60, 10); 
	var leftTime_exam = (new Date(year_exam,month_exam-1,day_exam,hour_exam,minute_exam,second_exam)) - (new Date()); 
	var exam_day = parseInt(leftTime_exam / 1000 / 60 / 60 / 24 , 10); 
	var exam_hour = parseInt(leftTime_exam / 1000 / 60 / 60 % 24 , 10); 
	var exam_minutes = parseInt(leftTime_exam / 1000 / 60 % 60, 10);
	var exam_seconds = parseInt(leftTime_exam / 1000 % 60, 10); 
	if(exam_day<0||exam_hour<0||exam_minutes<0||exam_seconds<0){
		exam_set=0;
		}
function checkTime(i){
		if(i<10) {
			 i = "0" + i;} 
			 return i; 
	   } 
		days = checkTime(days); 
		hours = checkTime(hours); 
		minutes = checkTime(minutes); 
		seconds = checkTime(seconds); 
	var z=new Date();
	var local_time_year=z.getFullYear();
	var local_time_month=z.getMonth()+1;
	var local_time_day=z.getDate();
	var local_time_hour=z.getHours();
	var local_time_minutes=z.getMinutes();
	var local_time_seconds=z.getSeconds();
	var local_time_week=z.getDay();
		if(days<=100){
			document.getElementById("shengyudays").style.color = "red";
			document.getElementById("shengyushi").style.color = "red";
			document.getElementById("shengyufen").style.color = "red";
			document.getElementById("shengyumiao").style.color = "red";
		}
	if(exam_day>exam_color_set){document.getElementById("exam_day").style.color = "white";document.getElementById("exam_hour").style.color = "white";document.getElementById("exam_minutes").style.color = "white";
	document.getElementById("exam_seconds").style.color = "white";document.getElementById("exam_name").style.color = "white";document.getElementById("exam_date_ts").style.color = "white";}
	if(exam_day<=exam_color_set){document.getElementById("exam_day").style.color = "red";document.getElementById("exam_hour").style.color = "red";document.getElementById("exam_minutes").style.color = "red";
	document.getElementById("exam_seconds").style.color = "red";document.getElementById("exam_name").style.color = "red";document.getElementById("exam_date_ts").style.color = "red";}

	English_unit=554-days-English_day_set;
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
var exam_jl='距离';
var exam_hy='还有';
var exam_day_ts='天';
var exam_hour_ts='时';
var exam_minutes_ts='分';
var exam_seconds_ts='秒';
if(exam_set==0)
{
	English_set=0;
	exam_jl='';
	exam_hy=''; 
	exam_name='';
	exam_date_ts='';
	exam_day='';
	exam_hour='';
	exam_minutes='';
	exam_seconds='';
	exam_day_ts='';
	exam_hour_ts='';
	exam_minutes_ts='';
	exam_seconds_ts='';
	document.getElementById("exam_jl").style.opacity ="0";
	document.getElementById("exam_hy").style.opacity = "0";
	document.getElementById("exam_name").style.opacity = "0";
	document.getElementById("exam_date_ts").style.opacity = "0";
	document.getElementById("exam_day").style.opacity = "0";
	document.getElementById("exam_hour").style.opacity = "0";
	document.getElementById("exam_minutes").style.opacity = "0";
	document.getElementById("exam_seconds").style.opacity = "0";
	document.getElementById("exam_day_ts").style.opacity = "0";
	document.getElementById("exam_hour_ts").style.opacity = "0";
	document.getElementById("exam_minutes_ts").style.opacity = "0";
	document.getElementById("exam_seconds_ts").style.opacity = "0";
}
var English_ts='维词天天练';
if( English_set==0){
	English_ts='';
	English_unit='';
	English_name='';
	English_line='';
	document.getElementById("English_ts").style.opacity = "0";
	document.getElementById("English_unit").style.opacity = "0";
	document.getElementById("English_name").style.opacity = "0";
	document.getElementById("English_line").style.opacity = "0";
}
var style_set="_"
if(exam_set==0){
	style_set="__________________________________________________";
}
var style_set1=style_set
var style_set2=style_set
var style_set3=style_set
var style_set4=style_set
var style_set5=style_set
document.getElementById("style_set1").innerHTML=style_set1;
document.getElementById("style_set2").innerHTML=style_set2;
document.getElementById("style_set3").innerHTML=style_set3;
document.getElementById("style_set4").innerHTML=style_set4;
document.getElementById("style_set5").innerHTML=style_set5;
document.getElementById("exam_year_set").innerHTML=exam_year_set;
document.getElementById("shengyutian").innerHTML=days;
document.getElementById("shengyushi").innerHTML=hours;
document.getElementById("shengyufen").innerHTML=minutes;
document.getElementById("shengyumiao").innerHTML=seconds;
document.getElementById("dangqiannian").innerHTML=local_time_year;
document.getElementById("dangqianyue").innerHTML=local_time_month;
document.getElementById("dangqianri").innerHTML=local_time_day;
document.getElementById("dangqianshi").innerHTML=local_time_hour;
document.getElementById("dangqianfen").innerHTML=local_time_minutes;
document.getElementById("dangqianmiao").innerHTML=local_time_seconds;
document.getElementById("wangluo").innerHTML=internet_flag;
document.getElementById("exam_jl").innerHTML=exam_jl;
document.getElementById("exam_hy").innerHTML=exam_hy;
document.getElementById("exam_name").innerHTML=exam_name;
document.getElementById("exam_date_ts").innerHTML=day_exam;
document.getElementById("exam_day").innerHTML=exam_day;
document.getElementById("exam_hour").innerHTML=exam_hour;
document.getElementById("exam_minutes").innerHTML=exam_minutes;
document.getElementById("exam_seconds").innerHTML=exam_seconds;
document.getElementById("exam_day_ts").innerHTML=exam_day_ts;
document.getElementById("exam_hour_ts").innerHTML=exam_hour_ts;
document.getElementById("exam_minutes_ts").innerHTML=exam_minutes_ts;
document.getElementById("exam_seconds_ts").innerHTML=exam_seconds_ts;
document.getElementById("English_ts").innerHTML=English_ts;
document.getElementById("English_unit").innerHTML=English_unit;
document.getElementById("English_name").innerHTML=English_name;
document.getElementById("English_line").innerHTML=English_line;
}

