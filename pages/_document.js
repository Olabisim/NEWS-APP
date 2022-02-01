import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
                        

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
                
                <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet" />

                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

                <link href="public/static/cards.css" rel="stylesheet" />
                
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}