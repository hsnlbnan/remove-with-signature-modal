import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignaturePad from "../SignaturePad";
import { modalVariants } from "@/variants";

function DeleteModal({ isOpen, setIsOpen, canvasWidth, removeSignature }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center"
        >
          <SignaturePad
            onBegin={() => setIsDrawing(true)}
            onEnd={() => setIsDrawing(false)}
            removeSignature={removeSignature}
            canvasWidth={canvasWidth}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DeleteModal;
