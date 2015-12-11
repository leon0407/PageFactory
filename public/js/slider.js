(function($) {
    //简单的图片轮转插件
    $.fn.MaxSlider = function(options) {
        var defaults = {
            elementclass: null,
            //滚动元素的class
            btnpre: null,
            //上一张按钮
            btnnext: null,
            //下移张按钮
            startindex: 0,
            time: 3000,
            autoscroll: false,
            speed: "normal",
            //滚动速度
            cwidth: "",
            //每次滚动的宽度
            easing: "linear"
        };
        var $this = this;
        defaults.cwidth = $this.children(":first").width();
        var settings = $.extend({},
        defaults, options);        
        var width = settings.cwidth;
        var count = $this.find("." + settings.elementclass).size();
        $this.width((count + 1) * width);
        //正向轮转
        var start = function() {
            var nextelement = $this.find(".active:eq(0)").next();
            if (nextelement.size() <= 0) {
                $this.css({
                    "left": "0"
                });
                $this.find("." + settings.elementclass).eq(0).addClass("active").siblings().removeClass("active");
            }

            $this.stop(true).animate({
                "left": "-=" + width + "px"
            },
            settings.speed, settings.easing);
            $this.find(".active:eq(0)").next().addClass("active").siblings().removeClass("active");
        };
        //逆向轮转
        var slideback = function() {
            var preelement = $this.find(".active:eq(0)").prev();
            if (preelement.size() <= 0) {
                $this.css({
                    "left": -count * width + "px"
                });
                $this.find("." + settings.elementclass).eq(count).addClass("active").siblings().removeClass("active");
            }
            $this.stop(true).animate({
                "left": "+=" + width + "px"
            },
            settings.speed, settings.easing);
            $this.find(".active:eq(0)").prev().addClass("active").siblings().removeClass("active");
        }
        if (settings.elementclass) {
            var firstelement = $this.find("." + settings.elementclass).eq(0);
            if (count > 1) {
                var clone = firstelement.clone();
                $this.append(clone);
                $this.css({
                    "left": -settings.startindex * width
                });
                $this.find("." + settings.elementclass).eq(settings.startindex).addClass("active");
                if (settings.autoscroll) {
                    $this.data("invl", window.setInterval(start, settings.time));
                }
                if (settings.btnpre) {
                    settings.btnpre.click(function() {

                        if (!$this.is(":animated")) {

                            if ($this.data("invl")) {
                                clearInterval($this.data("invl"));
                            }
                            slideback();

                            if (settings.autoscroll) {
                                $this.data("invl", window.setInterval(start, settings.time));
                            }
                        }
                    });
                }
                if (settings.btnnext) {
                    //console.log($this.is(":animated"));	
                    settings.btnnext.click(function() {
                        if (!$this.is(":animated")) {

                            if ($this.data("invl")) {
                                clearInterval($this.data("invl"));
                            }
                            start();
                            if (settings.autoscroll) {
                                $this.data("invl", window.setInterval(start, settings.time));
                            }
                        }
                    });
                }
            }
        }
    }
})(jQuery);