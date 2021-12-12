export function pass(socket, args){
    if(socketArray[socket.id] != ""){
        let user = socketArray[socket.id];
        if(args== user.password){
            socket.write(`Authentifacted as ${user.name}`)
        }
        else{
            $socket.write("Invalid password");
        }
    }
}