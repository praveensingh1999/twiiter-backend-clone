import express from "express"
import {connect}  from "./config/database.js";
import Tweet from "./models/tweet.js"
import  Hashtag  from "./models/hashtag.js";
import TweetRepository from "./repository/tweet-repository.js";
const app = express();

app.listen(3000, async() => {
    
    
    console.log("server started at 3000");
    // mongo db connection establishment
    connect();
    console.log("Mangoose db connected");

    // Tweet.create({
    //     content: "This is my first tweet",
    //     likes: 100,
    //     noOfTweets: 14,
    //     comment: "this is my first comment"
        
    // })

    // Hashtag.create({
    //     text: "travel",
    //     tweets: ['65b546b36ab8e3ed8f67d0d7']
    // })

    // const tweetRepo =  new TweetRepository();
    // let tweets = await tweetRepo.getAllTweets();
    // console.log(tweets);

    // const tweetRepo =  new TweetRepository();
    //  let tweet = await tweetRepo.getTweets("65b5470fe33d8b3a40dce007");
    //  console.log(tweet);

    const tweetRepo =  new TweetRepository();
     let tweet = await tweetRepo.deleteTweets({
        "_id": "65b5470fe33d8b3a40dce007"
     });
     console.log(tweet);
})