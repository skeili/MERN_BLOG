import "./Int.css";
import { Link } from "react-router-dom";

export default function Int() {

 return (
   <div>
     <div class="intro">
     <div class="scan">
		<div class="fingerprint"></div>
		<h3>Skanowanie...</h3>
    <Link className="link2" to="/home">
              Przyłóż Palec
            </Link>
  </div> 
</div>
 </div>
 ); 

}

