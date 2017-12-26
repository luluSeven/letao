
/**
 * Created by 七妹 on 2017/12/26.
 */


$(function(){

    //轮播图自动轮播
    mui('.mui-slider').slider({
        interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
    });

    //区域滑动
    mui('.mui-scroll-wrapper').scroll({
        crollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: false, //是否显示滚动条
        deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏,flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        bounce: true //是否启用回弹

    });
})
