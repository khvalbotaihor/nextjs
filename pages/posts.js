import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";


export default function Posts() {
    return (
        <MainLayout title='Posts page'>
            <Head><title>Posts page | Next course</title></Head>
            <h1>Posts Page</h1>
            <p>lorem ipsum</p>
        </MainLayout>
    )
}