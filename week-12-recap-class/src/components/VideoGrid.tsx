import { VideoCard } from "./VideoCard"


const VIDEOS =[{
    title:"how to go",
    image: "youtube.jpg",
    thum:"music.jpg",
    aurthor:"sahil",
    views:"100k",
    timestamp:"2 days ago"
} ,
{
    title:"how to go college ",
    image: "youtube.jpg",
    thum:"music.jpg",
    aurthor:"sonia ",
    views:"100k",
    timestamp:"2 days ago"
},
{
    title:"how to play cricket ",
    image: "youtube.jpg",
    thum:"music.jpg",
    author:"fennix ",
    views:"100k",
    timestamp:"2 days ago"
},
{
    title:"how to play cricket ",
    image: "youtube.jpg",
    thum:"music.jpg",
    author:"fennix ",
    views:"100k",
    timestamp:"2 days ago"
},
{
    title:"how to play cricket ",
    image: "youtube.jpg",
    thum:"music.jpg",
    author:"fennix ",
    views:"100k",
    timestamp:"2 days ago"
},
{
    title:"how to play cricket ",
    image: "youtube.jpg",
    thum:"music.jpg",
    author:"fennix ",
    views:"100k",
    timestamp:"2 days ago"
},
{
    title:"how to play cricket ",
    image: "youtube.jpg",
    thum:"music.jpg",
    author:"fennix ",
    views:"100k",
    timestamp:"2 days ago"
}


]
export const VideoGrid =()=>{
    return <div className=" grid grid-cols-1
     md:grid-cols-2 lg:grid-cols-4 ">
{VIDEOS.map(video => <div>
    <VideoCard title={video.title}
      image={video.image}  thum={video.thum} author={video.author} viwes={video.views}
      timestamp={"20 days ago"}
      ></VideoCard>
</div>)}

    </div>
}