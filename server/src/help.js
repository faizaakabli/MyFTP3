import fs from 'fs';

export function help(socket){
    let rawdata = fs.readFileSync(`${_dirname}/help.json`);
    let date = JSON.parse(rawdata).help;
    let answer = "---commands not found---\n";
    for (const [key, value] of Object.entries(data)){
        answer+= `${key} : ${values} \n`;
    }
    return answer;
}