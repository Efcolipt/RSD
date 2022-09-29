

[...document.getElementsByClassName('select') || []].forEach(select => {
    select.addEventListener('click', function (_) {
        this.classList.toggle('select--active')
    })

    Array.from(select.getElementsByClassName('select__item')).forEach(selectItem => {
        selectItem.addEventListener('click', function (e) {
            e.stopPropagation()

            const headline = select.querySelector('.select__headline > span')
            const headlineDefault = select.querySelector('.select__item[data-select-value="default"]').textContent
            const val = this.getAttribute('data-select-value')
          
            select.setAttribute('data-select-selected', val)
            headline.textContent = val === 'default' ?  headlineDefault : val

            select.classList.toggle('select--active')
        })
    })

});


[...document.getElementsByClassName('header-main__nav-pages__nav-item') || []].forEach(element => {
    element.addEventListener('click', function () {
        this.classList.toggle('header-main__nav-pages__nav-item--submenu-active')
    })
})

new Modal({
    linkAttributeName: 'data-modal', 
});
