//找到当前最大可用ID，FindID(data)就算可以用的那个值
function FindID(data){
	var arr = [];
	var max = -Infinity;
	data.forEach(function(e){
		if(e.id>max){
			max=e.id
		}
	})
	return max;
}
//排序的函数

//			arr.sort(function(a,b){
//				//从小到大
//				//return a-b;
//				//从大到小
//				//return b-a;
//				//随机
//				return Math.random()-0.5
//			})
function Sort(data,val1,val2){//val1 是排序依据       price年龄  id编号       2 是规则     1 从低到高 2从高到低
	data.sort(function(a,b){
		if(val1 == 'price'){
			if(val2 ==1){
				return a.price-b.price;
			}else{
				return b.price-a.price;
			}
		}else{
			if(val2 ==1){
				return a.id-b.id;
			}else{
				return b.id-a.id;
			}
		}
	})
}
//console.log(FindID(data))

//判断全选的函数
function checkedAll(){
	var m = 0 ;
	for(var i=0;i<$('tbody').find($('input[type="checkbox"]')).length;i++){
		if($('tbody').find($('input[type="checkbox"]:eq('+(i+1)+')')).prop('checked') == true){
			m++;
		}
	}
	if(m==$('tbody').find($('input[type="checkbox"]')).length){
		$('thead').find($('input[type="checkbox"]')).prop('checked',true)
	}else{
		$('thead').find($('input[type="checkbox"]')).prop('checked',false)
	}
	
}
