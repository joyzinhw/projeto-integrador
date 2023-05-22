
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

const panels = document.querySelectorAll('.faq_panel');

const panellabels = document.querySelectorAll('.faq_label');

panels.forEach((panel, index) => { let isExpanded = panel.getAttribute('aria-expanded') === 'true';


    panellabels[index].addEventListener('click', () => { console.log('clicked');

isExpanded=!isExpanded;

panel.setAttribute('aria-expanded', isExpanded);

});
});