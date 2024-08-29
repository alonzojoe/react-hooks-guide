import React, { useRef, useImperativeHandle, useEffect } from "react";
import Card from "@/components/UI/Card";

const ConfirmDialog = (props, ref) => {
  const btnCloseRef = useRef();
  const btnYesRef = useRef();
  const btnCancelRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focusCloseBtn: () => btnCloseRef.current.focus(),
      focusYesBtn: () => btnYesRef.current.focus(),
      focusCancelBtn: () => btnCancelRef.current.focus(),
    };
  });

  return (
    <Card className="shadow py-4 position-relative" style={{ width: "20rem" }}>
      <button
        ref={btnCloseRef}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          padding: "5px",
          lineHeight: "10px",
          textAlign: "center",
          border: "none",
          cursor: "pointer",
          background: "#FD6366",
        }}
      >
        &times;
      </button>
      <div className="d-flex justify-content-center">
        <p className="fs-2">Are you sure?</p>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button
          className=""
          ref={btnYesRef}
          style={{
            background: `${
              btnYesRef.current === document.activeElement ? "red" : null
            }`,
          }}
        >
          Yes
        </button>
        <button className="" ref={btnCancelRef}>
          Cancel
        </button>
      </div>
    </Card>
  );
};

export default React.forwardRef(ConfirmDialog);
