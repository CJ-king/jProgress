# jProgress canvas 环形进度条

<h2>使用方法</h2>
```javascript
  var img = new Image();  
  img.src = 'img/a.png';
  var jProgress=new jProgress({
	            id:'canvas',//canvas标签ID
	            color:'#45ffcd',//进度条颜色
	            img:img,//图片
	            total:1110000,//进度总值
	            variation:618456,//进度当前值
	            numid:"num1",//数字标签ID
	            groundColor:"",//外环底色  默认值：#e8e8e8
	            lineWidth:"",//环宽度  默认值：5
	            time:"",//动画时间  默认值：500
	        });
  
```
<h2>DEMO</h2>
![image](https://github.com/CJ-king/jProgress/blob/master/img/demo.gif)
