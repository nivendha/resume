import Typed,{TypedOptions} from "typed.js";
import "./index.css";


const typedElem = new Typed(".typed", {
  strings: ["I am <br/> frontend  <br/>  devloper", "I am  <br/>  backend  <br/> devloper"],
  typeSpeed: 30,
  backSpeed: 20,
  smartBackspace: true,
  showCursor: false,
  autoInsertCss: true,
  loop:true
} as TypedOptions);
