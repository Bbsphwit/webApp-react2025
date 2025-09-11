export default function Count() {
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState('0');
    return (<>
        <div>
            <p>Type cm.</p>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <p>{parseFloat(value)} cm. = {parseFloat(value / 10).toFixed(2)} m.</p>
            <p>{parseFloat(value)} cm. = {parseFloat(value * 0.393701).toFixed(2)} in.</p>

            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Clear</button>

        </div>
    </>
    );
};