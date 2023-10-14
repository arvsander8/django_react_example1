import Layout from "../../../hocs/layouts/Layout";
import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/navigation/Footer";
import { useEffect } from "react"
import HooksList from "../../../components/hooksList/HooksList";
import ExMount from "../../../components/hooksUseEffect/ExMount";
import ExChange from "../../../components/hooksUseEffect/ExChange";
import ExDeps from "../../../components/hooksUseEffect/ExDeps";
function HooksUseEffect(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <HooksList/>
            <div className="pt-28">
                <ExMount/>
            </div>
            <div className="pt-28">
                <ExChange/>
            </div>
            <div className="pt-28">
                <ExDeps/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default HooksUseEffect