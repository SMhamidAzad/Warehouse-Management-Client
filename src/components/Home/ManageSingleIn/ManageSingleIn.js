import useProduct from '../../hooks/useProduct';
import useReload from '../../hooks/useReload';
import Products from '../Products/Products';

const ManageSingleIn = ({ product }) => {
    const { _id, img, name, price, supplierName, quantity } = product;

    const [products, setProducts] = useProduct()

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `https://blooming-hollows-74511.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id);
                        console.log(products);
                        console.log(remaining);
                        setProducts(remaining);
                    }
                })
        }

    }
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button className='bg-danger text-white border-0 rounded' onClick={() => handleDeleteBtn(_id)}>Delete</button></td>
            </tr>
        </>

    );
};

export default ManageSingleIn;