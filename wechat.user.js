// ==UserScript==
// @name        微信文件传输助手网页版修复工具
// @namespace   kazutoiris
// @match       https://szfilehelper.weixin.qq.com/*
// @match       https://filehelper.weixin.qq.com/*
// @grant       none
// @version     1.0
// @author      kazutoiris
// @license     Anti-996 License
// @run-at      document-start
// @description 修复了微信文件传输助手网页版中的一些问题
// ==/UserScript==

(function () {
    'use strict';

    // 移除 HTML 转义
    let defineProperty = Object.defineProperty;
    Object.defineProperty = (obj, prop, descriptor) => {
        if (prop === "encodeHtml") {
            descriptor.get = () => (_) => _;
        }
        return defineProperty(obj, prop, descriptor);
    }

    // 登出后禁用关闭页面弹窗
    let e = setInterval((() => {
        let t = document.querySelectorAll("#app")[0].__vue_app__._component.components["v-qrcode"];
        if (t) {
            let setup = t.setup;
            t.setup = (e, t) => {
                window.onbeforeunload = null;
                return setup(e, t);
            }
            clearInterval(e);
        }
    }
    ), 300);
})();
