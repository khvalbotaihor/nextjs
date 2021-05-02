import Link from 'next/link'

export default function Index() {
    return <>
        <h1>Hello Next.JS!</h1>
        <p>lorem ipsum dolores</p>
        <p><Link><a>About</a></Link></p>
        <p><Link><a>Posts</a></Link></p>
        </>
    
}