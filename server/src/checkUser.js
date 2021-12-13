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

