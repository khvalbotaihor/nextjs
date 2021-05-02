import Link from "next/link";

export function MainLayout({children}) {
    return (
        <>
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/posts'><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
            position: fixed;
            top: 0;
            height:60px;
            left: 0;
            right: 0;
            background: darkblue;
            }
            nav a {
                color: #fff;
            }
            `}</style>
        </>

    )
}