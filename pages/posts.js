import {MainLayout} from "../components/MainLayout";
import { useState, useEffect } from 'react';

export default function Posts() {

    const [posts, setPosts] = useState([])

    return (
        <MainLayout title={'Posts page'}>
            <h1>Posts Page</h1>
            <p>lorem ipsum</p>
        </MainLayout>
    )
}