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