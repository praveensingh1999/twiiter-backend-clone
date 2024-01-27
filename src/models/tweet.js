import { ObjectId } from "bson";
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String
    },
    likes: {
        type: Number
    },
    noOfRetweets: {
        type: Number
    },
    Comment: {
        type: ObjectId
    }
});

 export const Tweet = mongoose.model('Tweet',tweetSchema);

export default Tweet;