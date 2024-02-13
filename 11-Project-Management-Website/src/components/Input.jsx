export default function Input({ label, textArea, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textArea ? <textarea {...props}></textarea> : <input {...props} />}
    </p>
  );
}
