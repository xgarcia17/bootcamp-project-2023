import connectDB from "./helpers/db"
import blogSchema from "./database/blogSchema"

export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
    // content: string
    // comments: {
    //     user: string,
    //     comment: string
    //     time: string
    // }
}

// const blogs: Blog[] = [
//    {
//         title: "Blog Intro",
//         date: "10-18-2023",
//         description: "This is my intro to my blog on this website.",
//         slug: "blog1",
//         content: "",
//         comments: {
//             user: "",
//             comment: "",
//             time: ""
//         }
//    },
//    {
//         title: "First Blog",
//         date: "",
//         description: "This is my first blog on this website.",
//         slug: "blog2",
//         content: "",
//         comments: {
//             user: "",
//             comment: "",
//             time: ""
//         }
//    }

   /*	{
        title: "Blog Intro",
        date: "2023-10-18",
        description: "This is my intro to my blog on this website.",
        slug: "blog1",
        image: "/PortugalbytheBeach.png",
        imageHeight: 300,
        imageWidth: 300,
        content: "",
    },
    
    {
        title: "First Blog",
        date: "2023-10-18",
        description: "This is my first blog on this website.",
        slug: "blog2",
        image: "/FirstdayofWorkshopProjector.png",
        imageHeight: 270,
        imageWidth: 350,
        content: "",
    },
*/
// ];
/*
async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await blogSchema.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}
*/
//export default blogs; // This will allow us to access this data anywhere!