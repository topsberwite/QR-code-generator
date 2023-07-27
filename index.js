import * as fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";


inquirer
  .prompt([{
    message: "Type the URL",
    name: "URL",
  }])
  .then((answers) => {
    var url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("./qr-img.png"));

    fs.writeFile('./URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });


  
