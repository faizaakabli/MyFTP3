const fs = require('fs'); 

export function list(socket) {
    fs.readdir(process.cwd(), (err, files) => {
      let list="";
      files.forEach(file=>{list+=file+"\r\n"})
      socket.write(list)  
    })      
};