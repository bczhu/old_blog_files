/*search form effect
jQuery(document).ready(function($) {
$("#search").click(function(){						 
		if ($("#search-form").filter(':hidden').length == 1)	
			$("#search-form").animate({left: "-150px", opacity: "toggle"}, 300);
		else
			$("#search-form").animate({left: "-170px", opacity: "toggle"}, 300);
		return false;
});
});
//ûŪ����������ַhttp://myfairland.net/about/
*/
//�ø����ķ���

function discontrol(itemid){

if(document.getElementById(itemid).style.display=="none"){
document.getElementById(itemid).style.display="";
}
else{
document.getElementById(itemid).style.display="none";
}
}