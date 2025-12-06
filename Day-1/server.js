const http = require('http')
const products=[
    {
        id:1,
        name:"Iphone",
        price:"1,80,000"
    },
    {
        id:2,
        name:"Nothing",
        price:"30,000"

    },
    {
        id:3,
        name:"Redmi",
        price:"18,000"
        
    }
]
const server= http.createServer((req,res)=>{
    console.log(typeof req);
    console.log(typeof res);
    console.log(req.url);
    console.log(req.method);



    if (req.method=='GET' &&  req.url=="/health"){
        return res.end('server is up and running ') // in node we have to return in order to get reponse 
    } else if (req.method=='GET' &&  req.url=="/products"){
        //get all products
        return res.end(JSON.stringify(products));

    }else if(req.method=='POST' &&  req.url=="/products"){
        //Create new product
        let body='';
        req.on('data',(chunk)=>{
            body= body+ chunk.toString();
        });


        req.on('end',()=>{
            console.log(`data is ${body}`);
        })
        
        const newProduct={
            id:4,
            name:"Samsung",
            price:"50,000"
        }
        products.push(newProduct);
        return res.end(JSON.stringify(products));

    }
})


const PORT= 5000

server.listen({
    host:'localhost',
    port:PORT
},()=>{
    console.log(`Server running on port : ${PORT}`);
})