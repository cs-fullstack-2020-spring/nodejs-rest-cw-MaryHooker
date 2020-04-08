//Node.js REST CW

//Pull in express module using require
let express = require('express');

//Create a web server and store inside app
let app = express();

//Save port under variable
let port = 8000;

//Tell express to use json middleware for requests/responses
app.use(express.json());

//Create a port to listen for requests
app.listen(port, () => {
    console.log(`Listening on port ${port}`);           
})

//REST CREATE/POST - Create in CRUD
app.post('/post/:id', (req, res) => {
    req.body.status = 'CREATED';
    //return the created post
    res.send(req.body)
})

//REST GET - Read in CRUD
app.get('/post/:id', (req, res) => {
    let jsonBlogPost = {
        postID: req.params.id,
        postTitle: "My World",
        postText: "What a wonderful world it is!", 
    };
    
    //return the blog post
    res.send(jsonBlogPost);
})

//REST UPDATE/PUT - update in CRUD
app.put('/post/:id', (req, res) => {
    req.body.status = 'UPDATED'
    res.send(req.body);
})

//REST DELETE - Delete in CRUD
app.delete('/post/:id', (req, res) => {
    let jsonBlogPost = {
        postID: req.params.id,
        postTitle: "My World",
        postText: "What a wonderful world it is!",
        status:'DELETED' 
    };
    //return deleted blog post
    res.send(jsonBlogPost);
})