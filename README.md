# MyFTP
 
## <a name='TOC'>Summary</a>

* [Rules](#rules)
* [Overview](#overview)
* [Credits](#credits)

## <a name='overview'>Rules</a>

* I create a git repository named `myFtp`
* * I create a file called `.author` with your username followed by a newline:

```sh
~/codingbad/network/myFtp ❯❯❯ cat -e .author
faiza$
```

## <a name='overview'> Overview</a>

The purpose of this challenge is to create an FTP client and server.
I use the file RFC959

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

## <a name='credits'>Credits</a>

Faiza Akabli.
