const path = require("path");

console.log("Directory Name: ", __dirname);
console.log("File Name: ", __filename);
console.log("Base Name: ", path.basename(__filename));
console.log("Extension Name: ", path.extname(__filename));

const finalPath = path.join("Users", "Arjun", "Document");
console.log("joined path: ", finalPath);

const wrongPath = "//folder///subfolder////file.txt";
const cleanPath = path.normalize(wrongPath);
console.log(cleanPath);

let inputPath = "../users/arjun";
if (path.isAbsolute) {
  console.log("Absolute Path");
} else {
  console.log("relative Path");
}

const absolutePath = path.resolve("folder", "subfolder", "file");
console.log(absolutePath);
