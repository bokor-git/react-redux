import React from "react";

export function Rating() {
    return <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
}

function Star({selected}: { selected: boolean }) {
    return <>{selected ? <span><b>star</b> </span> : <span>star </span>}

    </>


}