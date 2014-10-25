/*revised from changhailu @ http://www.changhai.org/*/
function getdate(e){
var t=new Date;
var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var daynum=0;
var daynumt=0;
year=t.getFullYear();
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
		monthDays[1] = 29;
for(i=0; i<12; i++){
	daynumt+=monthDays[i];
}
for(i=0; i<t.getMonth(); i++){
	daynum+=monthDays[i];
}
daynum+=t.getDate();
if(e=="en"){
dayName=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
monthName=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
document.write(dayName[t.getDay()]+'<br /><span class="day">'+t.getDate()+"</span><br />"+monthName[t.getMonth()]+", "+t.getFullYear()+"<br />")}
else{
dayName=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
monthName=new Array("一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月");
yearName=new Array("〇","一","二","三","四","五","六","七","八","九");
var n=t.getFullYear().toString();
var r=yearName[n.charAt(0)]+yearName[n.charAt(1)]+yearName[n.charAt(2)]+yearName[n.charAt(3)]+"年";
document.write('<div><div style="padding-bottom: 5px">'+dayName[t.getDay()]+'</div><span class="day">'+t.getDate()+"</span><br />"+r+monthName[t.getMonth()]+'</div><span class="daynumber"> page '+'<span style="color:red">'+daynum+"</span> of "+daynumt+"<br /> chapter "+t.getFullYear()+"<br /></span>")}}