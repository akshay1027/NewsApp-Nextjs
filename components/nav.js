import Link from "next/link"

const navStyle= {
     marginTop:"-10",
     textAlign:"center",
     color: "#1e8059",
};

const nav = () =>{
    return (
        <div style={{}}>
           <h1 style={navStyle}>News app</h1>
           <h4 style={navStyle}><i>Aggregated country-wise</i></h4>
           <form inputMode="search" placeholder="Enter country name, Eg:India"></form>
        </div>
    )
} ;

export default nav