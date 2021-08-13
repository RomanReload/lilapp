import {chunk} from "lodash"





const chunkPosts = (posts:any[] , page:number) => {

if(posts.length === 0) {
    return [];
}
    return posts[page]
}


export default chunkPosts;