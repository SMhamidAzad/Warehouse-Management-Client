import { useState } from "react";

const useReload = ()=>{
    const [isReload,setIsReload]=useState(false);
    return [isReload,setIsReload];
}
export default useReload;