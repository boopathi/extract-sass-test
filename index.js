var scss = require('./styles.scss');
console.log(scss);

window.addEventListener('DOMContentLoaded', function() {
  var header = document.createElement('div');
  header.className = scss.header;
  var title = document.createElement('span');
  title.className = scss.title;
  title.innerHTML = 'Hmm...';

  header.appendChild(title);
  document.body.appendChild(header);
});
