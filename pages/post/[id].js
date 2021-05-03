import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";

export default function Post({post}) {
    return <MainLayout title={'Post page'}>
        <h2>{post.title}</h2>
        <hr/>
        <p>{post.body}</p>
        <Link href='/posts'><a>Back to posts</a></Link>
    </MainLayout>
}

Post.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post = await response.json();
    return {
        post
    }
}