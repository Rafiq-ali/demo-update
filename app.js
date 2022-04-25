const app=require('express')();
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
require('./routes/index')(app)
const port =6000
app.listen(port,()=>{console.log(`server is listening at ${port}`)})
