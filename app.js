// const express = require('express');

// const app = express();
// const os = require('os');


// const port = 1098;

// app.get('/', (req, res) => {
//     res.write("Anmol chutiya hai");
// }


// app.listen(port, () => {
//     console.log(`Server chalria hai ${port} pe`)
// }); 
var fs = require("fs"); 

// fs.writeFileSync('apna.txt', "acha to hm chalte hai khayal tera mejko rha sre dino hn");

// fs.appendFileSync('apna.txt', "     nahi nahi sahi h or kr b kya sket hai");
fs.readFile('apna.txt','utf-8', function(err, data) {

  if(err) throw (err);

console.log(data); 
});