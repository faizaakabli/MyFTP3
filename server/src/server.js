import { createServer } from "net";
// import {checkUser} from "./checkUser";
import { cwd } from "./cwd";
import { pwd } from "./pwd";
import { help } from "./help";
import { checkPassword} from "./checkPassword";
import { list } from "./list";



export function launch(port) {
  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);

      switch(command) {
        case "USER":
          socket.write(checkUser(args[0]));
          break;
        case "PASS":
          socket.write(checkPassword(args));
          break;
        case "SYST":
          socket.write("215 \r\n");
          break;
        case "CWD":
          cwd(args);
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
          socket.write(help());
          break;
        //case "LIST":
          //socket.write(  )
        case "QUIT":
          socket.write("221 closing connection \r\n");
          socket.write(end());
          socket.write(destroy());
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

// const user = [
//   { id: 1, username: "faiza", password: "faiza" }
// ]

// export function verifUserExist (username) {
//   let result = false;
//   for (const user of user) {
//       if(user.username == username)
//           result = true;
//   }
//   return result;
// };

// export function checkUser (args) {
//   let result = ''
//   if(verifUserExist(args))
//       result = "220 User exists. \r\n";
//   else
//       result = "530 User doesn't exists.\r\n";

//       return result;
// };
