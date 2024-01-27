import express from "express"
import {connect}  from "./config/database.js";
import {Tweet} from "./models/tweet.js"
const app = express();

app.listen(3000, async() => {
    
    
    console.log("server started at 3000");
    // mongo db connection establishment
    connect();
    console.log("Mangoose db connected");

    Tweet.create({
        content: "This is my first tweet",
        likes: 100,
        noOfTweets: 14,
        comment: "this is my first comment"
        
    })
})