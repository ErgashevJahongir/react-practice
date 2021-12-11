import React, { useState } from "react";

function HookCounter() {
    const [count, setCount] = useState(7);
    const [name, setName] = useState("Joha");

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count {count} {name}
            </button>
        </div>
    );
}

export default HookCounter;
