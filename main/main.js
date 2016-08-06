let readline=require('readline');
let route=require('./route');
const repl=require('repl');

function SendToRoute(line) {
    console.log(line);
   let response=route(line);
    console.log(response.text);
    repl.start({prompt:">",eval:first});
    if(response.rerun){
        SendToRoute(line);
    }
}

function first(line) {
    let rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout,
        terminal:false
    });

    rl.on('line',function (line) {
        SendToRoute(line);
    });

    SendToRoute();
}
console.log(first(1));
// console.log(first(1));
// console.log(first('12345'));

module.exports=first;
