/* Removes all but text of an article on www.mediapart.fr */
javascript: (function removeAllButText(undefined) {
    'use strict';
    console.debug('loadFromBookMarklet called');
    $("body").children().not("section.global-wrapper").hide();
    $(".read-also").hide();
    $(".tools-share").hide();
    $("aside").hide();
    $(".media").hide();
    $(".sub-menu").hide();
})();