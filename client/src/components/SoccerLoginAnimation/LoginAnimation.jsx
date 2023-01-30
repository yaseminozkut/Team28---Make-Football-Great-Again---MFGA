import React, { useEffect, useRef } from "react";

import Lottie from "lottie-react";
import Soccer from "../../animations/soccer_login.json";

const LoginAnimation = () => {
  const container = useRef(null);

  //   useEffect(() => {
  //     const lottie = async () => {
  //       Lottie.loadAnimation({
  //         container: container.current,
  //         renderer: "svg",
  //         loop: true,
  //         autoplay: true,
  //         animationData: "../../animations/soccer_loading.json",
  //       });
  //     };

  //     lottie()
  //   }, []);

  return (
    <div>
      <div
        style={{
            position: "absolute",
            left: "10%",
            top: "3.5rem",
            width: "41%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={Soccer} loop={true}></Lottie>
      </div>

    </div>
  );
};

export default LoginAnimation;
