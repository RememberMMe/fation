$(document).ready(function(){

    $(".slider-wrap").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    });

    $(".pick-box1").hover(function(){
        $(".bestpick .bestpick-img-box .summer-box > .summer-right > img").toggleClass("active")
    })
    $(".pick-box2").hover(function(){
        $(".bestpick .bestpick-img-box .shorts-box > .shorts-left > img").toggleClass("active")
    })
    $(".pick-box3").hover(function(){
        $(".bestpick .bestpick-img-box .dress-box > .dress-right > img").toggleClass("active")
    })
    $(".pick-box4").hover(function(){
        $(".bestpick .bestpick-img-box .blous-box > .blous-left > img").toggleClass("active")
    })


    // 상품리스트 스크롤매직
    var controller = new ScrollMagic.Controller();

    function view1(x){
        var tween = TweenMax.from('.more-clothing-box .clothing-list .clothing-view:nth-child('+x+') ', 1 , {
            y: "-30%" , 
            opacity: 0,
            delay: 0.1*x,
        });
    
        var scene = new ScrollMagic.Scene({
            triggerElement: ".clothing-list",
        triggerHook:  0.8 , //0~1 ,
        offset: "0%",
        })
      
        .setTween(tween) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
    }
    for(i=1; i < 5; i++){
        view1(i);
    }

    function view2(x){
        var tween = TweenMax.from('.more-clothing-box .clothing-list .clothing-view2:nth-child('+x+') ', 1 , {
            y: "-30%" , 
            opacity: 0,
            delay: 0.1*x,
        });
    
        var scene = new ScrollMagic.Scene({
            triggerElement: ".clothing-list",
        triggerHook:  0.6 , //0~1 ,
        offset: "0%",
        })
      
        .setTween(tween) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
    }
    for(i=5; i < 9; i++){
        view2(i);
    }

    
// 검색창 설정
    var text
    console.log(text == "");

    $(".menu-search").hover(function(){
        $(this).addClass("active");
    },function(){
        var text = $(".search-bar").val();
        if(text == ""){
            $(this).removeClass("active");  
        } 
    });






});
