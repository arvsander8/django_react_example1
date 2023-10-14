import Layout from "../../../hocs/layouts/Layout";
import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/navigation/Footer";
import { useEffect } from "react"
import HooksList from "../../../components/hooksList/HooksList";
import ExReducer from "../../../components/hooksUseReducer/ExReducer";
function HooksUseReducer(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <HooksList/>
            <div className="pt-28">
                <ExReducer/>
            </div>

            <Footer/>
        </Layout>
    )
}
export default HooksUseReducer