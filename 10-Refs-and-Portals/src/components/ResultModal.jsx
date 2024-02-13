import { forwardRef, useImperativeHandle, useRef } from "react";

// forwardRef ---> wrap the component in which ref want to pass. 
                // Inner function take 2 arguments.
                // 1) Props & 2) ref

const ResultModal =  forwardRef(function ResultModal({result, targetTime}, ref) {
    const dialog = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X second left.</strong></p>

            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;