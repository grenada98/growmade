$(document).ready(function(){

    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
        
    testWebP(function (support) {
        
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
    });

    $('.list-of-devices').slick({
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        dots: true,
        responsive:[
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    })
   

    //to top
        let toTOP = document.querySelector('.to-top')
        function to_TOP() {
            if (window.pageYOffset > 100) {
              toTOP.style.opacity = '1'
            } else { toTOP.style.opacity = '0' }
          }
        window.onscroll = to_TOP
        // появление/затухание кнопки #back-top
        $(function (){
    
            // при клике на ссылку плавно поднимаемся вверх
            $(".to-top").click(function (){
                $("body,html").animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
        $(document).click((e) => {
            const {target} = e;
            if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
              e.preventDefault();
            }
          });




    //slick-sliders
    $('.item-menu-img-ul').slick({
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 4,
        vertical: true,
        focusOnSelect: true,
        asNavFor: ".slider-2",
        responsive:[
            {
                breakpoint: 360,
                settings: {
                    vertical: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1217,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1055,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    $('.slider-2').slick({
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: ".item-menu-img-ul"
    });

    $('.ul-list-of-product').slick({
        arrows: true,
        slidesToShow: 5,
        responsive:[
            {
                breakpoint: 450,
                settings:{
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 360,
                settings:{
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1618,
                settings: {
                    slidesToShow: 4,
                    arrows: true
                }
            },
            {
                breakpoint: 1217,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 885,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    })

})