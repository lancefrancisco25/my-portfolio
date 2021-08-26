$(window).on('scroll', function(e){
    var s = $(window).scrollTop()
    nameTop(s)
    scrollName(s)
    //console.log(s)
})


var scrollRun = true;
function nameTop(e){
    var startScroll = 200, endScroll = 657, endValue = 62 * 5;
    var formula = (e - startScroll)/ ((endScroll - startScroll)/(endValue))
    if(formula < 0){formula = 0}
    if(formula < endValue){
    $('.scrollUpProf').css('transform', `translateY(-${formula}px)`)
    }else{
        $('.scrollUpProf').css('transform', `translateY(-${endValue}px)`)
    }
}


function scrollName(e){
    var startScroll = 990, endScroll = 1500, endValue = 0;

    var formula = ((e - startScroll) / (endScroll - startScroll) * 100) - 100
    if(formula < endValue && formula > -100){
        $('#emphasish1').css('transform', `translateX(${formula }%)`)
    }else{
            //console.log(`translateX(${scrollEase / 100}) }%)`)
            $('#emphasish1').css('transform', `translateX(${(e - endScroll) / (endScroll / 50)}%)`)
    }
}

$.fn.scrollEnd = function (event, callback, timeout) {
    var self = $(this), delay = timeout || 16;

    self.each(function () { 
        var $t = $(this);
        $t.on(event, function(){
            if ($t.data(event+'-timeout')) {
                clearTimeout($t.data(event+'-timeout'));
            }
            $t.data(event + '-timeout', setTimeout(function () { callback.apply($t); },delay));
        })
    });
    return this;
};