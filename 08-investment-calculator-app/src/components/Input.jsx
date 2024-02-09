export default function Input({name, value, onInputChange, identifier}) {
    return (
        <div>
          <label htmlFor="inp">{name}</label>
          <input id="inp" type="number" value={value}  onChange={(event) => {onInputChange(event,identifier)}} />
        </div>
    );
}