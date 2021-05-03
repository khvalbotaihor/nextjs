import {MainLayout} from "../components/MainLayout";
import {useState, useEffect} from 'react';

export default function Posts() {

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
           <pre>
               {JSON.stringify([], null, 2)}
           </pre>
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