import React from "react";
import Banner from "./banner/Banner";
import ContentBody from "./contentBody/ContentBody";
import Header from "./header/Header";
import MobileMenu from "./mobileMenu/MobileMenu";
import PostOptions from "./postOptions/PostOptions";
import ModalContainer from "./ui/modal/ModalContainer";

const Index = (props) => {
  return (
    <div className="font-font_ibm">
      <ModalContainer show={props.show} handleClose={props.handleClose} />
      <Header handleShow={props.handleShow} />
      <Banner />
      <PostOptions />
      <ContentBody />
      <MobileMenu handleShow={props.handleShow} />
    </div>
  );
};

export default Index;
