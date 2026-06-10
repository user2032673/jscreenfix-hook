// ==UserScript==
// @name         JScreenFix thingymabobber
// @namespace    https://www.jscreenfix.com
// @version      2026-06-10
// @description  Actually fix my screen when it's being a pain
// @author       cabbage :)
// @match        https://www.jscreenfix.com/fix.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jscreenfix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let cv = document.getElementById('canvas'); cv.width = 2560; cv.height=2560; cv.style.width="2560px"; cv.style.height="2560px";
})();
