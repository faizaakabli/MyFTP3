export function cwd(args, socket){
    process.chdir(args.toString);
    socket.write("You are in the directory: " +args)
}