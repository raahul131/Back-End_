const { log } = require("console");
const fsPromises = require(`fs`).promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "PromiseWrite.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "PromiseWrite.txt"),
      "\n\nNice to meet you.."
    );
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log(`Hello...`);

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you in write file",
//   (err) => {
//     if (err) throw err;
//     console.log(`write complete`);

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is....",
//       (err) => {
//         if (err) throw err;
//         console.log(`Append complete`);

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newreply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log(`Rename complete`);
//           }
//         );
//       }
//     );
//   }
// );
