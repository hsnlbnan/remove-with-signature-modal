import { useCallback, useRef } from "react";
import TrashIcon from "../Icon";

const { default: ReactSignatureCanvas } = require("react-signature-canvas");

function SignaturePad({ onSignatureChange, onBegin, onEnd, canvasWidth }) {
  const sigCanvas = useRef(null);

  const removeSignature = useCallback(() => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      onSignatureChange(null);
    }
  }, [sigCanvas, onSignatureChange]);
  return (
    <div className="flex justify-center w-full relative">
      <ReactSignatureCanvas
        penColor="#fff"
        backgroundColor="#333"
        dotSize={2}
        minDistance={3}
        ref={sigCanvas}
        onBegin={onBegin}
        onEnd={onEnd}
        canvasProps={{
          height: 200,
          width: canvasWidth,
          className: "border border-gray-700 ",
        }}
      />
      <button className="bg-red-700 w-8 h-8 text-white first-letter:font-bold flex items-center justify-center rounded absolute right-1 top-2 ">
        <TrashIcon width={"18px"} height={"18px"} onClick={removeSignature} />
      </button>
    </div>
  );
}

export default SignaturePad;
