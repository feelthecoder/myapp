import React, { useState } from "react";

function ConditionalRender(){

    const [isLightOn,setIsLightOn] = useState(false);

    const toggleLight = ()=>{
        setIsLightOn(!isLightOn)
    }

    return (
        <div>
            <button onClick={toggleLight}>
                {isLightOn?'Turn Off Light':'Turn On Light'}
            </button>
            {isLightOn && <p>The Light is on.</p>}
        </div>
    );
}

export default ConditionalRender;