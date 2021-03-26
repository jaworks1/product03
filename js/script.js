$(function(){
    // ドロワー
    $('.menu').on('click',function(){
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
    });

    $('.gnav__menu__item > a[href*="#"]').click(function () {
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
    });

    var pagetop = $('#js-scroll-fadein');
    //スクロールしたら
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.addClass("is-fadein");
        } else {
          pagetop.removeClass("is-fadein");
        }
    });
    pagetop.on("click",function () {
        $('body,html').animate({ //animate関数を参照
            scrollTop: 0
        }, 1000); //0.5秒かけてトップへ移動
        return false; //aタグ遷移無効化用に記述。
    });

        // smooth-scroll.js
        var scroll = new SmoothScroll('a[href*="#"]', {
            header: '#header',
            speed: 400,
        });
});

!(function () {
    const viewport = document.querySelector('meta[name="viewport"]');
    function switchViewport() {
      const value =
        window.outerWidth > 360
          ? 'width=device-width,initial-scale=1'
          : 'width=360';
      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
  })();