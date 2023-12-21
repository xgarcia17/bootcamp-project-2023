import mongoose from "mongoose";
import { Schema } from "mongoose";

type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
type Portfolio = {
    title: string;
    slug: string; 
    content: string; // for individual portfolio page
    image: string;
    width: string;
    height: string;
    comments: IComment[]; // array for comments
};


// mongoose schema 
const portfolioSchema = new Schema<Portfolio>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    width: { type: String, required: true},
    height: { type: String, required: true},
    comments: [{
        user: {type: String, required: true},
        comment: {type: String, required: true},
        time: {type: Date, required: false, default: new Date()}
    }]
})

// defining the collection and model
const Portfolio = mongoose.models['Portfolios'] ||
mongoose.model('Portfolios', portfolioSchema);

export default Portfolio;