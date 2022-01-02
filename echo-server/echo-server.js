const app = require('express')()


app.post('/',(req,res)=>{
    req.pipe(res)
})

app.listen(3000)