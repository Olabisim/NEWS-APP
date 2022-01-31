import Link from 'next/link'




const Nav = () => {
        return (


                <div>
                        <Link href="/">
                                <a>home page</a>
                        </Link>

                        <Link href="/news">
                                <a>news page</a>
                        </Link>
        
                </div>

        )


}

export default Nav