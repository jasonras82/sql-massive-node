let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mainCtrl = require('./mainCtrl');
let app = express();
let port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/product', mainCtrl.create);
app.get('/api/products', mainCtrl.getAll);
app.get('/api/product/:productid', mainCtrl.getOne);
app.put('/api/product/:productid', mainCtrl.updateProduct);
app.delete('/api/product/:productid', mainCtrl.deleteProduct);

app.listen(port, () => {
  console.log('Listening on the awesome port of ' + port);
})
