const app = require('./src/app');

const APP_PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('Here');
  res.render();
})

app.listen(APP_PORT, () => {
  console.log(`Now serving your Express app at http://localhost:${APP_PORT}`); // eslint-disable-line
});
