jQuery(document).ready(function ($) {
  new WOW().init();

  // Select li elements that have ul as children
  $('.nav-ul li:has(ul)').each(function () {
    // Append a div to their child a tags
    $(this).children('a').append('<span class="dropdown-arrow"><i class="fa-solid fa-chevron-down"></i></span>');
  });


  if ($(window).width() <= 1199) {
    $(".nav-ul .dropdown-arrow").on("click", function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        $(this)
          .parent().siblings(".sub-menu")
          .slideUp(200);
      } else {
        $(".nav-ul .dropdown-arrow").parent().removeClass("active");
        $(this).parent().addClass("active");
        $(".sub-menu").slideUp(200);
        $(this)
          .parent().siblings(".sub-menu")
          .slideDown(200);
      }
    });
  }

  $(".menu_bar").on('click', function () {
    $(".header_area .nav-area").addClass("mobi-nav-active");
    $(".black_overlay_for_mobile_responsive").fadeIn();
    $("body").addClass("scroll_disable");
  });
  $(".cross").on('click', function () {
    $(".header_area .nav-area").removeClass("mobi-nav-active");
    $(".black_overlay_for_mobile_responsive").fadeOut(1000);
    $("body").removeClass("scroll_disable");
  });
  $(".black_overlay_for_mobile_responsive").on('click', function () {
    $(".header_area .nav-area").removeClass("mobi-nav-active");
    $(this).fadeOut(1000);
    $("body").removeClass("scroll_disable");
  });

  // Show the first tab and hide the rest
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  $(".faqs-area .set > a").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".faqs-area .content")
        .slideUp(200);
      $(".faqs-area .set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".faqs-area .set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".faqs-area .set > a").removeClass("active");
      $(this).addClass("active");
      $(".faqs-area .content").slideUp(200);
      $(this)
        .siblings(".faqs-area .content")
        .slideDown(200);
    }

  });
  $('.table_area_main').on('scroll', function () {
    if ($(this).scrollTop() > 0 || $(this).scrollLeft() > 0) {
      $('.scroll_down_arrow').fadeOut();
    } else {
      $('.scroll_down_arrow').fadeIn();
    }
  });
  // if ($(window).width() <= 991) {
  //   $('.testimonial_slider_area').removeClass('wow slideInLeft');
  // }

  $('.scroll_down_arrow').on('click', function () {
    $('.table_area_main').animate({ scrollTop: $('.table_area_main')[0].scrollHeight }, 'slow');
  });

  $('[id^=tab]').each(function () {
    var tabId = $(this).attr('id');
    $('#' + tabId + ' .scroll_down_arrow').on('click', function () {
      var tableArea = $('#' + tabId + ' .table_area_main');
      if (tableArea.length === 0) {
        console.error('No .table_area_main element found in the tab with ID:', tabId);
        return;
      }
      console.log('Scrolling tab:', tabId);
      tableArea.animate({ scrollTop: tableArea[0].scrollHeight }, 'slow');
    });
  });


  // AUTOMATIC LEFT SWIFT 
  if ($(window).width() <= 767) {
    $('#tabs-nav li').click(function (event) {
      event.preventDefault(); // Prevent the default anchor behavior
  
      // Remove the active class from all tabs
      $('#tabs-nav li').removeClass('active');
  
      // Add the active class to the clicked tab
      $(this).addClass('active');
  
      // Scroll the tab container to the left position of the clicked tab
      var $tabContainer = $('.tab_top_area');
      var $tab = $(this);
      var tabContainerWidth = $tabContainer.width();
      var tabWidth = $tab.outerWidth(true);
  
      $tabContainer.animate({
        scrollLeft: $tab.position().left + $tabContainer.scrollLeft() - (tabContainerWidth - tabWidth) / 2
      }, 300); // Adjust the scroll duration as needed
    });
  }



});

document.addEventListener('DOMContentLoaded', function () {
  const firstSet = document.querySelector('.faqs-area .set');

  // Check if it exists before making changes
  if (firstSet) {
    // Replace the class of the 'i' element from 'fa-plus' to 'fa-minus'
    const icon = firstSet.querySelector('i.fa');
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');

    // Add the 'active' class to its child 'a' element
    const firstLink = firstSet.querySelector('a');
    const firstContent = firstSet.querySelector('.content');
    firstLink.classList.add('active');
    firstContent.style.display = 'block';
  }




});


document.addEventListener('DOMContentLoaded', function () {
  // Check if we are on the desired page by checking for a unique element
  if (document.querySelector('.free_estimate_area')) { // Replace '.unique-element-class' with the actual class or ID of the unique element
    // grab everything we need
    let squreFtInput = document.querySelector('[name=total_square_ft_input]');
    let quantityInput = document.querySelector('[name=month-week]');
    let quantityInput2 = document.querySelector('[name=one_time_cleaning]');
    let bathroom_cleaning = document.querySelector('[name=bathroom_cleaning]');
    let kitchen_cleaning = document.querySelector('[name=kitchen_cleaning]');
    let dust_cleaning = document.querySelector('[name=dust_cleaning]'); // added dust cleaning checkbox
    let floor_cleaning = document.querySelector('[name=floor_cleaning]'); // added floor cleaning checkbox

    let addon_estimate_area = document.querySelector('#addon_estimate_id');
    let estimate_bill_area = document.querySelector('#estimate_bill_id');

    let serviceTypeInput = document.querySelector('[name=service_type]');
    let total_frequency_rate = document.querySelector('#total_frequency_rate');

    let squareFt1 = document.querySelector('#total_square_ft1');

    let classicBaseCharge = document.querySelector('#classic_base_charge');

    let final_price = document.querySelector('#final_price');
    let total_bathroom = document.querySelector('#total_bathroom');
    let total_kitchen = document.querySelector('#total_kitchen');
    let total_dust = document.querySelector('#total_dust'); // added total dust element
    let total_floor = document.querySelector('#total_floor'); // added total floor element

    // create functions we'll need
    function calculateCost() {
      let SqureFtInput = parseFloat(squreFtInput.value) || 0;
      let quantity = 0;
      let bathroomQuantity = 0;
      let bathroomCleaning = 0;
      let kitchenQuantity = 0;
      let kitchenCleaning = 0;
      let dustCleaningCost = 0;
      let floorCleaningCost = 0;

      // Get the selected service type
      let serviceType = serviceTypeInput.value;

      // Update based on service type
      if (serviceType === 'recurring') {
        classicBaseCharge.innerText = '20.00';
        quantity = parseFloat(quantityInput.value) || 0;
        quantityInput2.setAttribute('disabled', 'true');
        quantityInput2.parentNode.parentNode.classList.add('select_disble');
        bathroom_cleaning.parentNode.parentNode.classList.add('select_disble');
        kitchen_cleaning.parentNode.parentNode.classList.add('select_disble');
        addon_estimate_area.classList.add('select_disble');
        estimate_bill_area.classList.remove('select_disble');
        quantityInput.removeAttribute('disabled');
        quantityInput.parentNode.parentNode.classList.remove('select_disble');
        squareFt1.parentNode.classList.remove('select_disble');
      } else if (serviceType === 'one_time') {
        classicBaseCharge.innerText = '40.00';
        quantity = parseFloat(quantityInput2.value) || 0;
        quantityInput.setAttribute('disabled', 'true');
        quantityInput.parentNode.parentNode.classList.add('select_disble');
        bathroom_cleaning.parentNode.parentNode.classList.add('select_disble');
        kitchen_cleaning.parentNode.parentNode.classList.add('select_disble');
        addon_estimate_area.classList.add('select_disble');
        estimate_bill_area.classList.remove('select_disble');
        quantityInput2.removeAttribute('disabled');
        quantityInput2.parentNode.parentNode.classList.remove('select_disble');
        squareFt1.parentNode.classList.remove('select_disble');
      } else if (serviceType === 'mini_service') {
        classicBaseCharge.innerText = '0.00';
        bathroomQuantity = parseFloat(bathroom_cleaning.value) || 0;
        kitchenQuantity = parseFloat(kitchen_cleaning.value) || 0;
        quantityInput.setAttribute('disabled', 'true');
        quantityInput.parentNode.parentNode.classList.add('select_disble');
        quantityInput2.setAttribute('disabled', 'true');
        quantityInput2.parentNode.parentNode.classList.add('select_disble');
        addon_estimate_area.classList.remove('select_disble');
        squareFt1.parentNode.classList.add('select_disble');
        bathroom_cleaning.parentNode.parentNode.classList.remove('select_disble');
        kitchen_cleaning.parentNode.parentNode.classList.remove('select_disble');
        if (bathroomQuantity === 1) {
          bathroomCleaning = bathroomQuantity * 25;
        } else if (bathroomQuantity > 1) {
          bathroomCleaning = 25 + (bathroomQuantity - 1) * 10;
        }
        kitchenCleaning = kitchenQuantity * 25;
      } else {
        // Reset to default if not Recurring or One_time
        classicBaseCharge.innerText = '';
        quantityInput.removeAttribute('disabled');
        quantityInput.parentNode.parentNode.classList.remove('select_disble');
        quantityInput2.removeAttribute('disabled');
        quantityInput2.parentNode.parentNode.classList.remove('select_disble');
        bathroom_cleaning.removeAttribute('disabled');
        bathroom_cleaning.parentNode.parentNode.classList.remove('select_disble');
        kitchen_cleaning.removeAttribute('disabled');
        kitchen_cleaning.parentNode.parentNode.classList.remove('select_disble');
        addon_estimate_area.classList.remove('select_disble');
        estimate_bill_area.classList.add('select_disble');
      }

      // Calculate dust cleaning cost
      if (dust_cleaning.checked) {
        dustCleaningCost = 0.01 * SqureFtInput;
        total_dust.parentNode.parentNode.classList.remove('select_disble');
      } else {
        total_dust.parentNode.parentNode.classList.add('select_disble');
      }

      // Calculate floor cleaning cost
      if (floor_cleaning.checked) {
        floorCleaningCost = 0.02 * SqureFtInput;
        total_floor.parentNode.parentNode.classList.remove('select_disble');
      } else {
        total_floor.parentNode.parentNode.classList.add('select_disble');
      }

      let frequency_total = SqureFtInput * quantity;
      total_frequency_rate.innerText = frequency_total.toFixed(2);

      let baseCharge = parseFloat(classicBaseCharge.innerText) || 0;
      let finalPrice = frequency_total + baseCharge + bathroomCleaning + kitchenCleaning + dustCleaningCost + floorCleaningCost;
      final_price.innerText = finalPrice.toFixed(2);

      if (bathroomQuantity > 0) {
        total_bathroom.innerText = bathroomCleaning.toFixed(2);
        total_bathroom.parentNode.parentNode.classList.remove('select_disble');
      } else {
        total_bathroom.innerText = '0.00';
        total_bathroom.parentNode.parentNode.classList.add('select_disble');
      }
      if (kitchenQuantity > 0) {
        total_kitchen.innerText = kitchenCleaning.toFixed(2);
        total_kitchen.parentNode.parentNode.classList.remove('select_disble');
      } else {
        total_kitchen.innerText = '0.00';
        total_kitchen.parentNode.parentNode.classList.add('select_disble');
      }

      total_dust.innerText = dustCleaningCost.toFixed(2); // display dust cleaning cost
      total_floor.innerText = floorCleaningCost.toFixed(2); // display floor cleaning cost
    }

    // on first run
    calculateCost();

    // add event listeners
    squreFtInput.addEventListener('input', calculateCost);
    quantityInput.addEventListener('input', calculateCost);
    quantityInput2.addEventListener('input', calculateCost);
    bathroom_cleaning.addEventListener('input', calculateCost);
    kitchen_cleaning.addEventListener('input', calculateCost);
    dust_cleaning.addEventListener('change', calculateCost); // added event listener for dust cleaning checkbox
    floor_cleaning.addEventListener('change', calculateCost); // added event listener for floor cleaning checkbox
    serviceTypeInput.addEventListener('change', calculateCost);
  }
});



document.addEventListener('DOMContentLoaded', function () {
  // grab everything we need
  if (document.querySelector('.free_estimate_area')) {
    let squareFtInput = document.querySelector('[name=total_square_ft_input_for_office]');
    let quantityInput = document.querySelector('[name=month_week_for_office]');
    let quantityInput2 = document.querySelector('[name=one_time_cleaning_for_office]');
    let serviceTypeInput = document.querySelector('[name=service_type_office]');
    let total_frequency_rate = document.querySelector('#total_frequency_rate_for_office');
    let squareFt1 = document.querySelector('#total_square_ft_for_office');
    let classicBaseCharge = document.querySelector('#classic_base_charge_for_office');
    let final_price = document.querySelector('#final_price_for_office');

    // create functions we'll need
    function calculateCostOffice() {
      let squareFt = parseFloat(squareFtInput.value) || 0;
      let quantity = 0;

      // Get the selected service type
      let serviceType = serviceTypeInput.value;

      // Update based on service type
      if (serviceType === 'classic_service_for_office') {
        classicBaseCharge.innerText = '20.00';
        quantity = parseFloat(quantityInput.value) || 0;
        quantityInput2.setAttribute('disabled', 'true');
        quantityInput2.parentNode.parentNode.classList.add('select_disble');
        quantityInput.removeAttribute('disabled');
        quantityInput.parentNode.parentNode.classList.remove('select_disble');
        squareFt1.parentNode.classList.remove('select_disble');
      } else if (serviceType === 'one_time_for_office') {
        classicBaseCharge.innerText = '40.00';
        quantity = parseFloat(quantityInput2.value) || 0;
        quantityInput.setAttribute('disabled', 'true');
        quantityInput.parentNode.parentNode.classList.add('select_disble');
        quantityInput2.removeAttribute('disabled');
        quantityInput2.parentNode.parentNode.classList.remove('select_disble');
        squareFt1.parentNode.classList.remove('select_disble');
      } else {
        // Reset to default if not Recurring or One_time
        classicBaseCharge.innerText = '';
        quantityInput.removeAttribute('disabled');
        quantityInput.parentNode.parentNode.classList.remove('select_disble');
        quantityInput2.removeAttribute('disabled');
        quantityInput2.parentNode.parentNode.classList.remove('select_disble');
      }

      let frequency_total = squareFt * quantity;
      total_frequency_rate.innerText = frequency_total.toFixed(2);

      let baseCharge = parseFloat(classicBaseCharge.innerText) || 0;
      let finalPrice = frequency_total + baseCharge;
      final_price.innerText = finalPrice.toFixed(2);
    }

    // on first run
    calculateCostOffice();

    // add event listeners
    squareFtInput.addEventListener('input', calculateCostOffice);
    quantityInput.addEventListener('input', calculateCostOffice);
    quantityInput2.addEventListener('input', calculateCostOffice);
    serviceTypeInput.addEventListener('change', calculateCostOffice);
  }
});

document.addEventListener('DOMContentLoaded', function () {

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});











