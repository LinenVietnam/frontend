import ProductCategoryItem from "./ProductCategoryItem";

function AllProduct() {
    return (
        <section id="all-products" className="mt-20 w-[95%] mx-auto">
            <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ProductCategoryItem linkProductCateogryItem="/img/linen-fabric.jpg" categorySearch="Linen Fabric" titleProductCateogryItem="01. Linen Fabric"></ProductCategoryItem>
                <ProductCategoryItem linkProductCateogryItem="/img/linen-yard.jpg" categorySearch="Linen Yard" titleProductCateogryItem="02. Linen Yard"></ProductCategoryItem>
                <ProductCategoryItem linkProductCateogryItem="/img/linen-handmade.jpeg" categorySearch="Linen Handmade" titleProductCateogryItem="03. Linen Handmade"></ProductCategoryItem>
                <ProductCategoryItem linkProductCateogryItem="/img/linen-scarf.jpg" categorySearch="Linen Scarf" titleProductCateogryItem="04. Linen Scarf"></ProductCategoryItem>
                <ProductCategoryItem linkProductCateogryItem="/img/eco-wash.png" categorySearch="Eco Wash" titleProductCateogryItem="05. Eco-wash"></ProductCategoryItem>
                <ProductCategoryItem linkProductCateogryItem="/img/linen-fashion.png" categorySearch="Linen Fashion" titleProductCateogryItem="06. Linen Fashion"></ProductCategoryItem>
                <ProductCategoryItem linkProductCateogryItem="/img/linen-bedding.png" categorySearch="Linen Bedding" titleProductCateogryItem="07. Linen Bedding"></ProductCategoryItem>
                <ProductCategoryItem linkProductCateogryItem="/img/linen-curtain.png" categorySearch="Linen Curtain" titleProductCateogryItem="08. Linen Curtain"></ProductCategoryItem>
            </div>
        </section>
    )
}

export default AllProduct