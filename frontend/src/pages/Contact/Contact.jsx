import React from "react";
import Header from "../../components/Header";
import ContactCard from "../../components/ContactCard";

const Contact = () => {
    return(
        <>
            <section>
                <Header></Header>
                <div style={{width : "100%", height:'100vh', alignContent:'center', justifyItems:'center'}}>
                    <ContactCard></ContactCard>
                </div>
            </section>
        </>
    )
}

export default Contact