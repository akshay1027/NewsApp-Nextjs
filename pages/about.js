import Link from "next/link"
import Layout from "../components/layout"
import Nav from "../components/nav"
const about = () =>{
    return(
        <div>
           <Nav />
           <h2>about page</h2>
           <Link href="/">
               <a>home page</a>
           </Link>
        </div>
    )
};

export default about