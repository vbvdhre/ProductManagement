const express = require('express');
const app = express();
app.use(require('./api'));
app.listen(3000, () => {
  console.log("serevr listening on 3000");
})
