//=====================================================
// aos
//=====================================================

AOS.init({
    easing: 'easeInSine',
});

//=====================================================
// pagetop.js
//=====================================================

$(function () {

    // 「ページトップへ」の要素を隠す
    $('#pagetop').hide();

    // スクロールした場合
    $(window).scroll(function () {
        // スクロール位置が100を超えた場合
        if ($(this).scrollTop() > 100) {
            // 「ページトップへ」をフェードイン
            $('#pagetop').fadeIn();
        }
        // スクロール位置が100以下の場合
        else {
            // 「ページトップへ」をフェードアウト
            $('#pagetop').fadeOut();
        }
    });

    // 「ページトップへ」をクリックした場合
    $('#pagetop').click(function () {
        // ページトップにスクロール
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});

//=====================================================
// tel.js
//=====================================================

$(function () {
    if (!isPhone()) {
        return;
    }

    $('span[data-action=call]').each(function () {
        var $ele = $(this);
        var telorg = $(this).text();
        if (telorg == "") {
            var telorg = $(this).children('img').attr('alt');
        }
        var telfix = telorg.replace(/[^0-9]/g, '');
        $ele.wrap('<a class="ddd" href="tel:' + telfix + '"></a>');
    });
});

function isPhone() {

    // Edgeを弾く
    if (navigator.userAgent.indexOf('Edge') >= 0) {
        return false;
    }

    // Android且つMobileだった場合、電話機とみなす
    if (navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Mobile') >= 0) {
        return true;
    }

    // 最後はiPhoneかどうかを判定し、結果を返す
    return (navigator.userAgent.indexOf('iPhone') >= 0);
};

//=====================================================
// not_enter.js
//=====================================================

$(document).ready(function () {
    $("form input[type!=image][type!=button][type!=submit][type!=reset],form select").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            return false;
        } else {
            return true;
        }
    });
});
