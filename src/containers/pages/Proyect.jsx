import Layout from "../../hocs/layouts/Layout";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import Header from "../../components/proyects/Header";
import ProyectList from "../../components/proyects/ProyectList";
import {useEffect} from "react";

function Proyect(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
                <div className="pt-28">
                    <Header/>
                    <ProyectList/>
                </div>
            <Footer/>
        </Layout>
    )
}

export default Proyect