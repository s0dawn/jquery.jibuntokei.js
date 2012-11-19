(function(jQuery) {
    jQuery.fn.jibunTokei = function(options) {
        var options = jQuery.extend({}, jQuery.fn.jibunTokei.defaults, options);

        function getImage(date) {
            var hour = date.getHours();
            if (hour < 10) {
                hour = '0' + hour;
            }
            var minute = date.getMinutes();
            if (minute < 10) {
                minute = '0' + minute;
            }
            return options.dir + hour + minute + '.' + options.ext;
        }

        function updateClock(obj) {
            var date = new Date();
            var image = getImage(date);

            date.setTime(date.getTime() + 60 * 1000);
            var nextImage = getImage(date);

            obj.fadeOut(1000, function(){
                obj.html('<img src="' + image + '"><img src="' + nextImage + '" style="display:none;">').fadeIn(1000);
            });
    
            setTimeout(updateClock, (60 - date.getSeconds()) * 1000, obj);
        }

        return this.each(function(){
            updateClock(jQuery(this));
        });
    };

    jQuery.fn.jibunTokei.defaults = {
        'dir' : '',
        'ext': 'jpg'
    };
})(jQuery);