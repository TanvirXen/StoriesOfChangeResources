import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Layout({children,selected, setselected}){
return(
    <div className="Content">
    <Topbar/>
    <Navbar selected={selected} setselected={setselected}/>
    <main>{children}</main>
   
    <Footer/>
</div>
)
}