import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import fetch from "isomorphic-fetch"
import Layout from '../components/Layout'




const News = ({ news }) => {


        const [ searchQuery, setSearchQuery ] = useState('react')


        const handleTextChange = e => {
                setSearchQuery(e.target.value)
        }

        const handleSubmit  = e => {
                e.preventDefault()
                Router.push(`/news/?searchTerm=${searchQuery}`)
        }

        // const searchForm = () => {

        //         <form onSubmit={handleSubmit()}>
        //         <input type="text" value={searchQuery} onChange={handleTextChange()} />
        // </form>

        // }


        return (
                <>
                        <Head>
                                <title> NEWS PAGE</title> 
                        </Head>
                
                        <Layout title="News"> 

                                <div>
                                
                                        <h2>List of News</h2>

                                        <form onSubmit={handleSubmit}>
                                                <input type="text" value={searchQuery} onChange={handleTextChange} />
                                                <button type="submit">search</button>
                                        </form>


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


News.getInitialProps = async ({query}) => {

        let news;

        try {
                const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm}`);

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