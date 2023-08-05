import React from "react";
import {  motion } from "framer-motion";

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {
  const headingAnimation = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },transition:{
      delay:0.2,
      ease:"easeIn"
    }
  };

  const textAnimation={
    ...headingAnimation, transition:{
      delay:0.3,
      ease:"easeIn"
    }
  }
  const btnAnimation={
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },transition:{
      delay:0.3,
      ease:"easeIn"
    }
  }
  const imgAnimation={
    initial: {
     scale:0.1,
      opacity: 0,
    },
    whileInView: {
      scale:1,
      opacity: 1,
    },transition:{
      delay:0.3,
      ease:"easeIn",
    }
  }

  return (
    <section
      className="section"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div>
        <motion.h3
          style={{
            color: headingColor,
          }}
          cursor-pointer={"true"}
          {...headingAnimation}
        >
          {h3}
        </motion.h3>
        <motion.p
          style={{
            color: textColor,
          }}
          cursor-pointer={"true"}
          {...textAnimation}
        >
          {text}
        </motion.p>
        {hasBtn && (
          <motion.button
            style={{
              color: btnColor,
              backgroundColor: btnBgColor,
            }}
            cursor-pointer={"true"}
            {...btnAnimation}
          >
            {btnTxt}
          </motion.button>
        )}
        <motion.div  {...imgAnimation}>
          <img src={imgSrc} alt="ImgSrc" style={{ width: imgSize }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
