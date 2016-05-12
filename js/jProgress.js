/**
 * jProgress.js v1
 * Date: 2016-05-10
 * Author: jinchangjiang <1003219989@qq.com>
 */
(function(window, undefined) {
    function jProgress(option){
        this._o=document.getElementById(option.id);
        this._num=document.getElementById(option.numid);
        this.img=option.img;
        this._o.width=this._o.offsetWidth;
        this._o.height=this._o.offsetHeight;
        this._W = this._o.offsetWidth;
        this._H = this._o.offsetHeight;
        this.ctx=this._o.getContext("2d");
        this.groundColor=option.groundColor?option.groundColor:"#e8e8e8";//底色
        this.lineWidth=option.lineWidth?option.lineWidth:5;//边框宽度
        this.color=option.color;//进度条颜色
        this._r=this._W/2-10;//半径
        //动画配置
        this.b = 0; //初始值
        this.c = option.variation; //变化量
        this.d = 100; //持续时间
        this.t = 0;//当前时间
        this.total=option.total;
        this.time=option.time?option.time:500;//动画时间
        this.timer=null;
        this.init();
    }
    jProgress.prototype={
        init:function(){
            var count=Math.ceil(this.tween.easeInOut(this.t, this.b, this.c, this.d));
            var per=count/this.total*2;
            console.log(count);
            this._num.innerHTML=count;
            this.draw(per-0.5);
            this.t++;
            var _this=this;
            var st = function()
            {
                _this.init();
            }
            this.timer = setTimeout(st, this.time/100);
            if(this.t >= this.d) {
                clearTimeout(this.timer);
            }
        },
        draw:function(progress){
            this.ctx.clearRect(0,0,this._W,this._H);
            this.ctx.beginPath();
            this.ctx.strokeStyle=this.groundColor;
            this.ctx.lineWidth=this.lineWidth;
            this.ctx.arc(this._W/2,this._H/2,this._r,0,Math.PI*2,false);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.strokeStyle =this.color;
            this.ctx.lineWidth=this.lineWidth;
            this.ctx.arc(this._W/2,this._H/2,this._r,-0.5*Math.PI,progress*Math.PI,false);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this._W*0.3,this._H*0.3,this._W*0.4,this._W*0.4);
            this.ctx.stroke();
            this.ctx.drawImage(this.img, this._W*0.3-1,this._H*0.3-1, this._W*0.4+2,this._W*0.4+2);
        },
        tween:{
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
                return c / 2*((t -= 2) * t * t + 2) + b;
            }
        }
    }
    window.jProgress=window.jProgress||jProgress;
 })(window);
