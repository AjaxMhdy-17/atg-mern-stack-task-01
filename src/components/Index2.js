import React, {  } from "react";
import Banner2 from "./banner/Banner2";
import ContentBody2 from "./contentBody/ContentBody2";
import Header2 from "./header/Header2";
import MobileMenu from "./mobileMenu/MobileMenu";
import PostOptions2 from "./postOptions/PostOptions2";
import ModalContainer from "./ui/modal/ModalContainer";

const Index2 = (props) => {
  
  return (
    <div className="font-font_ibm">
      <ModalContainer show={props.show} handleClose={props.handleClose}/>
      <Header2 />
      <Banner2 />
      <PostOptions2 />
      <ContentBody2 />
      <MobileMenu handleShow={props.handleShow} />
    </div>
  );
};

export default Index2;
