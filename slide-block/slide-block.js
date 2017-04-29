$('.slide-block__container').on('mousemove', function(e){
    var pos = $(this).offset();
    var posLeft = pos.left;
    var x   = e.pageX - posLeft;
    $(this).find('.slide-block__after').css('width', x+'px');
    $(this).find('.slide-block__hint').detach();
});
