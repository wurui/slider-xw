define([],function(){

  
  var Scroll={
  	timer:null,
  	
  	to:function(el,sl,fn){
  		var delta=el.scrollLeft-sl;
  		//console.log(delta)
  		if(delta){
  			el.scrollLeft-= delta>0?Math.ceil(delta/2):Math.floor(delta/2)
  		
  		}else{
  			this.stop();
  			return fn && fn();
  		} 
  		var _this=this;
  		this.timer=setTimeout(function(){
  			_this.to(el,sl,fn)
  		},60)
  	},
  	stop:function(){
  		if(this.timer){
  			clearTimeout(this.timer);
  			this.timer=null;
  		}
  	}
  };
  return {
    init:function($mod){
    	
    	this.initScroll($('.J_win',$mod),$('.J_index',$mod));
    	

    	
    },
    initScroll:function($win,$index){
    	var count=$win.attr('data-count')-0;
    	var lastScrollLeft=0;
    	var checkScroll=function(){
    		var win=$win[0];
    		var sw=win.scrollWidth,
    		cw=win.clientWidth,
    		sl=win.scrollLeft,
    		index=0;
    		
    		if(lastScrollLeft<sl){
    			index=Math.ceil(sl/cw);
    		}else{
    			index=Math.floor(sl/cw);
    		}
    		
    		Scroll.to(win,index * cw,function(){
    			//console.log('done')
    			lastScrollLeft=win.scrollLeft;
    			$index.attr('data-on',index+1)
    		})
    		

    	};
    	var AutoScroll={
    		stop:function(){
    			this.IV && clearInterval(this.IV)
    		},
    		goNext:function(){
    			var win=$win[0];
	    		var sw=win.scrollWidth,
	    		cw=win.clientWidth;
	    		
	    		if(win.scrollLeft==sw-cw){
	    			Scroll.to(win,0,function(){
		    			//console.log('done')
		    			lastScrollLeft=win.scrollLeft;
		    			$index.attr('data-on',1)
		    		})
	    		}else{
	    			win.scrollLeft+=1;
	    		}
    		},
    		start:function(){
    			var me=this;
    			this.IV=setInterval(me.goNext,3000)
    		}
    		
    	};
    	
    	var TO;
    	$win.on('touchstart',function(){
    		Scroll.stop();
    		AutoScroll.stop()
    	}).on('touchend',function(){
    		
    		AutoScroll.start()
    	}).on('scroll',function(){
    		//console.log('1');
    		if(!Scroll.timer){
    			if(TO){
	    			clearTimeout(TO)
	    		}
	    		TO=setTimeout(checkScroll,200)
    		}
    		
    	});
    	checkScroll();
    	AutoScroll.start()
    }

  }
})
