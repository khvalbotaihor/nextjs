import NextNprogress from 'nextjs-progressbar';
import '../styles/main.scss'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps}/>
{/*            <style jsx global>{`
            body {
                font-family: 'Zen Dots', cursive;
            }
            `}</style>*/}
        </>
    )
}