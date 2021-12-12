const user = [
    { id: 1, username: "faiza", password: "faiza" }
]

export function checkUser (username) {
    let result = false;
    for (const user of user) {
        if(user.username == username)
            result = true;
    }
    return result;
};

export function verifUserExist (args) {
    let result = ''
    if(checkUser(args))
        result = "220 User exists. \r\n";
    else
        result = "530 User doesn't exists.\r\n";

        return result;
};

