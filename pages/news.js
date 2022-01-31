import Link from 'next/link'
import Head from 'next/head'
// import fetch from "isomorphic-fetch"
import Layout from '../components/Layout'




const News = () => {
        return (
                <>
                        <Head>
                                <title> NEWS PAGE</title> 
                        </Head>
                
                        <Layout />
                        
                        <p>hello from /news</p>

                </>
        )
}

export default News;