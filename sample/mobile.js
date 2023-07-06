var menuButton = $(".mobile-menu-button");
var menuButtonImg = $(".mobile-menu-button img");
var menuContent = $("#menu-content");

menuButton.click(function () {
    var isopen = menuButton.attr("isopen");
    if(isopen == "0") {
        menuButton.attr("isopen", "1");
        menuButtonImg.attr("src","https://www.blinkist.com/packs/static/dark-reader/components/mobile-menu-bar/images/mobile-menu-close-icon-976c28e771611d875890.svg");
        menuContent.show();
    } else if (isopen == "1") {
        menuButton.attr("isopen", "0");
        menuButtonImg.attr("src","https://www.blinkist.com/packs/static/dark-reader/components/mobile-menu-bar/images/mobile-menu-open-icon-54bb6c645fbf331e0098.svg");
        menuContent.hide();
    }
});

var textSize = $("#text-size");
var textSizeToggleSvg = $("#text-size-toggle");
var textSizeContent = $("#text-size-content");
var textSizeContentMenu = $("#text-size-content-menu");
var textSizeS = $("#text-size-s");
var textSizeM = $("#text-size-m");
var textSizeL = $("#text-size-l");
var readerContentText = $(".reader-content__text");

textSize.click(function () {
    var isclose = textSizeToggleSvg.hasClass("transform");
    if (isclose) {
        textSizeToggleSvg.removeClass("transform");
        textSizeToggleSvg.removeClass("rotate-180");
        textSizeContent.removeClass("opacity-0");
        textSizeContent.addClass("opacity-100");
        textSizeContentMenu.show();
    } else {
        textSizeToggleSvg.addClass("transform");
        textSizeToggleSvg.addClass("rotate-180");
        textSizeContent.removeClass("opacity-100");
        textSizeContent.addClass("opacity-0");
        textSizeContentMenu.hide();
    }
});

textSizeS.click(function () {
    textSizeS.removeClass("border-light-grey");
    textSizeS.addClass("border-green");
    textSizeM.addClass("border-light-grey");
    textSizeL.addClass("border-light-grey");
    readerContentText.addClass("text-r2");
    readerContentText.removeClass("text-r1");
    readerContentText.removeClass("text-r0");
});
textSizeM.click(function () {
    textSizeS.addClass("border-light-grey");
    textSizeM.removeClass("border-light-grey");
    textSizeM.addClass("border-green");
    textSizeL.addClass("border-light-grey");
    readerContentText.removeClass("text-r2");
    readerContentText.addClass("text-r1");
    readerContentText.removeClass("text-r0");
});
textSizeL.click(function () {
    textSizeS.addClass("border-light-grey");
    textSizeM.addClass("border-light-grey");
    textSizeL.removeClass("border-light-grey");
    textSizeL.addClass("border-green");
    readerContentText.removeClass("text-r2");
    readerContentText.removeClass("text-r1");
    readerContentText.addClass("text-r0");
});
