import {MainLayout} from "../components/MainLayout";
import {useState, useEffect} from 'react';
import Link from "next/link";

export default function Posts({posts}) {

/*    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function load() {
          const response = await fetch("http://localhost:4200/posts");
          const json = await response.json();
          setPosts(json)
        }
        load();
    },[])*/

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

Posts.getInitialProps = async () => {
    const response = await fetch("http://localhost:4200/posts");
    const posts = await response.json();

    return {
        posts
    }
}