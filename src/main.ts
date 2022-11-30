import Typed, { TypedOptions } from "typed.js";
import anime from "animejs/lib/anime.es.js";

import "./index.css";

window.onload = function () {
  let mainTimeline = anime.timeline({
    easing: "easeOutExpo",
    // duration: 750,
  });

  mainTimeline
    .add({
      targets: ".triangle",
      borderRightWidth: [0, "100vw"],
    })
    .add(
      {
        targets: ".left-content .circle",
        width: "50vw",
      },
      "-=900"
    )
    .add(
      {
        targets: [".left-content .avatar", ".left-content .avatar-arc"],
        scale: [0, 1],
      },
      "-=900"
    )
    .add(
      {
        targets: ".arc-content",
        opacity: [0, 1],
      },
      "-=900"
    );

  mainTimeline.complete = () => {
    new Typed(".typed", {
      strings: [
        "I am <br/> frontend  <br/>  devloper",
        "I am  <br/>  backend  <br/> devloper",
      ],
      typeSpeed: 30,
      backSpeed: 20,
      smartBackspace: true,
      showCursor: false,
      autoInsertCss: true,
      loop: true,
    } as TypedOptions);
  };
};

// mainTimeline.play()
