$(function () {
  // scroll body to 0px on click
  $('#back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $('.collapse-faq').on('shown.bs.collapse', function () {
    $(this).addClass('active')
  });
  $('.collapse-faq').on('hidden.bs.collapse', function () {
    $(this).removeClass('active')
  });

  $('.cart-fixed__head-small').on('click',function () {
    $('.cart-small').removeClass('active').addClass('inactive');
    $('.cart-full').removeClass('inactive').addClass('active');
    $('body').append('<div class="overlay"></div>');
  });

  $('.cart-fixed__head').on('click',function () {
    $('.cart-full').removeClass('active').addClass('inactive');
    $('.cart-small').removeClass('inactive').addClass('active');
    $('.overlay').remove();
  });

  $(document).mouseup(function (e){
    var div = $(".cart-full");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      $('.overlay').remove();
      $('.cart-full').removeClass('active').addClass('inactive');
      $('.cart-small').removeClass('inactive').addClass('active');
    }
  });

  $('.scrollbar').scrollbar();

  if ($(".branded-products__list").length) {
    $(".branded-products__box .scrollbar").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 50);
        event.preventDefault();
    });
  }
  if ($(".scroll-horizont").length) {
    $(".scroll-horizont").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 50);
        event.preventDefault();
    });
  }
  $(".nav-click").on('click', function() {
    $(this).toggleClass('active').next().slideToggle(500);
  });

  $('.js-chose').on('click', function () {
    var self = $(this);
    self.siblings().removeClass('active');
    self.addClass('active');
  });

  $('#collapseText').on('show.bs.collapse', function () {
    $(this).next().hide();
  });

  $('.product-item__media-thumb').on('click', function () {
    var self = $(this);
    var src = self.find('img').attr('src');
    var mainPhoto = $('#productPhoto');
    self.siblings().removeClass('active');
    self.addClass('active');
    mainPhoto.attr('src', src);
  })

  if ($('.main-slider').length) {
    $('.main-slider').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
        dots: false,
        startPosition: 1,
        dotsContainer: '#owl-dot',
        navContainer: '#owl-nav',
        navText: ['<i class="fa fa-angle-left" ></i>', ' <i class="fa fa-angle-right"></i> '],
        responsive : {
            // breakpoint from 768 up
            992 : {
                nav: true,
                dots: true,
            }
        }
    });
  }

  if ($('#price').length) {
    var price = document.getElementById('price');
    noUiSlider.create(price, {
      start: [ 450, 1050 ],
      step: 10,
      connect: true,
      //behaviour: 'tap',
      range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
          'min': 0,
          'max': 2000
      },
      format: {
        to: function ( value ) {
          return value + '';
        },
        from: function ( value ) {
          return value.replace('', '');
        }
      }
    });

    var priceValues = [
      document.getElementById('lower-value-price'), // 0
      document.getElementById('upper-value-price')  // 1
    ];

    price.noUiSlider.on('update', function(values, handle, unencoded, isTap, positions) {
      priceValues[handle].innerHTML = values[handle];
    });
  }

  if ($('#tape').length) {
    var tape = document.getElementById('tape');
    noUiSlider.create(tape, {
      start: [ 8, 20 ],
      step: 1,
      connect: true,
      //behaviour: 'tap',
      range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
          'min': 1,
          'max': 30
      },
      format: {
        to: function ( value ) {
          return value.toFixed(0) + '';
        },
        from: function ( value ) {
          return value.replace('', '');
        }
      }
    });

    var tapeValues = [
      document.getElementById('lower-value-tape'), // 0
      document.getElementById('upper-value-tape')  // 1
    ];

    tape.noUiSlider.on('update', function(values, handle, unencoded, isTap, positions) {
      tapeValues[handle].innerHTML = values[handle];
    });
  }

  if ($('[rel="popover"]').length) {
    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        animation: false,
        constraints: [
          {
            to: 'scrollParent'
          }
        ],
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    });
  }

  var dropdownMenuLinkText;
  $('#dropdownMenuLink').on('hidden.bs.dropdown', function () {
    $('#dropdownText').text(dropdownMenuLinkText);
  });
  $('#dropdownMenuLink').on('click', '.dropdown-item', function () {
    dropdownMenuLinkText = $(this).text();
    if ($(this).attr('data-group-link')) {
      var dataGroupLing = $(this).attr('data-group-link');
      $('.'+dataGroupLing).siblings().hide();
      $('.'+dataGroupLing).show();
    }
  });

  //Фенси
  $(".fancybox").fancybox({
    padding: 0
  });
});

