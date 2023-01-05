import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Thankyou({ setInCartProducts }) {
  return (
    <div className="thankyou">
      <motion.div
        className="thankyou-container"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <i class="bx bxs-check-circle"></i>
        <p className="message">Thank You For Your Purchase!</p>
        <p>Enjoy your trip down the rabbit hole!</p>
        <NavLink to="/products">
          <p className="continue">Continue Shopping</p>
        </NavLink>
      </motion.div>
    </div>
  );
}

export default Thankyou;
