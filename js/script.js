

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
        const count = $(this).attr('data-count') ? +$(this).attr('data-count') : 1
        const slider = $(this).attr('data-slider')
        const dots = $(this).attr('data-dots')
         
        $(`[data-slider="${slider}"]  .slider__items`).slick({
            infinite: true,
            slidesToShow: count,
            slidesToScroll: 1,
            prevArrow: $(`[data-slider="${slider}"]  .slider__control[data-slide="prev"]`),
            nextArrow: $(`[data-slider="${slider}"]  .slider__control[data-slide="next"]`),
            mobileFirst: true,
            dots: dots === 'y' && count > 1,
            autoplay: true
        });
    })

    $('.content-filter__content-other__download .btn-default').click(function () {
        $.ajax({
            url: '/index.php',
            method: 'get',
            dataType: 'json',
            // data: {text: 'Текст'},
            success: function(jsonData){
                const parent = $(this).parents('.content-filter__content').find('.content-filter__content-other')
                const data = JSON.parse(jsonData)
                const structure = `
                    <article class="card-article">
                        <img class="image" src="${data.image}" alt="">
                        <h3>${data.headline}</h3>
                        <div class="card-article__info">
                            <time datetime="${data.date}">
                                ${data.date}
                            </time>
                        </div>
                    </article>
                `
                parent.append(structure)
            }
        });

    })
});
      


