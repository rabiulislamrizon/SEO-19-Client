(function ($) {
    "use strict";

    $(document).ready(function () {
        if ($(".xb-title--typewriter").length) {
            function e($elements, callback) {
                $elements.length ? ($elements.eq(0).addClass("is-active"), $elements.eq(0).delay(3000).removeClass("is-active"), e($elements.slice(1), callback)) : callback();
            }

            function f($elements, callback) {
                $elements.length ? ($elements.eq(0).addClass("is-active"), $elements.eq(0).delay(2000).slideDown(30, function () {
                $elements.eq(0).removeClass("is-active"), f($elements.slice(1), callback);
                })) : callback();
            }

            function d() {
                var $textItems = $(".xb-title--typewriter .xb-item--text");
                e($textItems, function () {
                    f($textItems, function () {
                        d();
                    });
                });
            }

            d();
        }
    });
})(jQuery);