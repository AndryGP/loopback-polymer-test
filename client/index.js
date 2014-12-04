var app = document.getElementById('app');

var open = function (page_name, details) {
  return function (context) {
    var params = context.params;
    var property;
    var element = document.createElement(page_name);
    for (property in params) {
      if (isNaN(property)) {
        element.setAttribute(property, params[property]);
      }
    }
    context.element = element;
    while (app.firstChild) app.removeChild(app.firstChild);
    app.appendChild(element);
    element.details = details;
    scroll(0,0);
  };
};

var onchange = function (event) {
  var url = event.detail;
  page.show(url);

};

app.addEventListener('click link', onchange);

var start = function () {
//  page('/', open('page-home'));
  page('/login', open('page-login'));
  page('/models', open('page-schema-list'));
  page('/models/:model', open('page-item-list'));
  page('/item/:model/:Id', open('page-form'));
  page('/item/:model', open('page-form'));
  page('/blog', open('page-blog'));
  page('/post/:Id', open('page-post'));
  page();

  console.log('Welcome to X-PROJECT!');
};



start();






