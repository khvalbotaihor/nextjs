import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
    return (
        <>
            <Head><title>Next title index hello</title></Head>
            <meta name='keywords' content='next, javascript, nextjs, react'/>
            <meta name='description' content='this is utube tutorial for next'/>
            <meta charSet="utf-8" />
            <h1>Hello Next.JS!</h1>
            <p>lorem ipsum dolores</p>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href='/posts'><a>Posts</a></Link></p>
        </>
    )
}
