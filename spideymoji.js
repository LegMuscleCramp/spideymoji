function buildSpideymoji(button) {
    button.innerHTML = buildSpideymojiHtml();
    addEventListeners(button,true);
    document.querySelectorAll('.spidey-reaction')
    .forEach(spideyReaction => addEventListeners(spideyReaction,false));
}

function buildSpideymojiHtml() {
    let spideymojiInnerHtml = '<div class="spidey-button" data-set="false">';
        spideymojiInnerHtml += '<div class="spidey-current-reaction" data-set="false">';
            spideymojiInnerHtml += '<img class="spidey-current-img" src="img/spidey-thwip.png" alt="greyed out Spidey thwip emoji">';
            spideymojiInnerHtml += '<span class="spidey-current-text">Thwip</span>';
        spideymojiInnerHtml += '</div>';
    spideymojiInnerHtml += '</div>';
    spideymojiInnerHtml += '<div class="spidey-reactions-container">';
        // spidey thwip
        spideymojiInnerHtml += '<div data-reaction="Thwip" class="spidey-reaction">';
            spideymojiInnerHtml += '<div class="spidey-img">';
                spideymojiInnerHtml += '<img src="img/spidey-thwip.png" alt="Spidey thwip emoji">';
            spideymojiInnerHtml += '</div>';
        spideymojiInnerHtml += '</div>';
        // spidey yay
        spideymojiInnerHtml += '<div data-reaction="Yay" class="spidey-reaction">';
            spideymojiInnerHtml += '<div class="spidey-img">';
                spideymojiInnerHtml += '<img src="img/spidey-yay.png" alt="Spidey yay emoji">';
            spideymojiInnerHtml += '</div>';
        spideymojiInnerHtml += '</div>';
        // spidey love
        spideymojiInnerHtml += '<div data-reaction="Love" class="spidey-reaction">';
            spideymojiInnerHtml += '<div class="spidey-img">';
                spideymojiInnerHtml += '<img src="img/spidey-love.png" alt="Spidey love emoji">';
            spideymojiInnerHtml += '</div>';
        spideymojiInnerHtml += '</div>';
        // spidey wow
        spideymojiInnerHtml += '<div data-reaction="Wow" class="spidey-reaction">';
            spideymojiInnerHtml += '<div class="spidey-img">';
                spideymojiInnerHtml += '<img src="img/spidey-wow.png" alt="Spidey wow emoji">';
            spideymojiInnerHtml += '</div>';
        spideymojiInnerHtml += '</div>';
        // spidey huh
        spideymojiInnerHtml += '<div data-reaction="Huh" class="spidey-reaction">';
            spideymojiInnerHtml += '<div class="spidey-img">';
                spideymojiInnerHtml += '<img src="img/spidey-huh.png" alt="Spidey huh emoji">';
            spideymojiInnerHtml += '</div>';
        spideymojiInnerHtml += '</div>';
        // spidey sad
        spideymojiInnerHtml += '<div data-reaction="Sad" class="spidey-reaction">';
            spideymojiInnerHtml += '<div class="spidey-img">';
                spideymojiInnerHtml += '<img src="img/spidey-sad.png" alt="Spidey sad emoji">';
            spideymojiInnerHtml += '</div>';
        spideymojiInnerHtml += '</div>';
        // spidey angry
        spideymojiInnerHtml += '<div data-reaction="Angry" class="spidey-reaction">';
            spideymojiInnerHtml += '<div class="spidey-img">';
                spideymojiInnerHtml += '<img src="img/spidey-angry.png" alt="Spidey angry emoji">';
            spideymojiInnerHtml += '</div>';
        spideymojiInnerHtml += '</div>';
    spideymojiInnerHtml += '</div>';
    return spideymojiInnerHtml;
}

function addEventListeners(target,isMainButton) {
    let hoverTimeout;
    target.addEventListener('mouseenter',function(e) {
        clearTimeout(hoverTimeout);
        if(isMainButton) {
            hoverTimeout = setTimeout(function() {
                e.target.classList.add('hover');
            },650);
        } else {
            e.target.classList.add('hover');
        }
    });

    target.addEventListener('mouseleave',function(e) {
        if(isMainButton) {
            clearTimeout(hoverTimeout);
            if(e.target.classList.contains('hover')) {
                hoverTimeout = setTimeout(function() {
                    e.target.classList.remove('hover');
                },500);
            }
        } else {
            e.target.classList.remove('hover');
        }
    });

    target.addEventListener('click', function(e) {
        const CLICK_TARGET = e.currentTarget;
        if(isMainButton) {
            const SPIDEY_BTN = CLICK_TARGET.querySelector('.spidey-button');
            if(SPIDEY_BTN.getAttribute('data-set')=='false') {
                SPIDEY_BTN.setAttribute('data-set','true');
            } else {
                const DEFAULT_REACTION = CLICK_TARGET.querySelector('.spidey-reactions-container .spidey-reaction');
                const DEFAULT_REACTION_IMG = DEFAULT_REACTION.querySelector('.spidey-img img').getAttribute('src');
                const DEFAULT_REACTION_TEXT = DEFAULT_REACTION.getAttribute('data-reaction');
                SPIDEY_BTN.setAttribute('data-set','false');
                SPIDEY_BTN.querySelector('.spidey-current-img').setAttribute('src',DEFAULT_REACTION_IMG);
                SPIDEY_BTN.querySelector('.spidey-current-text').innerHTML = DEFAULT_REACTION_TEXT;

                // this else block unsets/disables the reaction button
                // add code here for hiding reaction container after button is disabled
            }
        } else {
            e.stopPropagation();
            const SELECTED_REACTION_IMG = CLICK_TARGET.querySelector('.spidey-img img').getAttribute('src');
            const SELECTED_REACTION_TEXT = CLICK_TARGET.getAttribute('data-reaction');
            const CURRENT_SPIDEYMOJI_BTN = CLICK_TARGET.closest('.spideymoji');
            CURRENT_SPIDEYMOJI_BTN.classList.remove('hover');
            CURRENT_SPIDEYMOJI_BTN.querySelector('.spidey-button').setAttribute('data-set','true');
            CURRENT_SPIDEYMOJI_BTN.querySelector('.spidey-button .spidey-current-img').setAttribute('src',SELECTED_REACTION_IMG);
            CURRENT_SPIDEYMOJI_BTN.querySelector('.spidey-button .spidey-current-text').innerHTML = SELECTED_REACTION_TEXT;
        }
    });

    if(isMainButton) {
        target.addEventListener('touchstart',function(e) {

        });

        target.addEventListener('touchend',function(e) {

        });

        target.addEventListener('touchmove',function(e) {

        });
    }
}

document.querySelectorAll(".spideymoji")
.forEach(spideyButton => buildSpideymoji(spideyButton));