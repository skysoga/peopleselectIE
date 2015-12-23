// JavaScript Document
		$.ajax({
			url: Cfg.contextPath+"/party/interface/findOrgs/C59F19P19123C12002",
			dataType:"JSON",
			type : "GET",	
			success: function(data) {
				var grid_l=[];
				for(var i=0;i<data.length;i++){
					grid_l.push('<li class="li-css grid-0"><div class="deploy" orgCode='+data[i].orgCode+' onclick=findUser(this)><a class="addCurall right" onclick=findUser1(this)>添加所有成员</a><i class="turn-right"></i>'+data[i].orgName+'</div><ul class="grid-1 endCss member-grid"></ul></li>');
				}
				$(".grid-ul").html(grid_l);
			},
			error: function(error) {
				//alert(error);
			}
		});
		//添加所有成员预加载
		function findUser1(currPeople1){
			if($(currPeople1).closest("div").next().children().length <= 0){
				var orgCode=$(currPeople1).closest("div").attr("orgCode");
				$.ajax({
					url: Cfg.contextPath+"/party/interface/findUsers/"+orgCode,
					dataType:"JSON",
					type : "GET",	
					success: function(people) {
						var grid_21=[];
						for(var i = 0;i < people.length;i++){
							var photo=people[i].photo;
							if(photo==null){
								photo="images/1.png";
							}
							grid_21.push(' <li class="rd_'+ i +'" pid ="'+people[i].userId+'"><a href="javascript:;"><i>添加</i><small>×</small><img src="'+photo+'" alt=""/><span>'+ people[i].userName +'</span></a></li>');
						}
						$(currPeople1).closest("div").next().html(grid_21);
						var ul = $(currPeople1).closest('div').next();
						if(ul.hasClass('endCss')){
							var allLi = ul.find('li').clone();
							ul.find('li').css('display','none');
							$('#id2').prepend(allLi);
							ifnull();
							del_block();	
						}else{
							var allLi = ul.find('.endCss li').clone();
							ul.find('.endCss li').css('display','none');
							$('#id2').prepend(allLi);
							ifnull();
							del_block();
						}
					},
					error: function(error) {
						//alert(error);
					}
				});	
				var e = window.event || e;
				if(e.stopPropagation){
					e.stopPropagation();
				}else{
					e.cancelBubble = true;
				}	
			}else{
				var ul = $(currPeople1).closest('div').next();
				if(ul.hasClass('endCss')){
					var allLi = ul.find('li').clone();
					ul.find('li').css('display','none');
					$('#id2').prepend(allLi);
					ifnull()
					del_block();	
				}else{
					var allLi = ul.find('.endCss li').clone();
					ul.find('.endCss li').css('display','none');
					$('#id2').prepend(allLi);
					ifnull()
					del_block();
				}		
			}
		}
	 	//支部人员展开
	 	function findUser(currPeople){
			if($(currPeople).next().children().length <= 0){
				var orgCode=$(currPeople).attr("orgCode");
				$.ajax({
					url: Cfg.contextPath+"/party/interface/findUsers/"+orgCode,
					dataType:"JSON",
					type : "GET",	
					success: function(people) {
						var grid_2=[];
						for(var i = 0;i < people.length;i++){
							var photo=people[i].photo;
							if(photo==null){
								photo=Cfg.contextPath+"/tpl/def/002/images/user.png";
							}
							grid_2.push(' <li class="rd_'+i+'" pid="'+people[i].userId+'"><a href="javascript:;"><i>添加</i><small>×</small><img src="'+photo+'" alt=""/><span>'+ people[i].userName +'</span></a></li>');
						}
						$(currPeople).next().html(grid_2);
					},
					error: function(error) {
						//alert(error);
					}
				});
			}
	 	}
		//扩展
		$.ajax({
			url: "http://192.168.14.142/pmc/party/interface/findUsers/C59",
			dataType: "JSON" ,
			type: "GET" ,
			success: function(data){
				var array = [];
				for(var i = 0 ; i < data.length ; i++){
					
				}
				
			}
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	 	
	 	//判断right-list 中内容是否为空
		function ifnull(){
			if($('#id2').find('li').length > 0){
				$('.sure').addClass('close-reveal-modal');	
			}
			else{
				$('.sure').removeClass('close-reveal-modal');
			}
		}
		//选中框删除，人员列表显示函数
		function del_block(){
			var $a=$('#id2').find('li');
			$a.click(function(){
				var	$b=$(this).remove();
				var $class=$b.attr('class');
				$('#id1').find('.'+$class).css('display','block');
				ifnull();
			});
		}