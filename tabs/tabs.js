(function($, window) {
    $.fn.myTabs = function() {
        return this.each(function() {
            var $this       = $(this),
                tabsLinks   = $this.find('.tabs__links div'),
                tabsContents = $this.find('.tabs__blocks'),
                tabsBlocks  = $this.find('.tabs__blocks .tabs__block'),
                activeClass = 'active',
                flag        = false;



            tabsLinks.on('click.myTabs', onLinkClick);


            function onLinkClick(event) {
                var targetId = $(this).data('targetId'),
                    target = $(this);

                    tabsLinks.removeClass(activeClass);
                    target.addClass(activeClass);

                    tabsBlocks
                        .removeClass(activeClass)
                        .filter('[data-target-id="'+targetId+'"]')
                        .addClass(activeClass);


                    if (window.matchMedia("(max-width: 980px)").matches){
                        $('.tabs__link.active').after(tabsContents);
                        var scrollBlock = $('.tabs__link.active').offset().top,
                        fixedTop    = $('.mobile-header').outerHeight();
                        $('html, body').animate({scrollTop: scrollBlock - fixedTop + 2}, 700);
                    };
            };
            $(window).on('resize', function(){
                if (window.matchMedia("(max-width: 980px)").matches){
                    if (!flag){
                        $('.tabs__link.active').after(tabsContents);

                        flag = true;
                    }
                } else {
                    if (flag){
                        $('.tabs__links').after(tabsContents);

                        flag = false;
                    }
                }
            }).trigger('resize');

        });
    }
    $(function() {
        $('.tabs').myTabs();
    });
})(jQuery, window);
