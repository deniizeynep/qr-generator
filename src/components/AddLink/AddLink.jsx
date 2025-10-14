import "./style.css";

export default function AddLink({ link, setLink }) {
  return (
    <div>
      <h3>Please enter the link you want to convert</h3>
      <input
        type="text"
        autocomplete="off"
        name="text"
        class="input"
        placeholder="Enter link here"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
    </div>
  );
}
