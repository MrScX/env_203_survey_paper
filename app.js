const fs= require("fs");
const express= require("express");

const app= express();

const port= process.env.PORT || 3000;

app.use((req,res,next)=>{

	let now= new Date().toString();

	let log= `${now}: ${req.method}, ${req.url}`;

	fs.appendFile("server.log",log+"\n",(err)=>{
		if(err)
			console.log(err);	
	});

	console.log(log);

	next();

});

app.use(express.static(__dirname+"/public"));

app.listen(port,()=> console.log(`server running on port ${port}`));



