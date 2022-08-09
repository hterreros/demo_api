//importaciones
const express = require ("express")
const app = express();
const PORT = 4000;

//middlewares
app.use(express.json())

//routes
app.get('/',(req, res)=>{
    return res.json({
        msg:"Hola mundo",
    })
})

//servidores
app.listen(PORT,()=>{
    console.log(`Servidor ejecutando en el puerto ${PORT}`)
})