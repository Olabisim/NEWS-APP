import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import fetch from "isomorphic-fetch"
import Layout from '../components/Layout'




const News = ({ news }) => {


        const [ searchQuery, setSearchQuery ] = useState('react')
        const [ loading, setLoading ] = useState(false)


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


        // https://codepen.io/maheshambure21/pen/QwXaRw

        return (
                <>
                        <Head>
                                <title> NEWS PAGE</title> 
                        </Head>
                
                        
                        <section>
                        <h2>Circle Fill</h2>
                        <nav class="circle">
                                <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                </ul>
                        </nav>
                        </section>
                        <Layout title="News"> 

                                <div>
                                        <div class="one" style={{ textAlign: "center", paddingBottom:' 20px'}}>
                                                <h1 style={{ fontWeight: 900}}>search for the latest news</h1>
                                        </div>

                                        <div className="group">
                                        <form onSubmit={handleSubmit} className="handleForm">

                                                <div className="pseudo-search">
                                                        <input type="text" value={searchQuery} onChange={handleTextChange} />
                                                        <button type="submit">search <i className='class="fa fa-search'></i></button>
                                                </div>

                                        </form>
                                        </div>
                                        <div className="wrapper_work">

                                        {news.map((n, i) => (


                                                
                                                <main className="page-content" key={i} style={{width: '300px'}}>
                                                  <div className="card">
                                                    <div className="content">
                                                      <h2 className="title">{n.title}</h2>
                                                      <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                                                      <a href={n.url} target="_blank"><button className="btn">View link </button></a>
                                                    </div>
                                                  </div>
                                                </main>

                                        ))}

                                        </div>
                                        
                                        <style jsx>
                                        {`
                                        .wrapper_work {
                                                display: flex;
                                                flex-wrap: wrap;
                                                justify-content: space-around;
                                        }
                                        main.page-content {
                                                width: 300px !important;
                                                height: 400px;
                                        }
                                        div.card {
                                                padding: 10px;
                                                // margin: 10px;
                                        }

                                        .pseudo-search {
                                          display:inline;
                                          border:2px solid #ccc;
                                          border-radius:100px;
                                          padding:12px 40px;
                                          transition:background-color 0.5 ease-in-out;
                                        }
                                        .pseudo-search input {
                                          border:0;
                                          background-color:transparent;
                                          width:200px;
                                        }
                                        .pseudo-search input:focus { outline:none; }
                                        .pseudo-search button, .pseudo-search i {
                                          border:none;
                                          background:none;
                                          cursor:pointer;
                                        }
                                        .pseudo-search select { border:none; } 
                                            



                                        .handleForm {
                                                display: flex;
                                                justify-content: center;
                                                margin-bottom: 30px;
                                        }



                                                h1 {
                                                position: relative;
                                                padding: 0;
                                                margin: 0;
                                                font-family: "Raleway", sans-serif;
                                                font-weight: 300;
                                                font-size: 40px;
                                                color: #080808;
                                                -webkit-transition: all 0.4s ease 0s;
                                                -o-transition: all 0.4s ease 0s;
                                                transition: all 0.4s ease 0s;
                                                }

                                                h1 span {
                                                display: block;
                                                font-size: 0.5em;
                                                line-height: 1.3;
                                                }
                                                h1 em {
                                                font-style: normal;
                                                font-weight: 600;
                                                }

                                                .one h1 {
                                                text-align: center;
                                                text-transform: uppercase;
                                                padding-bottom: 5px;
                                                }
                                                .one h1::before {
                                                width: 28px;
                                                height: 5px;
                                                display: block;
                                                content: "";
                                                position: absolute;
                                                bottom: 3px;
                                                left: 50%;
                                                margin-left: -14px;
                                                background-color: #b80000;
                                                }
                                                .one h1::after {
                                                width: 100px;
                                                height: 1px;
                                                display: block;
                                                content: "";
                                                position: relative;
                                                margin-top: 25px;
                                                left: 50%;
                                                margin-left: -50px;
                                                background-color: #b80000;
                                                }



                                                



                                        `}

                                        

                                        </style>

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



// <main className="page-content">
//   <div className="card">
//     <div className="content">
//       <h2 className="title">Mountain View</h2>
//       <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
//       <button className="btn">View Trips</button>
//     </div>
//   </div>
//   <div className="card">
//     <div className="content">
//       <h2 className="title">To The Beach</h2>
//       <p className="copy">Plan your next beach trip with these fabulous destinations</p>
//       <button className="btn">View Trips</button>
//     </div>
//   </div>
//   <div className="card">
//     <div className="content">
//       <h2 className="title">Desert Destinations</h2>
//       <p className="copy">It's the desert you've always dreamed of</p>
//       <button className="btn">Book Now</button>
//     </div>
//   </div>
//   <div className="card">
//     <div className="content">
//       <h2 className="title">Explore The Galaxy</h2>
//       <p className="copy">Seriously, straight up, just blast off into outer space today</p>
//       <button className="btn">Book Now</button>
//     </div>
//   </div>
// </main>





                                                // <p key={i}>
                                                
                                                //         <a href={n.url}>{n.title}</a>

                                                // </p>