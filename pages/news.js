import Link from 'next/link'
import Head from 'next/head'
import fetch from "isomorphic-fetch"
import Layout from '../components/Layout'




const News = ({ news }) => {
        return (
                <>
                        <Head>
                                <title> NEWS PAGE</title> 
                        </Head>
                
                        <Layout title="News"> 

                                <div>
                                
                                        <h2>List of News</h2>

                                        {news.map((n, i) => (

                                                <p key={i}>
                                                
                                                        <a href={n.url}>{n.title}</a>

                                                </p>

                                        ))}


                                </div>
                        
                        </Layout>
                        

                </>
        )
}


News.getInitialProps = async () => {

        let news;

        try {
                const res = await fetch("https://hn.algolia.com/api/v1/search?query=react");

                news = await res.json();

        } catch (err) {
                console.log("ERROR", err);
                news = [];
        }
        return {
                news : news.hits
        }

}




export default News;