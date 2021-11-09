const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// new tech requirement - npm cloudinary
const cloudinary = require('cloudinary').v2
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);



 


// image upload - npm cloudinary
const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dqjpkb3xf/mh/upload';
const cloudinaryUploadPreset = 'wk3fcptv/mh/upload';
// const imgPreview = document.getElementById('')

const url = cloudinaryAPI;
const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: JSON.stringify({
    a: 10,
    b: 20
  })
};

fetch(url, options)
  .then(response => {
    console.log(response.status);
  });

// cloudinary.uploader.upload_stream(
//   { agent: myAgent },
//   function(error, result) { console.log(result); }
// );










sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening!!!'));
});