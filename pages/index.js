import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
    return (
        <>
            <Head><title>Next title index hello</title></Head>
            <h1>Hello Next.JS!</h1>
            <p>lorem ipsum dolores</p>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href='/posts'><a>Posts</a></Link></p>
        </>
    )
}