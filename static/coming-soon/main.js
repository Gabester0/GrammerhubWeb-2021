// document is ready
$(document).ready(function () {

    // SHOW SOCIAL ICONS IN MAIN MENU
    (function () {
        var showSocialIcons = function () {
            $('.navbar_show-icons').off('click').on(
                'click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    $(this).toggleClass('active');

                    if (this.parentNode.getElementsByClassName('navbar_icons').length) {
                        var ul = this.parentNode.getElementsByClassName('navbar_icons')[0].getElementsByTagName('ul')[0];
                        ul.classList.toggle('open');
                    }
                    if (this.parentNode.getElementsByTagName('p').length) {
                        var p = this.parentNode.getElementsByTagName('p')[0];
                        p.classList.toggle('open');
                    }
                    if (this.parentNode.getElementsByTagName('span').length) {
                        var p = this.parentNode.getElementsByTagName('span')[0];
                        p.classList.toggle('open');
                    }
                    if ($('.center-menu').length) {
                        $('.center-menu').toggleClass('iconOpen');
                    }
                }
            );
        };

        $(document).on('click', function () {
            var $navShowIcons = $('.navbar_show-icons');
            $navShowIcons.removeClass('active');
            $navShowIcons.parent().find('.navbar_icons ul').removeClass('open');
            $navShowIcons.parent().find('p').removeClass('open');
            $navShowIcons.parent().find('span').removeClass('open');
            $('.center-menu').removeClass('iconOpen');
        });

        showSocialIcons();

        removeEvent(window, 'resize', resize);
        addEvent(window, 'resize', resize);

        function resize() {
            var $navShowIcons = $('.navbar_show-icons');
            $navShowIcons.removeClass('active');
            $navShowIcons.parent().find('.navbar_icons ul').removeClass('open');
            $navShowIcons.parent().find('p').removeClass('open');
            $navShowIcons.parent().find('span').removeClass('open');
            $('.center-menu').removeClass('iconOpen');
            showSocialIcons();
        }
    }());

});
