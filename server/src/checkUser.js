/* import fs from 'fs';

export function checkUser(socket,args){    
    let message = "User does not exist";
    let rawdata = fs.readFileSync(`${_dirname}/./user.json`);
    socket.write("230 user logged in");
    if(response.password != null){
        socketArray[socket.id] = response;
        socket.write(`Please enter password for user ${response["name"]}`);
    }
    else{
        socket.write(response);
    }
} */
const user = [
    { id: 1, username: "faiza", password: "faiza" }
]

export function verifUserExist (username) {
    let result = false;
    for (const user of user) {
        if(user.username == username)
            result = true;
    }
    return result;
};

export function checkUser (args) {
    let result = ''
    if(verifUserExist(args))
        result = "220 User exists. \r\n";
    else
        result = "530 User doesn't exists.\r\n";

        return result;
};

