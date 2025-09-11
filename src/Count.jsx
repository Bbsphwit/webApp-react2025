import React from "react";

function Item({ name, isPacket }) {
  if (isPacket) {
    return (
      <li>
        {" "}
        {name} {isPacket && "✅"}
      </li>
    );
  }
}

export default function Count() {
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState("0");

  const numValue = parseFloat(value) || 0;

  return (
    <div>
      <ol>
        <Item name="flashlight" isPacket={true} />
        <Item name="sunglasses" isPacket={false} />
        <Item name="towel" isPacket={false} />
      </ol>

      <p>Type cm.</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>
        {numValue} cm. = {(numValue / 100).toFixed(2)} m.
      </p>
      <p>
        {numValue} cm. = {(numValue * 0.393701).toFixed(2)} in.
      </p>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Clear</button>
    </div>
  );
}
