/**
 * ###########################################################################################
 * This is the animations js file where all the animation scripts live, like open dropdown...
 * ############################################################################################
 */

document.addEventListener('DOMContentLoaded', () => {

/**
 * +++++++++++++++ Dropdowns toggling ++++++++++++++++
 */
let dropdownToggler = document.querySelectorAll('.dropdown-toggler');
if (dropdownToggler)
{
    let openPos = '';
    dropdownToggler.forEach(btn => {
        btn.addEventListener('click', function(e){
            let theDropdown = this.dataset.dropdown;
            openPos = this.dataset.position && ['up', 'right'].includes(this.dataset.position) ? `${this.dataset.position}-open-dropdown` : 'open-dropdown';

            document.getElementById(`${theDropdown}`).classList.toggle(`${openPos}`);
            e.stopPropagation();
        });
    });
    
    document.querySelector('html').addEventListener('click', () => {
        let dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove(`${openPos}`);
        })
    })
}


/**
 * +++++++++++++++ Aside nav toggling ++++++++++++++++
 */
let asideToggler = document.getElementById('aside-toggler');
// window.addEventListener('resize')
asideToggler.addEventListener('click', function(){
    if(window.innerWidth <= 767)
    {

        document.querySelector('.aside-nav').classList.remove('hidden');
        document.querySelector('.aside-nav').classList.toggle('open-mobile-aside-nav');
    }else
    {
        document.querySelector('.main-content').classList.toggle('md:col-span-5')
        document.querySelector('.aside-nav').classList.toggle('hidden');
    }
    
});

// ################ Collapses / Accordians ################
let collaspeBtns = document.querySelectorAll('.collapse-btn');

collaspeBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        let collapseToOpenId = this.dataset.collapse;
        let collapseToOpen = document.getElementById(`${collapseToOpenId}`);
        document.querySelectorAll('.collapse-content').forEach(collapse => {
            if (collapse.getAttribute('id') !== collapseToOpenId)
                collapse.classList.remove('open-collapse-content');
            collapse.style.height = 0;
        });

        collapseToOpen.classList.toggle('open-collapse-content');
        if (collapseToOpen.classList.contains('open-collapse-content'))
            collapseToOpen.style.height = `${collapseToOpen.scrollHeight}px`;
        else
            collapseToOpen.style.height = 0;
        
    })
})

}) // end of checking DOM is ready
