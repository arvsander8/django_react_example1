import Layout from "../../../hocs/layouts/Layout";
import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/navigation/Footer";
import { useEffect } from "react"
import Counter from "../../../components/hooksUseState/Counter";
import TextChange from "../../../components/hooksUseState/TextChange";
import ThemeToogler from "../../../components/hooksUseState/ThemeToogler";
import HooksList from "../../../components/hooksList/HooksList";
function HooksUseState(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <HooksList/>
            <div className="pt-28">
                <Counter/>
            </div>
            <div className="pt-28">
                <TextChange/>
            </div>
            <div className="pt-28">
                <ThemeToogler/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default HooksUseState