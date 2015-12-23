# peopleselectIE
IE人员组件
#模态窗口
```
这是一款改造过的人员组件+模态窗口（也是兼容到IE6的），兼容到IE低版本；一个页面可以多出使用但需要配置了；接下来就是介绍使用方法了，注意了！ //注释：这里面有些功能禁掉了
```
#####参考demo地址：[http://192.168.14.97:8080/acc/plugin/peopleSelect/index.html](http://192.168.14.97:8080/acc/plugin/peopleSelect/index.html)
##样例
####1、使用步骤
####（1）导入样式文件
```
//模态窗口
<link href="style/popup.css" rel="stylesheet" type="text/css" />
//人员组件
<link href="style/peopleselect.css" rel="stylesheet" type="text/css"  />
```
####（2）导入JS文件,people.js为接口插件
```
<script src="javascript/jquery-1.9.1.min.js"  type="text/javascript"></script>
//模态窗口
<script src="javascript/reveal-model.js"  type="text/javascript"></script>
//人员接口
<script src="javascript/people.js"  type="text/javascript"></script>
//人员选择插件
<script src="javascript/peopleselect.js"  type="text/javascript"></script>
```
####（3）页面使用代码
```
It's so long ,so you can see the demo,thanks!
```
####（4）方法和API
#####1、方法
```
页面可以多处使用
<script type="text/javascript">
    $.peopleselect("#peopleselect","#search1","#search2") //参数入口｛模态窗口入口a标签,页面input输入框（这里占时功能禁用），弹出框input}  
    $.peopleselect("#peopleselect1","#search3","#search4")
</script>
```
#####2、API
```
无
```
#参数说明：
```
#peopleselect :组件路口，也是模态窗口入口
#search1 : 页面input的ID（功能无）
#search2 : 弹出框input的ID
```
#更新日志
```
2015/12/15  更新页面搜索框宽度计算问题；
```
