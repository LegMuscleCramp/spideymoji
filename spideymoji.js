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
            },500);
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
        if(isMainButton) {
            const spideyButton = e.currentTarget.querySelector('.spidey-button');
            if(spideyButton.getAttribute('data-set')=='false') {
                spideyButton.setAttribute('data-set','true');
            } else {
                spideyButton.setAttribute('data-set','false');
            }
        } else {
            e.stopPropagation();
            const target = e.currentTarget;
            const dataReaction = target.getAttribute('data-reaction');
            const spideyImg = target.querySelector('.spidey-img img').getAttribute('src');
            const closestSpideymoji = target.closest('.spideymoji');
            closestSpideymoji.classList.remove('hover');
            closestSpideymoji.querySelector('.spidey-button').setAttribute('data-set','true');
            closestSpideymoji.querySelector('.spidey-button .spidey-current-img').setAttribute('src',spideyImg);
            closestSpideymoji.querySelector('.spidey-button .spidey-current-text').innerHTML = dataReaction;
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
