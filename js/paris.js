$(function () {
    // $('header > nav').mouseenter(function(){$('header').stop().animate({height: '40rem'}, 300)})
    // $('header > nav').mouseleave(function(){$('header').stop().animate({height: '10rem'},300)})


    // tabmenu에 p 클릭했을 때 할일
    $('.tabmenu p').click(function () {
        // 먼저 p 모두 on class 제거하고
        $('.tabmenu p').removeClass('on')

        // 내가 선택한 p(this) 안에있는 p에 on class가 추가
        $(this).addClass('on')

        // 해당하는 tab item 보이기
       let idx = $(this).index()
       $('.tabitem').hide()
       $('.tabitem').eq(idx).show()

    })
   $('.tabmenu p').eq(0).trigger('click')
//    창 열었을 때 강제로 첫번째 탭이 클릭되어있도록 
})