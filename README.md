# aystmjz/高考倒计时动态壁纸v3.0

## 介绍
##### 本项目是基于HTML网页开发的壁纸，并使用Wallpaper Engine动态壁纸软件显示

## 壁纸组成
##### 壁纸由style.css，timer.js，time.html，和背景图片文件组成，另有system find.vbs程序保障Wallpaper Engine软件的运行

## 使用说明
### 1.注意事项

##### 电脑分辨率须为1920*1080
##### 更新请看下面用资源管理器打开项目文件的说明，并打开项目网站快捷方式下载更新

### 2.timer.js注释（第一次使用请按情况更改）

```
//重要设置
var exam_year_set=2022;//高考年份
var year_exam=2021//考试年份
//次要设置
var exam_set=1;//考试倒计时开关
var exam_color_set=3;//醒目提醒设置（考试倒计时3天内字体变为红色）
var Exam_color_set=100;//醒目提醒设置（高考倒计时100天内字体变为红色）
var exam_flash_set=1;//醒目闪烁开关（考试倒计时醒目提醒的附加功能，闪5次左右）
var Exam_flash_set=1;//醒目闪烁开关（高考倒计时醒目提醒的附加功能，闪5次左右）
var month_exam=6//考试月份初始化
var day_exam=7//考试日期初始化
var English_set=0;//维词天天练开关（我们要写天天练就随便加了一个，更多设置看下面注释，200排左右，这个功能自行探索）
var English_ts='维词天天练';//提醒名称
var English_day_set=0;//维词天天练微调参数
var English_name="Unit";//维词天天练提示
//其他设置
setInterval(function(){leftTimer_main(exam_year_set,6,7,00（这里可以改成09，高考在9点开始嘛）,00,00,year_exam,month_exam,day_exam,00（这里也可）,00,00)},1000);
English_unit=554-days-English_day_set;//days前加号为倒计时，为减号为正计时，数据看情况设置
```
### 3.设置背景

#### 1. 参数设置
##### time.html文件注释
```
var timeInterval = 60*5*1000;//背景切换时间（ms）
var max=32;//图片总数
```
#### 2.增加图片
##### 注意！图片尺寸一定要1920*1080尺寸
##### 更改数组和photos中对应文件名的图片即可
```
arr[28] = "photos/29.jpg";
arr[29] = "photos/30.jpg";
arr[30] = "photos/31.jpg";
arr[31] = "photos/32.jpg";
```

### 4.壁纸快捷设置功能
##### 点击右下角的设置
![输入图片说明](https://images.gitee.com/uploads/images/2021/0609/104707_bcce17c7_9232153.jpeg "Snipaste_2021-06-09_10-46-44.jpg")

##### 在弹出的窗口输入数据即可
![输入图片说明](https://images.gitee.com/uploads/images/2021/0609/104925_6930dcce_9232153.jpeg "Snipaste_2021-06-09_10-47-40.jpg")

### 5.有能力的同学可自行修改style.css，timer.js，time.html文件中的其他内容

##### 方法如下：

##### 右键壁纸，在资源管理器中打开，找到要更改的文件
![输入图片说明](https://images.gitee.com/uploads/images/2021/0609/105432_37fc77ef_9232153.jpeg "Snipaste_2021-06-09_10-53-19.jpg")

##### 右键编辑即可
![输入图片说明](https://images.gitee.com/uploads/images/2021/0609/105700_76a44cd3_9232153.jpeg "Snipaste_2021-06-09_10-56-42.jpg")

### 6.system find.vbs程序使用教程
##### 说明：如果电脑经常死机或想要确保动态壁纸稳定运行，可使用本程序

#### 1.把system find.vbs复制到桌面

#### 2.打开安装.vbs程序即可

#### 3.若想要卸载，请删除C:\Windows\下的system find.vbs文件

## 安装教程

##### （1.下载Wallpaper Engine动态壁纸软件[下载链接（中文版）](http://http://zj.ddooo.com/wallpaper_184727.rar)[下载链接（英文版）](http://http://soft.tfrkvmk.cn:6686/wallpaperengine_66868.zip)（解压完成后打开wallpaper32.exe或wallpaper64.exe均可）

##### （2.下载动态壁纸文件[下载链接](https://wwa.lanzoui.com/i1XYbpz9xpc)

##### （3.解压文件并移动到合适的位置

##### （3.把动态壁纸文件夹拖入Wallpaper Engine主界面内，或点击Wallpaper Engine主界面内`从文件打开`选项，选择time.html打开

##### （4.在`设置`——`常规`——`杂项`中设置开机启动
![输入图片说明](https://images.gitee.com/uploads/images/2021/0609/111052_bda0d4ef_9232153.jpeg "Snipaste_2021-06-09_11-09-03.jpg")


## 后记


 **做这个动态壁纸的想法是在高二开学的时候产生的，那时候壁纸也很简陋，功能不多，写代码调试也花了我很大的精力，但看着屏幕上的倒计时从600多天一直到现在的300多天，那么多努力也就值了，希望这个壁纸也能为大家带来一点帮助吧** 



©1908牟家正 2835632114@qq.com 
