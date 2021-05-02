import Link from "next/link";

export function MainLayout({children}) {
    return (
        <>
            <nav>
                <Link href=''><a></a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}