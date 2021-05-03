import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Post({post: serverPost}) {

    const [post, setPost] = useState(serverPost);
    const router = useRouter();
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data)
        }
        if (!serverPost){
            load();
        }
    }, [])

    if (!post){
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }

    return <MainLayout title={'Post page'}>
        <h2>{post.title}</h2>
        <hr/>
        <p>{post.body}</p>
        <Link href='/posts'><a>Back to posts</a></Link>
    </MainLayout>
}

Post.getInitialProps = async ({query, req}) => {
    if (!req) {
        return {post: null}
    }
    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const post = await response.json();
    return {
        post
    }
}

/*
export async function getServerSideProps({query, req}) {
/!*    if (!req) {
        return {post: null}
    }*!/
    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const post = await response.json();
    return {props: {post}}
}*/