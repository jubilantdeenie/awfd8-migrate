!function(e){function n(t){if(a[t])return a[t].exports;var s=a[t]={exports:{},id:t,loaded:!1};return e[t].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var a={};return n.m=e,n.c=a,n.p="",n(0)}([function(e,n,a){a(2),a(4),a(5),function(e){e(function(){})}(jQuery)},,function(e,n,a){var t,s,i;!function(o){function l(){o("#block-awf-main-menu li.menu-item a").addClass("menu-link"),o('<a class="sub-nav-toggle"><span class="element-invisible">Open Sub-navigation</span></a>').insertAfter("#block-awf-main-menu li.menu-item--expanded > a.menu-link"),o("#block-awf-main-menu li.menu-item--expanded > .menu").prepend('<a class="sub-nav-toggle-back">Back</a>')}function u(){var e=c.is(":visible"),n=o(".sub-nav-toggle"),a=o(".sub-nav-toggle-back"),t=o("#block-awf-main-menu .menu li.menu-item.menu-item--expanded a.menu-link"),s=o("#block-awf-main-menu .menu li.menu-item .menu-link"),i=o("#block-awf-main-menu .menu .main-navigation"),l=(o("#block-awf-main-menu .menu li.menu-item--expanded .main-navigation"),o("a.sub-nav-toggle-back"));l.text(o(this).parent().parent().find("a.menu-link:first-child").text()),e?(f.addClass("mobile-menu"),v.addClass("mobile"),t.addClass("expanded-link"),c.off("click keyup").on("click keyup",function(){c.hasClass("open")?r():(v.addClass("open").attr("aria-expanded","true"),c.addClass("open").attr("aria-expanded","true"),f.addClass("open").attr("aria-expanded","true"),g.addClass("stay-open stay-open-menu"),C.addClass("open-menu"),h.addClass("fixed"),d=o(window).scrollTop())}),n.off("click keyup").on("click keyup",function(){o(this).hasClass("open")?(o(this).removeClass("open"),o(this).siblings(".menu-link.expanded-link").removeClass("sheep"),o(this).siblings(".menu").removeClass("open").attr("aria-expanded","false"),o(this).closest(".menu").removeClass("subnav")):(a.addClass("open"),o(".menu-link.expanded-link").removeClass("previous-link"),o(this).siblings(".menu-link.expanded-link").addClass("previous-link"),a.text(o(".menu-link.expanded-link.previous-link").text()),o(this).addClass("open"),o(this).siblings(".menu").addClass("open").attr("aria-expanded","true"),o(this).closest(".menu").addClass("subnav"))}),a.off("click keyup").on("click keyup",function(){o(".menu-link.expanded-link").removeClass("previous-link"),a.text(o(this).parent().parent().parent().siblings("a.menu-link.expanded-link").text()),o(this).removeClass("open"),o(this).parent().removeClass("open"),o(this).parent().siblings(n).removeClass("open").attr("aria-expanded","false"),o(this).closest(".subnav").removeClass("subnav")})):(v.removeClass("open mobile").attr("aria-expanded",""),c.removeClass("open").attr("aria-expanded",""),f.removeClass("open mobile-menu").attr("aria-expanded",""),g.removeClass("stay-open stay-open-menu"),C.removeClass("open-menu"),i.removeClass("subnav"),n.removeClass("open").siblings(".menu").attr("aria-expanded","").removeClass("open").closest(".menu").removeClass("subnav")),s.on("focus",function(){o(this).parents(".menu-item").addClass("open")}),s.on("blur",function(){o(this).parents(".menu-item").removeClass("open")})}function r(){v.removeClass("open").attr("aria-expanded","false"),c.removeClass("open").attr("aria-expanded","false"),f.removeClass("open").attr("aria-expanded","false"),g.removeClass("stay-open stay-open-menu"),C.removeClass("open-menu");var e=c.is(":visible");e||o("nav.navigation.menu--main > ul.menu > li.menu-item").removeClass("is-open")}function m(){r(),o(".search-block-form.open").removeClass("open");var e=c.is(":visible");e||b.removeClass("is-open")}function p(){var e=o(window).scrollTop();console.log(e),e>10?h.addClass("fixed"):h.removeClass("fixed")}o(".menu").on("mouseenter focus",".menu-item--expanded > a",function(e){var n=o(this);n.toggleClass("has-focus"),n.parents(".menu-item").attr("aria-expanded","true")}).on("mouseleave blur",".menu-item--expanded > a",function(e){var n=o(this);n.toggleClass("has-focus"),setTimeout(function(){"true"!==n.siblings("li.menu-item > .menu").attr("data-has-focus")&&n.parents("li.menu-item").attr("aria-expanded","false")},100)}).on("mouseenter focusin","li.menu-item > .menu",function(e){var n=o(this);n.attr("data-has-focus","true")}).on("mouseleave focusout","li.menu-item > .menu",function(e){var n=o(this);setTimeout(function(){0===n.find(":focus").length&&(n.attr("data-has-focus","false"),0===n.siblings("li.menu-item a.has-focus").length&&n.parents(".menu-item--expanded").attr("aria-expanded","false"))},100)}),o('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=o(this.hash);if(e=e.length?e:o("[name="+this.hash.slice(1)+"]"),e.length)return o("html, body").animate({scrollTop:e.offset().top},1e3),!1}}),/*!
	   * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
	   * http://briancherne.github.io/jquery-hoverIntent/
	   *
	   * You may use hoverIntent under the terms of the MIT license. Basically that
	   * means you are free to use hoverIntent as long as this header is left intact.
	   * Copyright 2007, 2014 Brian Cherne
	   */
function(o){"use strict";s=[a(3)],t=o,i="function"==typeof t?t.apply(n,s):t,!(void 0!==i&&(e.exports=i))}(function(e){"use strict";var n,a,t={interval:100,sensitivity:6,timeout:0},s=0,i=function(e){n=e.pageX,a=e.pageY},o=function(e,t,s,l){return Math.sqrt((s.pX-n)*(s.pX-n)+(s.pY-a)*(s.pY-a))<l.sensitivity?(t.off(s.event,i),delete s.timeoutId,s.isActive=!0,e.pageX=n,e.pageY=a,delete s.pX,delete s.pY,l.over.apply(t[0],[e])):(s.pX=n,s.pY=a,s.timeoutId=setTimeout(function(){o(e,t,s,l)},l.interval),void 0)},l=function(e,n,a,t){return delete n.data("hoverIntent")[a.id],t.apply(n[0],[e])};e.fn.hoverIntent=function(n,a,u){var r=s++,m=e.extend({},t);e.isPlainObject(n)?(m=e.extend(m,n),e.isFunction(m.out)||(m.out=m.over)):m=e.isFunction(a)?e.extend(m,{over:n,out:a,selector:u}):e.extend(m,{over:n,out:n,selector:a});var p=function(n){var a=e.extend({},n),t=e(this),s=t.data("hoverIntent");s||t.data("hoverIntent",s={});var u=s[r];u||(s[r]=u={id:r}),u.timeoutId&&(u.timeoutId=clearTimeout(u.timeoutId));var p=u.event="mousemove.hoverIntent.hoverIntent"+r;if("mouseenter"===n.type){if(u.isActive)return;u.pX=a.pageX,u.pY=a.pageY,t.off(p,i).on(p,i),u.timeoutId=setTimeout(function(){o(a,t,u,m)},m.interval)}else{if(!u.isActive)return;t.off(p,i),u.timeoutId=setTimeout(function(){l(a,t,u,m.out)},m.timeout)}};return this.on({"mouseenter.hoverIntent":p,"mouseleave.hoverIntent":p},m.selector)}});var d=0,c=o(".menu-toggle"),f=o("#block-awf-main-menu"),v=o(".region-header"),h=o(".header-section"),g=o("#header"),C=o("html, body"),b=o(".search-block-form"),x=o(".search-content");x.addClass("headerItems"),o("#search-toggle").on("click",function(e){return b.toggleClass("is-open"),r(),b.parent(".toggle-class").toggleClass("toggle-class"),!b.hasClass("is-open")||b.find('input[type="text"]').focus(),!1});var k=o("nav.navigation.menu--main > ul.menu > li.menu-item.menu-item--expanded > a.is-active");k.on("click",function(e){console.log("here"),e.preventDefault(),b.removeClass("is-open"),m(),o(this).parent("li.menu-item.menu-item--expanded").addClass("is-open")}),o(document).on("click",function(e){console.log(e.target);var n=c.is(":visible");n?o(e.target).parents().hasClass("mobile-menu")||o(e.target).hasClass("mobile-menu")||o(e.target).hasClass("menu-toggle")||m():o(e.target).parents().hasClass("is-open")||o(e.target).hasClass("is-open")||m()}),o(document).scroll(p),o(document).ready(l),o(document).ready(u),o(window).resize(u)}(jQuery)},function(e,n){e.exports=jQuery},function(e,n){!function(e,n){n.behaviors.formInput={attach:function(n,a){$webformEmailInput=e("form.webform-submission-newsletter-form .form-item input"),$webformEmailInput.on("keyup",function(){e(this).val()?e(this).parent().addClass("with-value"):e(this).parent().removeClass("with-value")})}}}(jQuery,Drupal)},function(e,n){!function(e){e(function(){e(".btn-orange-line").length&&e(".btn-orange-line").append('<span class="line -right"></span><span class="line -top"></span><span class="line -left"></span><span class="line -bottom"></span>')})}(jQuery)}]);