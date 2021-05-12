const express=require('express'),app=express(),PORT=3000;
app.use(express.static('web'));
app.listen(PORT, () =>{console.log(`listening on port: ${PORT}`)});
