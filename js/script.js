

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
        $.ajax({
            dataType: "json",
            data: {'data': val, 'count': 0},
            url: $('.btn-default.btn-default--outline-default').attr("value"),
            method: 'get',
            cache : false,
            success: function(data){
                // interval = setTimeout(callAjax, 1000);
                $('.about-us-in-media__list').replaceWith($(data.publications));
                if (data.show_button === false) {
                    $('.btn-default.btn-default--outline-default').css('display', 'none')
                }
                else {
                    $('.btn-default.btn-default--outline-default').css('display', '')
                }
            },
            error: function (response) {
                console.log(response.responseJSON.errors)
            },
        });
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
        const responsive = []

        if(count === 2) {
            responsive.push({
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            })
        } else if (count === 3) {
            responsive.push({
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                }
            })
        }

        switch(slider){
            case 'useful-info':
                responsive.push({
                    breakpoint: 525,
                    settings: "unslick"
                })
        }

        $(`[data-slider="${slider}"]  .slider__items`).slick({
            infinite: true,
            slidesToShow: count,
            slidesToScroll: 1,
            prevArrow: $(`[data-slider="${slider}"]  .slider__control[data-slide="prev"]`),
            nextArrow: $(`[data-slider="${slider}"]  .slider__control[data-slide="next"]`),
            dots: dots === 'y' && $(`[data-slider="${slider}"]  .slider__item `).length > 2,
            autoplay: true,
            responsive
        });
    })

    function download(url, method) {
        $.ajax({
            url,
            method,
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

                if($('.content-filter__content-other article').length > 0)
                    $('.content-filter__content-other__download').css('display', 'none')
            }
        }); 
    }
});
      


