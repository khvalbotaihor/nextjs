import {MainLayout} from "../components/MainLayout";
import {useState, useEffect} from 'react';
import Link from "next/link";
import {MyPost} from "../interfaces/post";

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostsPageProps) {

    const [posts, setPosts] = useState(serverPosts)
    useEffect(() => {
        async function load() {
          const response = await fetch("http://localhost:4200/posts");
          const json = await response.json();
          setPosts(json)
        }
        if (!serverPosts ){
            load()
        }
    },[])

    if (!posts){
        return (
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={'Posts page'}>
            <h1>Posts Page</h1>
            <p>lorem ipsum</p>
           <ul>
               {posts.map(post => (
                   <li key={post.id}>
                       <Link href={`/post/[]`} as={`/post/${post.id}`}>
                           <a>{post.title}</a>
                       </Link>
                   </li>
               ))}
           </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}) => {
    if (!req) {
        return {posts: null}
    }

    const response = await fetch("http://localhost:4200/posts");
    const posts: MyPost = await response.json();

    return {
        posts
    }
}