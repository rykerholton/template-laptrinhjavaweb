var maxHeight = 0;
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots:true,
  fade: true,
  autoplay: true,
  speed: 500,
 });
 $(window).bind("load", function() { 
  $('.course-title').each((index, ele) => {
    if ($(ele).height() > this.maxHeight) {
      this.maxHeight = $(ele).height();
    }
    return this.maxHeight;
  })
  $('.course-title').css("height",this.maxHeight + "px")
});