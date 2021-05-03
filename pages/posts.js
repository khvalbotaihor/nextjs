import {MainLayout} from "../components/MainLayout";
import {useState, useEffect} from 'react';

export default function Posts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function load() {
          const response = await fetch("http://localhost:4200/posts");
          const json = await response.json();
          setPosts(json)
        }
    },[])

    return (
        <MainLayout title={'Posts page'}>
            <h1>Posts Page</h1>
            <p>lorem ipsum</p>
            <ul>

            </ul>
        </MainLayout>
    )
}