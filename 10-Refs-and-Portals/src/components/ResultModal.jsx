export default function ResultModal({result, targetTime}) {

    // open ---> open the dialog.
    return (
        <dialog className="result-modal" open>
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X second left.</strong></p>

            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}