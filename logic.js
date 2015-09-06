var stat = document.getElementById('static').getContext('2d');
var dyn = document.getElementById('dynamic').getContext('2d');

dyn.canvas.width = stat.canvas.width = window.screen.availWidth - 250;
dyn.canvas.height = stat.canvas.height = window.screen.availHeight;

stat.font = dyn.font = '11pt PT Sans';
stat.textBaseline = dyn.textBaseline = 'middle';

stat.fillText('I am static', 100, 100);
dyn.fillText('I am dynamic', 100, 120);
