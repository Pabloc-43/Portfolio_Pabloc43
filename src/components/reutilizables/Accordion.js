import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import CertificadoInfo from "./CertificadoInfo";


const Accordion = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const showTitle = questionsAnswers.find(x => x.id === activeIndex)
  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description h-100" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold activo" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
        <>     

      <AccordionItem key={index}
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      /></>
    );
  });

  return (
    <>
    <CertificadoInfo Img={showTitle.Img} />   
    <div className="faq ">
      <h1 className="faq__title m-">Formacion:</h1>
      <dl className="faq__list ">{renderedQuestionsAnswers}</dl>
    </div>

    </>
  );
};

export default Accordion;