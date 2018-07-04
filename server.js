const express = require ('express')
const cors = require('cors')
const app = express()
const data =require('./instructors')
const port = process.env.PORT || 3000

app.listen(port)

app.get('/', function (request, response){
    response.json({ data : data})
})

app.get('/:ID', function(request,response, next){
    var instructor = getInstructor(request.params.ID, data)
    if (!instructor){
        response.status(404).json({error:{
            message: 'Try again'
        }})
    }
    else{
        response.json(instructor)
    }
})

function getInstructor(id, dataArr){
    var test = dataArr.filter( instructor => {
        if(instructor.ID == id){
            return instructor
        }
        else{
            return null
        }
    })
    return test[0]
}