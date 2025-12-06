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

    }else if(req.method=='DELETE' &&  req.url.startsWith("/products/")){
        const id = Number(req.url.split('/')[2]);
        const index=  products.findIndex(product=>product.id === id);
        if (index==-1){
            res.statusCode= 404;
            return res.end("Product not found")
        }
        //Deletion part
        const deletedProduct= products.splice(index,1)
        return res.end(JSON.stringify({
            message:"Product deleted",
            response: products
        }))

    }else if(req.method=='PUT' &&  req.url.startsWith("/products/")){
        const id = Number(req.url.split('/')[2]);
        const index=  products.findIndex(product=>product.id === id);
        if (index==-1){
            res.statusCode= 404;
            return res.end("Product not found")
        }

        //storing body we get from request
        let body='';
        req.on('data',(chunk)=>{
            body= body+ chunk.toString();
        });


        req.on('end',()=>{
            console.log(`data is ${body}`);
            const data = JSON.parse(body);


            products[index]={id,...data};
            return res.end(JSON.stringify({
                message:"succesfully updated",
                response:products
            }))
        })
    }else if(req.method=='PATCH' &&  req.url.startsWith("/products/")){
        const id = Number(req.url.split('/')[2]);
        const index=  products.findIndex(product=>product.id === id);
        if (index==-1){
            res.statusCode= 404;
            return res.end("Product not found")
        }

        //storing body we get from request
        let body='';
        req.on('data',(chunk)=>{
            body= body+ chunk.toString();
        });


        req.on('end',()=>{
            console.log(`data is ${body}`);
            const data = JSON.parse(body);


            products[index]={...products[index],...data};//partial update
            return res.end(JSON.stringify({
                message:"succesfully updated",
                response:products
            }))
        })
    }
})


const PORT= 5000

server.listen({
    host:'localhost',
    port:PORT
},()=>{
    console.log(`Server running on port : ${PORT}`);
})