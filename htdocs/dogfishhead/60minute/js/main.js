$(function () {
    var body = $('body');
    var backgrounds = [
      'url(img/1.jpg)', 
      'url(img/2.jpg)',
      'url(img/3.jpg',
      'url(img/4.jpg'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 500);
    }
    setTimeout(nextBackground, 500);
    body.css('background', backgrounds[0]);
});


