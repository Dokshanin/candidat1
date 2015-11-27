// Show the first tab by default
$('.tabic-stage div').hide();
$('.tabic-stage div:first').show();
$('.tabic-nav li:first').addClass('tabic-active');

// Change tab class and display content
$('.tabic-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabic-nav li').removeClass('tabic-active');
  $(this).parent().addClass('tabic-active');
  $('.tabic-stage div').hide();
  $($(this).attr('href')).show();
});
