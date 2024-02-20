import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = '' }) {
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current;
        if(open) {
            modal.showModal();
        }

        // clean up function.
        // close the modal when open = '' (false) or when component is unmounted. (unmounted means the component is removed from the DOM)
        return () => modal.close();
    }, [open]);

  return createPortal(
    <dialog onClose={onClose} ref={dialog} className={`modal ${className}`}>{children}</dialog>,
    document.getElementById("modal")
  );
}