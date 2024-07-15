const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;



const Post = require('./schema/post'); 
const User = require('./schema/user');
const Comment = require('./schema/comments')

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
   
    req.userIp = req.ip; 
    next();
});


const dburl = 'mongodb+srv://ayushraghuvanshi03:ayush12345@test.riln2mz.mongodb.net/myntra';



mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Connection error:', err);
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.put('/posts', async (req, res) => {
    const userIp = req.userIp;


    try {
        const user = await  User.findOne({ ipAddress: userIp });
        const posts = await Post.find()
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: 'name userImage'
                }
            })
            .populate('user', 'name userImage');
        res.json({"data":posts,"user": user});
    } catch (err) {
        res.status(500).send(err);
    }
});


app.get('/users', async (req, res) => {
    try {
        const items = await User.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
});


// POST endpoint to create a new post
app.post('/posts', async (req, res) => {
    const userIp = req.userIp; // Assuming you have middleware to set req.userIp
  
    try {
      const {photos } = req.body;
  
      // Find or create the user based on IP address
      let user = await User.findOne({ ipAddress: userIp });
  
        
      // If user doesn't exist, create a new user
      if (!user) {
        user = new User({
          ipAddress: userIp,
          email: "demo@gmail.com",
          name: "Sanchi Chaurasia",
          userImage: "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
        });
        await user.save();
      }
  

      // Create a new post
      const newPost = new Post({ photos, user: user._id });
      const savedPost = await newPost.save();
  
      res.status(201).json(savedPost);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  

// POST endpoint to add a comment to a specific post
app.post('/posts/:postId/comment', async (req, res) => {
    const userIp = req.userIp; // Assuming you have middleware to set req.userIp
    const { postId } = req.params;
    const { commentText } = req.body;

    try {
       
        let user = await User.findOne({ ipAddress: userIp });
  
        // If user doesn't exist, create a new user
        if (!user) {
          user = new User({
            ipAddress: userIp,
            email: "demo@gmail.com",
            name: "Sanchi Chaurasia",
            userImage: "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
          });
          await user.save();
        }
    
        const newComment = new Comment({ commentText,user: user._id });
        const savedComment = await newComment.save();

        // Find the post and add the comment to it
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.comments.push(savedComment._id);
        await post.save();

        res.status(201).json(savedComment);
    } catch (err) {
        res.status(400).send(err);
    }
});

// PUT route to like or dislike a post
app.put('/posts/:postId/like', async (req, res) => {
    const { postId } = req.params;
    const userIp = req.userIp; 
    console.log(userIp)
    try {

        // Find the post
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Find or create the user based on IP address
        let user = await User.findOne({ ipAddress: userIp });

        // If user doesn't exist, create a new user
        if (!user) {
            user = new User({ ipAddress: userIp,email:"demo@gmail.com" ,name:"Sanchi Chaurasia",userImage:"https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"});
        }

        // Check if the user already liked the post
        
        const alreadyLikedIndex = user.likedPosts.findIndex(id => id == postId);
        
        if (alreadyLikedIndex === -1) {
            post.likes++;
            user.likedPosts.push(postId);
        } else {
            
            post.likes--;
            user.likedPosts.splice(alreadyLikedIndex, 1);
        }

        await post.save();
        await user.save();
        if(alreadyLikedIndex == -1){
            res.json({ message: 'Post liked successfully' });
        }else{
            res.json({ message: 'Post disliked successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
