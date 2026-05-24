"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { Arrow } from "@/components/ui/Arrow";

export type SuccessModalHandle = {
  open: () => void;
  close: () => void;
};

// Native <dialog> gives us focus trap + ESC-closes-modal for free.
// Backdrop click is handled explicitly so the user can dismiss outside the card.
export const SuccessModal = forwardRef<SuccessModalHandle>(function SuccessModal(_, ref) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    },
  }));

  function onDialogClick(e: React.MouseEvent<HTMLDialogElement>) {
    // Detect backdrop click — the dialog element itself fills the viewport
    // when modal, so clicking it directly (not its children) means backdrop.
    if (e.target === dialogRef.current) dialogRef.current.close();
  }

  return (
    <dialog ref={dialogRef} className="success-modal" onClick={onDialogClick}>
      <div className="success-modal__card">
        <button
          type="button"
          className="success-modal__close"
          aria-label="Close"
          onClick={() => dialogRef.current?.close()}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>
        <div className="success-modal__check" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 11l4 4 8-10" />
          </svg>
        </div>
        <h3 className="success-modal__title">Thanks — request received.</h3>
        <p className="success-modal__body">
          Someone from Skintuitive will be reaching out shortly.
        </p>
        <div className="success-modal__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => dialogRef.current?.close()}
          >
            Got it
            <Arrow size={14} />
          </button>
        </div>
      </div>
    </dialog>
  );
});
