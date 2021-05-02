import Link from 'next/link'

export default function Index() {
    return (
        <>
            <h1>Hello Next.JS!</h1>
            <p>lorem ipsum dolores</p>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href='/posts'><a>Posts</a></Link></p>
        </>
    )
}