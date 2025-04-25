import React from "react";
import Products from "../products";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";
import '../css/Product/casepc.css'
function CasePC(props) {

  // const renderProduct = (props) => {
  //   <div> NUM_PORTS : {props.NUMPORTS} </div>
  //   {props.CASE_TYPE}
  // }

  return (
    <div className="casepc"> 
      <Header/>

      <Footer/>
    </div>
  );
}

export default CasePC;
