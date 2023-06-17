import React from "react";
import Nav from "../components/nav";
import Slide from "../components/slide";
import Footer from "../components/Footer";
import Testinomial from "../components/Testinomial";
import Section from "../components/Section";

const Home = () => {
   return (
       <div>
           <Nav/>
           <Slide/>
           <Section/>
           <Testinomial/>
           <Footer/>
       </div>
   );
};
 
export default Home;