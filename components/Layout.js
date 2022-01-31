import Nav from './Nav'

const Layout = ({title, footer, children} ) => {

        return (

                <div>
        
                        <Nav />

                        <h1>{title}</h1>

                        {children}
                        {footer}

                </div>

        )


}

export default Layout;