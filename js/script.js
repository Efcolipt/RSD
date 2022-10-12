

$(document).ready(function(){


    $('.select').click(function() {
        $(this).toggleClass('select--active')
    })

    $('.select .select__item').click(function (e) {
        e.stopPropagation()

        const val = $(this).attr('data-select-value')
        const select = $(this).parents('.select')
        const headlineDefault = select.find('.select__item[data-select-value="default"]').text()

        select.find('.select__headline span').text(val === 'default' ?  headlineDefault : val)
        select.attr('data-select-selected', val)
        select.toggleClass('select--active')
    })

    

    $('.header-main__nav-pages__nav-item').hover(function() {
        $(this).toggleClass('header-main__nav-pages__nav-item--submenu-active')
    })

    $('.header-main__mobile-menu__item').click(function() {
        $(this).toggleClass('header-main__mobile-menu__item--active')
    })
    
    $('#mobile-burger').click(function() {
        $('#mobile-menu').toggleClass('header-main__mobile-menu--active')
    });
    
    if($('[data-modal]').length > 0) 
        new Modal({
            linkAttributeName: 'data-modal', 
        });

    $('.slider').each(function() {
        const count = $(this).attr('data-count')
        const slider = $(this).attr('data-slider')
        const dots = $(this).attr('data-dots')
        
        $(`[data-slider="${slider}"]  .slider__items`).slick({
            infinite: true,
            slidesToShow: count ? +count : 1,
            slidesToScroll: 1,
            prevArrow: $(`[data-slider="${slider}"]  .slider__control[data-slide="prev"]`),
            nextArrow: $(`[data-slider="${slider}"]  .slider__control[data-slide="next"]`),
            mobileFirst: true,
            dots: dots === 'y',
        });
    })
});
      


