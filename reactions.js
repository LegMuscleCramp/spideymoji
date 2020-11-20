var showEmojisTimeout;

function showEmojis(button) {
    button.children('.spideymoji-container').show();
}

function hideEmojis(button) {
    button.children('.spideymoji-container').hide();
}

function disableScrolling() {
    $('body').addClass('no-scroll');
}

function enableScrolling() {
    $('body').removeClass('no-scroll');
}

// event listeners for desktop
$('.button').on("mouseenter",function() {
    $(this).addClass('hover');
});

$('.button').on("mouseleave",function() {
    $(this).removeClass('hover');
});


$('.buttons-like').on("mouseenter",function() {
    var button = $(this);
    showEmojisTimeout = setTimeout(function() {
        showEmojis(button);
    },500);
});

$('.buttons-like').on("mouseleave",function() {
    clearTimeout(showEmojisTimeout);
    hideEmojis($(this));
});

$('.current-reaction').on("click",function() {
    if($(this).parent().attr('data-set')=='true') {
        $(this).children('.reaction').attr('src','img/spidey-thwip-grey.png');
        $(this).children('.reaction-text').text('Thwip');
        $(this).parent().attr('data-set','false');
    } else {
        $(this).children('.reaction').attr('src','img/spidey-thwip.png');
        $(this).parent().attr('data-set','true');
    }
});

$('.spideymoji').on("mouseenter",function() {
    $(this).addClass('spideymoji-hovered');
});

$('.spideymoji').on("mouseleave",function() {
    $(this).removeClass('spideymoji-hovered');
});
$

$('.spideymoji').on("click",function() {
    var reactionImg = $(this).closest('.buttons-like').find('img.reaction');
    var reactionText = $(this).closest('.buttons-like').find('.reaction-text');
    reactionImg.attr('src',$(this).children('img').attr('src'));
    reactionText.text($(this).attr('data-reaction'));
    $(this).closest('.buttons-like').attr('data-set','true');
});

// event listeners for mobile
$('.buttons-like').on("touchstart",function() {
    var button = $(this);
    showEmojisTimeout = setTimeout(function() {
        showEmojis(button);
        disableScrolling();
    },500);

});

$('.buttons-like').on("touchend",function() {
    clearTimeout(showEmojisTimeout);
    hideEmojis($(this));
    enableScrolling();
});

$('.spideymoji').on("touchstart",function() {
    $(this).addClass('spideymoji-hovered');
});

$('.spideymoji').on("touchend",function() {
    $(this).removeClass('spideymoji-hovered');
});
