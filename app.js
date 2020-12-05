const Joi = require('joi');
const express = require('express');
const app = express();


app.use(express.json()); //middleware

const courses = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'}
];

app.get('/',(req, res)=>{
    res.send("Hello World");
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.post('/api/courses', (req,res)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const {error} = schema.validate(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const newCourse = {
       id: courses.length+1,
       name: req.body.name
   };
    courses.push(newCourse);

    res.send(newCourse);

});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(course=> course.id===parseInt(req.params.id));
    if(!course) //404
        res.status(404).send('The course with the given ID was not found.');
    else
        res.send(course);
})


const port = process.env.PORT || 3000;
console.log(port);
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`)
})
