import { useEffect, useState } from "react";
import useReload from "./useReload";

const useProduct = () => {
    const [products, setProducts] = useState([])
    const [isReload, setIsReload] = useReload();
    useEffect(() => {
        fetch('https://blooming-hollows-74511.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
    return [products, setProducts]
}
export default useProduct;