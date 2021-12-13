<div id="top"></div>

# MyFTP

## <a name='TOC'>Summary</a>

* [Rules](#rules)
* [Overview](#overview)
* [Credits](#credits)

## <a name='overview'>Rules</a>

* I create a git repository named `myFTP` with GITHub Desktop
* I create a file called `.author` with my name:

```sh
{
    "firstname": "Faïza",
    "lastname": "AKABLI"
}
```
* I create a FTP server and a client. The client must handle commands.
* In a fristime I used FaZilla 
* I used Javascript


<p align="right"><a href="#top">back to top</a></p>

## <a name='overview'> Overview</a>

The purpose of this challenge is to create an FTP client and server.
I use the file RFC959 https://datatracker.ietf.org/doc/rfc959/

The client must handle the following commands:

* `USER <username>`: check if the user exist
* `PASS <password>`: authenticate the user with a password
* `LIST`: list the current directory of the server
* `CWD <directory>`: change the current directory of the server
* `RETR <filename>`: transfer a copy of the file _FILE_ from the server to the client
* `STOR <filename>`: transfer a copy of the file _FILE_ from the client to the server
* `PWD`: display the name of the current directory of the server
* `HELP`: send helpful information to the client
* `QUIT`: close the connection and stop the program

#  USER 

```sh
const user = [
  { id: 1, username: "faiza", password: "faiza" }
]

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
```
Test with true user

```sh
USER faiza
Message received: 220 User exists. 
```
Test with wrong user

```sh
USER Faiza
Message received: 530 User doesn't exists. 
```

# PASS

```sh
const user = [
  { id: 1, username: "faiza", password: "faiza" }
]

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
```
Test with true password

```sh
PASS faiza
Message received: 230 Password Authentication is successfull. 
```
Test with wrong password
```sh
PASS Faiza
Message received: 530 Wrong Password. 
```

# LIST

```sh
export function list(socket) {
    fs.readdir(process.cwd(), (err, files) => {
      let list="";
      files.forEach(file=>{list+=file+"\r\n"})
      socket.write(list)  
    })      
};
```
```sh
Message received: .babelrc.js
nodemon.json
node_modules
package-lock.json
package.json
src
```

# CWD

````sh
try{
      process.chdir(args[0]);
      socket.write(`250 New directory, ${process.cwd()} \r\n`);
    } catch(err) {
       socket.write(`non-existent file, try another path \r\n`);
       }
````

```sh
CWD server
Message received: non-existent file, try another path 
````
````sh
CWD C:\Users\Faïza Akabli\Documents\EFREI B3\my-ftp\myFTP\asset
Message received: 250 New directory, C:\Users\Faïza 
````

# PWD

````sh
export function pwd(){
    console.log(process.cwd());
    return(process.cwd());
}
````

````sh
PWD
Message received: C:\Users\Faïza
````

# QUIT

````sh
socket.write("221 closing connection \r\n");
socket.destroy();
````

````sh
QUIT
Message received: 221 closing connection 
````

# HELP

````sh
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
````

````sh
 "HELP":

            USER <username>: check if the user exist

            PASS <password>: authenticate the user with a password

            LIST: list the current directory of the server

            CWD <directory>: change the current directory of the server

            RETR <filename>: transfer a copy of the file FILE from the server to the client    

            STOR <filename>: transfer a copy of the file FILE from the client to the server    

            PWD: display the name of the current directory of the server

            HELP: send helpful information to the client

            QUIT: close the connection and stop the program
````
## <a name='credits'>Credits</a>

* Faiza Akabli student at EFREI PARIS
* Contact me on Linkedin https://www.linkedin.com/in/fa%C3%AFza-akabli-b8544117b/

<p align="right"><a href="#top">back to top</a></p>
