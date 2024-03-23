$("header").on("mousewheel",function(e){
    if(e.originalEvent.wheelDelta /120 < 0) {
        $("header").slideUp(1000);
    }

})
$(".me").on("mousewheel",function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
        $("header").slideDown(1000);
    }

})
$(".m").on("mousewheel",function(e){
    if(e.originalEvent.wheelDelta /120 < 0) {
        $(".me").slideUp(1000);
    }

})
$(".hello").on("mousewheel",function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
        $(".me").slideDown(1000);
    }

})
