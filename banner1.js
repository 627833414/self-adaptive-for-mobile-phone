/**
 * Created by mrs.mei on 2017/6/24.
 */
var timer=0;
$(function(){
    move();
    timer=setInterval("move()",3000);
    $(".banner ul li").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval("move()",3000);
    })
})
var i=-1;
function move(){
    var bannerA=$("#showlist ul li");
    i++;
    if(i>=3){
        i=0;
    }
    if(i<3) {
        if (i == 0) {
            $(bannerA).eq(i).fadeIn(100).siblings().fadeOut();
        }
        if (i == 1) {
            $(bannerA).eq(i).fadeIn(100).siblings().fadeOut();
        }

        if (i == 2) {
            $(bannerA).eq(i).fadeIn(100).siblings().fadeOut();
        }
    }
}
