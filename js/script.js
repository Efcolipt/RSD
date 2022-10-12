

$(document).ready(function(){



    [...document.getElementsByClassName('select')].forEach(select => {
        select.addEventListener('click', function (_) {
            this.classList.toggle('select--active')
        });
    
        [...select.getElementsByClassName('select__item')].forEach(selectItem => {
            selectItem.addEventListener('click', function (e) {
                e.stopPropagation()
    
                const headline = select.querySelector('.select__headline > span')
                const headlineDefault = select.querySelector('.select__item[data-select-value="default"]').textContent
                const val = this.getAttribute('data-select-value')
              
                select.setAttribute('data-select-selected', val)
                headline.textContent = val === 'default' ?  headlineDefault : val
    
                select.classList.toggle('select--active')
            })
        });
    
    });
    
    
    [...document.getElementsByClassName('header-main__nav-pages__nav-item')].forEach(element => {
        element.addEventListener("mouseover", function () {
            this.classList.toggle('header-main__nav-pages__nav-item--submenu-active')
        }, false);
        element.addEventListener("mouseout", function () {
            this.classList.toggle('header-main__nav-pages__nav-item--submenu-active')
        }, false);
    });
    
    [...document.getElementsByClassName('header-main__mobile-menu__item')].forEach(element => {
        element.addEventListener('click', function (e) {
            this.classList.toggle('header-main__mobile-menu__item--active')
        })
    });
    
    
    document.getElementById('mobile-burger').addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.toggle('header-main__mobile-menu--active')
    });
    
    
    if($('[data-modal]').length > 0) 
        new Modal({
            linkAttributeName: 'data-modal', 
        });

    
    [...$('.slider')].forEach(element => {
        const count = element.getAttribute('data-count')
        const slider = element.getAttribute('data-slider')
        const dots = element.getAttribute('data-dots')
        
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
      


