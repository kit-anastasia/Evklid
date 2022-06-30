window.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
        }
    },
	});

	document.querySelectorAll('.section-work__button').forEach(function(tabsBtn) {
		document.getElementById("defaultOpen").click();
		tabsBtn.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.tab-content').forEach(function(tabContent) {
				tabContent.classList.remove('tab-content-active')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
		});
	});

	document.querySelectorAll('.details__summary').forEach((item) =>
		item.addEventListener('click', () => {
			const parent = item.parentNode; 

			if (parent.classList.contains('accordion-item--active')) {
				parent.classList.remove('accordion-item--active'); 
			} else {
				document
				.querySelectorAll('.accordion-item')
				.forEach((child) => child.classList.remove('accordion-item--active'))

				parent.classList.add('accordion-item--active');
			}

		})

		)

	$(document).ready(function() {
    $('.header__button-burger').click(function(){
        $('.header__button-burger').toggleClass('open-menu');
        $('.burger-list').toggleClass('open-menu');
    });
});

});

