
export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
    image: string
    imageHeight: number
    imageWidth: number
}

const blogs: Blog[] = [
	{
        title: "Blog Intro",
        date: "2023-10-18",
        description: "This is my intro to my blog on this website.",
        slug: "blog1",
        image: "/PortugalbytheBeach.png",
        imageHeight: 300,
        imageWidth: 300,
    },
    {
        title: "First Blog",
        date: "2023-10-18",
        description: "This is my first blog on this website.",
        slug: "blog2",
        image: "/FirstdayofWorkshopProjector.png",
        imageHeight: 270,
        imageWidth: 350,
    },
];

export default blogs; // This will allow us to access this data anywhere!