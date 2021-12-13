import { createServer } from "net";
//import {checkUser} from "./checkUser";
//import { cwd } from "./cwd";
import { pwd } from "./pwd";
import { help } from "./help";
//import { checkPassword} from "./checkPassword";
import { list } from "./list";
const fs = require('fs');

const user = [
  { id: 1, username: "faiza", password: "faiza" }
]
export function launch(port) {
  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);

      switch(command) {
        case "USER":
          socket.write(verifUserExist(args[0]));
          break;
        case "PASS":
          socket.write(VerifPasswordExist(args[0]));
          break;
        case "SYST":
          socket.write("215 \r\n");
          break;
        case "CWD":
          try{
            process.chdir(args[0]);
            socket.write(`250 New directory, ${process.cwd()} \r\n`);
          } catch(err) {
              socket.write(`non-existent file, try another path \r\n`);
          }
          break;
        case "FEAT":
          socket.write("211 \r\n");
          break;
        case "PWD":
          socket.write(pwd());
          break;
        case "TYPE":
          socket.write("200 \r\n");
          break;
        case "HELP":
          socket.write(`214, \n "HELP":\n
            USER <username>: check if the user exist\n
            PASS <password>: authenticate the user with a password\n
            LIST: list the current directory of the server\n
            CWD <directory>: change the current directory of the server\n
            RETR <filename>: transfer a copy of the file FILE from the server to the client\n
            STOR <filename>: transfer a copy of the file FILE from the client to the server\n
            PWD: display the name of the current directory of the server\n
            HELP: send helpful information to the client\n
            QUIT: close the connection and stop the program\n
            `);
          break;
        case "LIST":
          list(socket);
          break;
        case "QUIT":
          socket.write("221 closing connection \r\n");
          socket.destroy();
        default:
          console.log("command not supported:", command, args);
      }
    });

    socket.write("220 Hello World \r\n");
  });

  server.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
}

// fonction USER
export function verifUser(username) {
  let result = false;
  for (const users of user) {
      if(users.username == username)
          result = true;
  }
  return result;
};

export function verifUserExist(args) {
  let result = ''
  if(verifUser(args))
      result = "220 User exists. \r\n";
  else
      result = "530 User doesn't exists.\r\n";

      return result;
};

//fonction PASS
export function checkPassword (password) {
  let result = false;
  for (const user of user) {
      if(user.password == password)
          result = true;
  }
  return result;
};

export function VerifPasswordExist(args) {
  let result = ''
  if(checkPassword(args))
      result = "230 Password Authentication is successfull. \r\n";
  else
      result = "530 Wrong Password.\r\n";

      return result;
};