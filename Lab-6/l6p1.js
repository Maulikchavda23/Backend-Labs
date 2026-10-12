const fs = require("fs");

fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log("error ocuured");
    }
    else{
        console.log(data);
    }
})

fs.readFileSync("data.txt",(err,data)=>{
    if(err){
        console.log("error ocuured");
    }
    else{
        console.log(data.toString());
    }
})

const content1 = 'Hello, this is the text being written into the file!';

fs.writeFile('output.txt', content1, 'utf-8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully!');
});

const content2 = 'This text will be appended!\n';

fs.appendFile('output.txt', content2, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Text successfully appended to output.txt');
});

fs.unlink('temp.txt', (err) => {
    if (err) {
        console.error('Error deleting the file:', err.message);
        return;
    }
    console.log('File deleted successfully.');
});


fs.mkdir("abcd",(err)={
    if(err){
        console.log("error");
    }
});
