<script> document.addEventListener("DOMContentLoaded", function(event) { var thisHost = document.location.hostname; var storyNavHeight = document.getElementById('story-nav').offsetHeight; if ( thisHost == 'm.startribune.com' || thisHost == 'vm-m.startribune.com' ) { var elem = document.querySelector('.site-container'); } else { var elem = document.querySelector('.page-article'); } elem.style.paddingTop = 0 + 'px'; }); </script> < script type = "text/javascript" > $('.site-header nav').click(function() { $('.site-header nav').toggleClass('open'); });

var scene = new ScrollMagic.Scene({ triggerElement: ".subhead-module" }).on('enter', function() { $('.strib-logo.white').css({ opacity: 0, transition: '1s opacity', });
  $('li.label').css({ color: '#333', transition: '1s color', });
  $('li.link').css({ display: 'block', });
  $('nav.story-nav').css({ background: 'rgba(255, 255, 255, 1)', borderBottom: '1px solid #DADADA', transition: '1s all', });
  $('.strib-logo.color').css({ opacity: 1, transition: '1s opacity', });
  $('ul.dropdown').css({ background: 'rgba(255, 255, 255, 1)', transition: '1s all', });
  $('span.caret').css({ opacity: 1, transition: '1s opacity', }); }).on('leave', function() { $('nav.story-nav').css({ background: 'rgba(255, 255, 255, 0)', borderBottom: '1px solid transparent', transition: '1s all', });
  $('.strib-logo.white').css({ opacity: 1, transition: '1s opacity', });
  $('li.label').css({ color: 'white', transition: '1s color', });
  $('li.link').css({ display: 'none', });
  $('.strib-logo.color').css({ opacity: 0, transition: '1s opacity', });
  $('ul.dropdown').css({ background: 'rgba(255, 255, 255, 0)', transition: '1s all', });
  $('span.caret').css({ opacity: 0, transition: '1s opacity', }); }).addTo(controller);
var triggerHook = scene.triggerHook(0.3); < /script>
