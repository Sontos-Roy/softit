var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    if($(".ma5menu--left").hasClass("ma5menu--active") == true){
        $(".navbar").css(
            'background-color', 'white',
            'color', 'black'
            );

            $(".navbar-brand").css(
                'color', 'black'
            );
            $(".navbar-nav li a").css(
                'color', 'black'
            );
            $(".icons a").css(
                'color', 'black'
            );
            $(".bar1, .bar2").css(
                'color', 'black'
            );
    }else{
        $(".navbar").css(
            'background-color', 'white',
            'color', 'black'
            );
            $(".navbar-brand").css(
                'color', 'black'
            );
            $(".navbar-nav li a").css(
                'color', 'black'
            );
            $(".icons a").css(
                'color', 'black'
            );
            $(".bar1, .bar2").css(
                'background-color', 'black'
            );
    }
   } else if(st == 0) {
    if($(".ma5menu--left").hasClass("ma5menu--active")){
        $("#navbar").css(
            'background-color', 'white',
            'color', 'black'
            );
            $("#navbar .navbar-brand").css(
                'color', 'black'
                );
            $("#navbar .navbar-nav li a").css(
                    'color', 'black'
                    );
            $(".icons a").css(
                        'color', 'black'
            );
            $(".bar1, .bar2").css(
                'background-color', 'white'
            );
                    }else{

                        $("#navbar").css(
                            'background-color', 'transparent',
                            'color', 'white'
                            );

        $("#forwhitebg").css(
            'background-color', 'white',
            'color', 'black'
            );
                            $("#navbar .navbar-brand").css(
                                'color', 'white'
                            );
                            $("#forwhitebg .navbar-brand").css(
                                'color', 'black'
                            );
                            $("#forwhitebg .navbar-nav li a").css(
                                'color', 'black'
                            );
                            $("#navbar .navbar-nav li a").css(
                                'color', 'white'
                            );
                            $("#forwhitebg .icons a").css(
                                'color', 'black'
                            );
                            $("#navbar .icons a").css(
                                'color', 'white'
                            );
                            $("#forwhitebg .bar1,#forwhitebg .bar2").css(
                                'background-color', 'black'
                            );
                            $("#navbar .bar1,#navbar .bar2").css(
                                'background-color', 'white'
                            );
                    }
                }
                lastScrollTop = st;
});
function toggleSound() {
    var audioElem = document.getElementById('myVideo');
    if (audioElem.paused) {
       audioElem.className = "fa-circle-play";
       audioElem.play();
    } else {
       audioElem.className = "fa-circle-pause";
       audioElem.pause();
    }
 }

 $(document).ready(function () {
    ma5menu({
        menu: '.site-menu',
        activeClass: 'active',
        footer: '#ma5menu-tools',
        position: 'left',
        closeOnBodyClick: true
    });
});
$(document).ready(function(){
    $("#forwhitebg .bar1,#forwhitebg .bar2").css(
        'background-color', 'black'
    );
    $('.navbar').click(function(){
        $(".navbar").css(
            'background-color', 'white',
            'color', 'black'
            );
            $(".navbar-brand").css(
                'color', 'black'
                );
            $(".navbar-nav li a").css(
                    'color', 'black'
                    );
            $(".icons a").css(
                        'color', 'black'
            );
            $(".bar1").css(
                'background-color', 'white'
            );
            $(".bar2").css(
                'background-color', 'white'
            );
    });
});
$(document).ready(function() {
    $("#men-hover").hover(
        function() {
            $('.dp-1').stop(true).slideDown('medium');
        },
        function() {
            $('.dp-1').stop(true).slideUp('medium');
        }
    );
    $("#women-hover").hover(
        function() {
            $('.dp-2').stop(true).slideDown('medium');
        },
        function() {
            $('.dp-2').stop(true).slideUp('medium');
        }
    );
});
$(document).ready(function() {
    $(".search, .close-search").click(
        function() {
            $('.search-wiget').stop(true).slideToggle('medium');
        }
    );
    $("#filter").click(
        function() {
            $('.filter-wiget').stop(true).slideToggle('medium');
        }
    );
});



// $(document).ready(function(){
//     $('.navbar-toggler').click(function(){
//         $('#sidebar').toggleClass('show');
//         $('.navbar-toggler').toggleClass('collepsed');
//         $('.navbar-toggler').toggleClass('change');
//         $('.navbar').toggleClass('navbar-hover');
//     });
// });

$(document).ready(function(){
    $('#men-button').click(function(){
        $('.menbutton').animate(css)
    });
});

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 100) {
//         $('.filter-wiget').addClass('fixed');
//     } else {
//         $('.filter-wiget').removeClass('fixed');
//     }
// });

$(document).ready(function(){
    $('#cart-sidebar-btn').click(function(){
        $('.cart-sidebar').css(
            'right', '0'
        );
        $('.overlay-sidebar').fadeIn('slow');
    });
    $('#cart-sidebar-close, .overlay-sidebar').click(function(){
        $('.cart-sidebar').css(
            'right', '-100%'
        );
        $('.overlay-sidebar').fadeOut('slow');
    });
});
$(document).ready(function(){
    $('#address-manually').click(function(){
        $('#address-manually').css('display','none');
        $('.address-manually').slideDown('medium');
    });
});
// $(document).ready(function(){
//     $("#grid-4").click(function(){
//         $(".products .col-lg-3").remo
//     });
// });
