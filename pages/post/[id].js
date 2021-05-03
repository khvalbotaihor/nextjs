import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function Post({posts}) {
    const router = useRouter()
    return <MainLayout title={'Post page'}>
        <h1>Post {router.query.id}</h1>
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
    </MainLayout>
}