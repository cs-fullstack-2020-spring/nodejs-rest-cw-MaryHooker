// //Node.js REST CW

// //Pull in express module using require
// let express = require('express');

// //Create a web server and store inside app
// let app = express();

// //Save port under variable
// let port = 8000;

// //Tell express to use json middleware for requests/responses
// app.use(express.json());

// //Create a port to listen for requests
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);           
// })

// //REST CREATE/POST - Create in CRUD
// app.post('/post/:id', (req, res) => {
//     req.body.status = 'CREATED';
//     //return the created post
//     res.send(req.body)
// })

// //REST GET - Read in CRUD
// app.get('/post/:id', (req, res) => {
//     let jsonBlogPost = {
//         postID: req.params.id,
//         postTitle: "My World",
//         postText: "What a wonderful world it is!", 
//     };
    
//     //return the blog post
//     res.send(jsonBlogPost);
// })

// //REST UPDATE/PUT - update in CRUD
// app.put('/post/:id', (req, res) => {
//     req.body.status = 'UPDATED'
//     res.send(req.body);
// })

// //REST DELETE - Delete in CRUD
// app.delete('/post/:id', (req, res) => {
//     let jsonBlogPost = {
//         postID: req.params.id,
//         postTitle: "My World",
//         postText: "What a wonderful world it is!",
//         status:'DELETED' 
//     };
//     //return deleted blog post
//     res.send(jsonBlogPost);
// })

// //CHALLENGE****************************************************************

// //create an empty array
// let blogPostArray = [
//     {
//         postID: 1,
//         postTitle: "My Planet",
//         postText: "What a wonderful planet it is!",
//     },
//     {
//         postID: 2,
//         postTitle: "My World",
//         postText: "What a wonderful world it is!",
//     },
//     {
//         postID: 3,
//         postTitle: "My Universe",
//         postText: "What a wonderful universe it is!",
//     }
// ];

// app.get('/post/allPosts',(req,res)=>{
//     let newArray= '';
//     blogPostArray.forEach((post)=>{
//         newArray= newArray + (`PostID: ${post.postID}, Title: ${post.postTitle}, Post: ${post.postText}`);
//     })

//     res.send(newArray)
// })
//***********************************************************/

//Point of entry
let express = require('express');
let app = express();

//tell express to use JSON middleware requests/responses
app.use(express.json());

//setup listener
const port = 2112;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//CRUD Create
app.post('/blogpost', (req,res) =>{
    req.body.status = 'CREATED'
    res.send(req.body);
})

//CRUD Read
app.get('/blogpost/:id', (req,res) =>{
    res.send(`Hit READ endpoint! ${req.params.id}`);
})

//CRUD Update
app.put('/blogpost/:id', (req,res) =>{
    // res.send(`Hit UPDATE endpoint! ${req.params.id}`);
    req.body.status = 'UPDATED'
    res.send(req.body);
})

//CRUD Delete
app.delete('/blogpost/:id', (req,res) =>{
    res.send(`Hit DELETE endpoint! ${req.params.id}`);
})