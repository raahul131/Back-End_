const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const ws = fs.createReadStream("./files/new-lorem.txt");

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
