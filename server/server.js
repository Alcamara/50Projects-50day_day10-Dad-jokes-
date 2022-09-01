const express = require('express')
const axios = require('axios');
const app = express()


const post = 5000;


app.use(express.static('server/public'));

app.listen(post, ()=>{
    console.log('listening on port:', post)
})

app.get('/Chuck-jokes', (req,res)=>{
    axios({
        url:'https://backend-omega-seven.vercel.app/api/getjoke',
        method:'GET'
    }).then((resp)=>{
       
        res.send(resp.data[0]);
    })
})


