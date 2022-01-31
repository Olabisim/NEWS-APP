import Link from 'next/link'
import Layout from '../components/Layout'
import Head from 'next/head'



const Index = () => {
        return (
                <>
                        <Head>
                                <title>HOME PAGE</title>
                        </Head>

                        <Layout />

                        <h1> hello from next</h1>
                
                        <img src="/static/bg.jfif" />
                
                </>

        )
}

export default Index