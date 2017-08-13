var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
articleOne:{
    title: 'Article one | Preethi Ravi',
    heading: 'Atricle One',
    date: 'August 12,2017',
    content: ` <p>
                This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>
            <p>
                This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>
            <p>
                This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>`
       },
articleTwo:{
    title: 'Article two | Preethi Ravi',
    heading: 'Atricle Two',
    date: 'August 12,2017',
    content: `<p>
                This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article.
            </p>
            <p>
               This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second articl
            </p>
            <p>
                This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second article. This is the content of my second articl
            </p>`
},
articleThree:{
    title: 'Article three | Preethi Ravi',
    heading: 'Atricle Three',
    date: 'August 12,2017',
    content: `<p>
                This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article.
            </p>
            <p>
                This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article.            </p>
            <p>
                This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article.            </p>`
         },
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
            <hr/>
            <h3>
               ${heading}
            </h3>
        </div>
        <div>
          ${date}
        </div>
        <div>
          ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    //articleName = article-One
    //articles[articleName] = {} content object for article-One
    var articleName = req.params.articleName;
   res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui','article-two.html'));
});

app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui','Article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
