const figlet = require("figlet");

figlet("Himanshu Kumar ", (err, data)=> {
    if(err){
        console.log("Something went wrong....");
        console.dir(err);
        return;
    }
    console.log(data);
})