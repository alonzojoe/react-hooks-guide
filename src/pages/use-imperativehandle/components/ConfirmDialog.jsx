import React, { useRef, useImperativeHandle, useEffect } from "react";
import Card from "@/components/UI/Card";

const ConfirmDialog = React.forwardRef((props, ref) => {
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
      <button className="btn-close-x btn-focus" ref={btnCloseRef}>
        &times;
      </button>
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <p className="fs-2">Are you sure?</p>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <button className="btn-focus btn btn-sm btn-primary" ref={btnYesRef}>
            Yes
          </button>
          <button
            className="btn-focus btn btn-sm btn-secondary"
            ref={btnCancelRef}
          >
            Cancel
          </button>
        </div>
      </div>
    </Card>
  );
});

export default ConfirmDialog;
