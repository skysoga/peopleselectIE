
jQuery.peopleselect =function(x,y,z){ 
		$(x).click(function(){
			$id1 = $(x).closest("div").siblings().find('.modal_wrap .peo-select');
			$id2 = $(x).closest("div").siblings().find('.modal_wrap .right-list ul')
			$id3 = $(x).siblings(".part-peo_selected");   
			//判断right-list 中内容是否为空
			function ifnull(){
				var $sure = $id2.parents(".modal_wrap").siblings(".btn-grop").find('.sure'); 
				if($id2.find('li').length > 0){
					$sure.addClass('close-reveal-model');
				}
				else{
					$sure.removeClass('close-reveal-model');
				}
			}
			//选中框删除，人员列表显示函数
			function del_block(){
				var $a=$id2.find('li');
				$a.click(function(){
					var	$b=$(this).remove();
					var $class=$b.attr('class');
					$id1.find('.'+$class).css('display','block');
					ifnull();
				});
			}
			//添加所有成员
		$(document).on("click",".addCurall",function(e){
			e.preventDefault();
			var ul = $(this).closest('div').next();
			if(ul.hasClass('endCss')){
				var allLi = ul.find('li').clone();
				ul.find('li').css('display','none');
				$id2.prepend(allLi);
				ifnull();
				del_block();	
			}else{
				var allLi = ul.find('.endCss li').clone();
				ul.find('.endCss li').css('display','none');
				$id2.prepend(allLi);
				ifnull();
				del_block();
			}
		});
		
			//人员列表点击选中，选中框显示
			var cur_li = '#' + $id1.attr('id') + ' .endCss li'; 
			$(document).on("click",cur_li,function(e){
					e.preventDefault(); 
					var curr_li = $(this).clone(); 
					$id2.prepend(curr_li);
					$(this).css("display","none");
					var $a=$id2.find('li');
					del_block();
					ifnull();
			});
			//弹出框搜索下拉框选中效果
			var $slidedown=$('.suggestion2').find('ul li');
			$slidedown.each(function(i,e){
				$(this).click(function(){
					var $li_obj=$(this).clone();
					$li_obj.removeClass("curr");
					$id2.prepend($li_obj);
					$(y)[0].value='';
					ifnull();
					var $class=$li_obj.attr('class');
					$id1.find('.'+$class).css('display','none');
					$('.suggestion2').css('display','none');
					del_block();
				});
			});
			//页面搜索下拉框选中效果
			var $slidedown1=$('.suggestion').find('ul li');
			$slidedown1.each(function(i,e){
				$(this).click(function(){
					var $obj=$(this).clone();
					$obj.removeClass("curr");
					$id3.find('ul').prepend($obj);
					var $class1=$obj.attr('class');
					$id1.find('.'+$class1).css('display','none');
					$('.suggestion').css('display','none');
					$(z)[0].value = "";
					var $a=$id3.find('li');
					$a.click(function(){
						var	$b=$(this).remove();
						var $class=$b.attr('class');
						$id1.find('.'+$class).css('display','block');
						width();
					});
					width();
				});
			});
			//全部添加
			$('.add-all').click(function(e){
				e.preventDefault();
				e.stopPropagation();
				var $li2=$id1.find('.endCss li').clone();
				$id1.find('.endCss li').css("display","none");
				for(var i = $li2.length; i >= 0; i--){
					$id2.prepend($li2[i]);
				}
				ifnull();
				del_block();
			});
			//全部清除
			$('.clear-all').click(function(e){
				e.preventDefault();
				e.stopPropagation();
				var $remove=$id2.find('li').remove();
				var array = [];
				for(var i = 0;i <  $remove.length ; i++){
					array[i] = $remove[i].className;
				}
				for(var j = 0; j < array.length ; j++){
					$id1.find('.'+array[j]).css('display','block');
				}
				ifnull();
			});
            //提交功能--选中框right-list内容传送给part-peo_selected
			var sure=$(x).closest("div").siblings().find('.btn-grop .sure');   
			sure[0].onclick=function(){
				var $array =$id2.find('li');
				var $obj=$array.remove();
				for(var i = $obj.length; i >=0 ; i--){
					$id3.find('ul').prepend($obj[i]);
				}
				if($(this).hasClass("close-reveal-model")){
					//popup里面的
						$("#TB_overlayBG").css("display","none");
						$(".box-content ").css("display","none");
						$('body').attr("style"," ");
						$('html').removeClass('visible');
				}
				var $c=$id3.find('ul li');
				$c.click(function(){
					var $id1 = $(this).parents(".search").siblings(".box-content").find(".modal_wrap .peo-select"); 
					var	$b=$(this).remove();
					var $class=$b.attr('class');
					$id1.find('.'+$class).css('display','block');
					width();
				});
				width();
				ifnull();
			}
	//弹出框input聚焦时展开
	var input_list=$(y);
	for(var i= 0 ; i < input_list.length ; i++){
		input_list[i].onkeyup=function(){
			if(this.value.length > 0){
				$(this).siblings("div").css("display","block");
				
			}else{
				$(this).siblings("div").css("display","none");
			}
		}
	}
	//input聚焦时展开
	var input_list1=$(z);
	for(var i= 0 ; i < input_list1.length ; i++){
		input_list1[i].onkeyup=function(){
			if(this.value.length > 0){
				$(".suggestion").css("display","block");
				obj =$('.search-class');
				div_keydown(obj);
			}else{
				$(".suggestion").css("display","none");
			}
		}
	}
	//监听键盘事件
	function div_keydown(obj){
		var cur = $('.suggestion li')[0];
		$(cur).addClass("curr");
		var obj = obj[0];
		obj.onkeydown=function(e){
			var e = e||event;
			var ul = $(obj).next().children();
			var li = ul[0].children;
			var length = li.length;
			first = li[0];
			last = li[length-1];
			//li[0].classList.add('curr');
			if(e.keyCode == 40){
				var index = 0;
				for(var i = 0 ;i <length ;i++){
					if(~li[i].className.indexOf('curr')){
						index = i;
					}
				}
				if(index != (length-1)){
					$(cur).removeClass("curr");
            		$(cur).next().addClass('curr');
					$cur = $(cur).next();
					cur = $cur[0];
				}else{
					$(first).addClass('curr');
					$(last).removeClass('curr');
					$cur = $(first);
					cur = $cur[0];
				}
			}
			if(e.keyCode == 38){
				var index1 = 0;
				for(var i = 0 ;i <length ;i++){
					if(~li[i].className.indexOf('curr')){
						index1 = i;
					}
				}
				if(index1 != 0){
					$(cur).removeClass('curr');
					$(cur).prev().addClass('curr');
					$cur = $(cur).prev();
					cur = $cur;
				}else{
					$(first).removeClass('curr');
					$(last).addClass('curr');
					$cur = $(last);
					cur = $cur[0];
				}
			}
			if(e.keyCode == 13){
				/*var tar = document.querySelector('curr');*/
				var $a1 = $(cur).clone('.curr');
				$(cur).removeClass('curr');
				$a1.removeClass('curr');
				var a1 = $a1[0];
				var endtarget = document.getElementById(x3);
				var endul = endtarget.children[0];
				endul.appendChild(a1);
				$id1.find('.'+a1.className).css('display','none');
				$('.suggestion').css('display','none');
				$(x4)[0].value = "";
				cur=first;
				$(cur).addClass('curr');
				var $c=$id3.find('ul li');
				$c.click(function(){
					var	$b=$(this).remove();
					var $class=$b.attr('class');
					$id1.find('.'+$class).css('display','block');
					width();
				});
				width();
				return false;
			}
		};
	}
			//弹出框里的展开查看更多的功能收起
			$('.look-more').click(function(){
				$('.right-list').toggleClass('height-open');
				if(this.title == "展开"){
					this.innerHTML='收起<i class="slide-img"></i>';
					this.title="收起";
				}else{
					this.title="展开";
					this.innerHTML='展开<i class="more-img"></i>';
					
				}
			});
			
			
			 	
	});
	//显示隐藏函数  配置deploy
	document.onclick = function(e){
		var e = e || event;
		var target = e.target || e.srcElement;
		if($(target).hasClass("deploy")){
			var $ul = $(target).next();
			var style = $ul.css("display");
			if(style == 'none'){
				$ul.css('display','block');
			}else{
				$ul.css('display','none');
			}
		}
	}

	
	
	
};
//input宽度计算
function width(){
	$('.input-label').each(function(){
		var target = $(this)[0];
		var leftwidth = target.offsetLeft;
		var targetwidth = target.offsetWidth;
		var parentwidth = target.parentNode.offsetWidth;
		var a = parentwidth - leftwidth
		if(a > targetwidth){
			target.style.width = a -38 + "px"  ;
		}else{
			target.style.width = "100%"
		}	
	});
}
//ie6执行的代码
var ie6=!-[1,]&&!window.XMLHttpRequest;
if(ie6){
	$('.deploy').hover(function(){
		$(this).find('.addCurall').show();
		$(this).css("background-color","#b9e0ff");
	},function(){
		$(this).find('.addCurall').hide();
		$(this).css("background-color","#fff");
	});
}
$('.part-peo_selected').each(function(){
	var target = $(this).find('.input-label');
	var _input = target.find("input")[0];
	$(this).mouseover(function(){
		width();
	}).mouseout(function(){
		if(_input.value.length>0){
			width();
		}else{
			target[0].style.width="33px";
		}
	})
})



