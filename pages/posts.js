import {MainLayout} from "../components/MainLayout";
import {useState, useEffect} from 'react';

export default function Posts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function load() {
            fetch("http://localhost:4200/posts")
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