import ProductSelected from "./ProductSelected";

interface ProductListProps{
    productList: any
    handleDelete: any
}

function ProductList(props: ProductListProps) {

    const {productList, handleDelete} = props

    return (
        <>
            <div className="text-xl font-light">Cart</div>
            {productList ? productList?.map((item: any, index: number) => (
                <ProductSelected key={index} handleDelete={handleDelete} imageProduct={item.image} nameProduct={item.nameProduct} idProduct={item.id} priceProduct={item.priceProduct} amountProduct={item.amountProduct}></ProductSelected>
            )) : []}
        </>
    )
}

export default ProductList