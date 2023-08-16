"use client";

import TrashIcon from "@/components/Icon";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import SignatureCanvas from "react-signature-canvas";
import { motion, AnimatePresence } from "framer-motion";
import { modalVariants } from "@/variants";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [signature, setSignature] = useState(null);
  const sigCanvas = useRef(null);
  const modalRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(600);

  const removeSignature = useCallback(() => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setIsEmpty(true);
    }
  }, [sigCanvas]);

  const handleDelete = useCallback(() => {
    setModalOpen(true);
    setSignature(null);
    removeSignature();
  }, []);

  const [isEmpty, setIsEmpty] = useState(true);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (!isDrawing && sigCanvas.current) {
      setIsEmpty(sigCanvas.current.isEmpty());
    }
  }, [isDrawing, sigCanvas]);

  const handleSubmit = () => {
    if (sigCanvas.current) {
      setSignature(sigCanvas.current.toDataURL("image/png"));
    }

    setModalOpen(false);
  };

  const closeModal = (e) => {
    setModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCanvasWidth(window.innerWidth - 40);
      } else {
        setCanvasWidth(600);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <button
          className="bg-red-700 bg-opacity-30 text-red-700 border border-red-900  font-bold py-4 px-8 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <AnimatePresence mode="wait">
        {modalOpen && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center"
            ref={modalRef}
          >
            <div className="bg-[#111] rounded-lg p-8">
              <h1 className="text-2xl font-regular mb-4">Are you sure?</h1>
              <p className="text-gray-600 mb-8">
                Do you really want to delete these records? This process cannot
                be undone.
              </p>
              <div className="flex justify-center w-full relative">
                <SignatureCanvas
                  penColor="#fff"
                  backgroundColor="#333"
                  dotSize={2}
                  minDistance={3}
                  ref={sigCanvas}
                  onBegin={() => {
                    setIsDrawing(true);
                  }}
                  onEnd={() => {
                    setIsDrawing(false);
                  }}
                  canvasProps={{
                    height: 200,
                    width: canvasWidth,
                    className: "border border-gray-700 ",
                  }}
                />

                <button className="bg-red-700 w-8 h-8 text-white  first-letter:font-bold flex items-center justify-center rounded absolute right-1 top-2 ">
                  <TrashIcon
                    width={"18px"}
                    height={"18px"}
                    onClick={removeSignature}
                  />
                </button>
              </div>

              <div className="flex justify-center w-full mt-5">
                <button
                  className="bg-[#222] text-white w-full font-regular font-sm py-2 px-4 rounded mr-2"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>

                <button
                  className="bg-red-700 text-white w-full font-regular font-sm py-2 px-4 rounded
                disabled:opacity-50 disabled:cursor-not-allowed
                "
                  disabled={isEmpty}
                  onClick={handleSubmit}
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {signature && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center absolute bottom-0"
          >
            <Image src={signature} width={canvasWidth} height={200} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
