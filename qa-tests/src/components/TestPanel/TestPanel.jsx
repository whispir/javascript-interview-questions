import React, {useState} from "react";

export const TestPanel = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const handleClick = () => {
        setIsLoading(true); 

        setTimeout(() => {
            setIsLoading(false); 
            setData(Math.random());
        }, 500);
    }


    return <div className = "test-panel"> 
        <div className ="loading-indicator"><span>&nbsp;</span>{isLoading && <span>Loading...</span>}</div>
        <div className = "data-display"><span>&nbsp;</span>{data && <span>{JSON.stringify(data)}</span>}</div>
        <button onClick = {handleClick}>Click Me!</button> 
    </div>
}