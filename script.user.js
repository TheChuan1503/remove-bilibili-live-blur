// ==UserScript==
// @name         移除bilibili直播间的马赛克
// @namespace    http://tampermonkey.net/
// @version      2025-07-05
// @description  自动移除bilibili直播间网页版左下角和右下角的马赛克
// @author       TheChuan1503
// @match        https://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function action(){
        var doms = document.getElementsByClassName('web-player-module-area-mask')
        for (let i = 0; i < doms.length; i++) {
            var dom = doms[i]
            dom.style = {}
        }
    }
    setInterval(() => {
        action()
    }, 200)
})();
