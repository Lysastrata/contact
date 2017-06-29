$('button').click(function() {
  var result1=$('#First').val();
  var result2=$('#Last').val();
  var result3=$('#description').val();
  $('.right').append('<div id="box"><p class="name">' + result1 + " " + result2 + '</p><p class="name">"Click for description"</p><p class="desc">'+result3+'</p</div>')
  $(document).on('click')
  $('.desc').hide();
  $('#box').click(function() {
    $('.name').toggle();
    $('.desc').toggle();
  })
  return false;
})
