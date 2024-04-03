import CategoryItem from "./CategoryItem";

function CategoryBlock() {
    return (
        <>
            <div className="text-xl font-light mt-10">Categories</div>
            <div className="mt-5 mb-10 ml-5">
                <ul>
                    <CategoryItem linkCategory="Linen Fabric" titleCategory="Linen Fabric"></CategoryItem>
                    <CategoryItem linkCategory="Linen Yard" titleCategory="Linen Yard"></CategoryItem>
                    <CategoryItem linkCategory="Linen Handmade" titleCategory="Linen Handmade"></CategoryItem>
                    <CategoryItem linkCategory="Linen Scarf" titleCategory="Linen Scarf"></CategoryItem>
                    <CategoryItem linkCategory="Eco Wash" titleCategory="Eco Wash"></CategoryItem>
                    <CategoryItem linkCategory="Linen Fashion" titleCategory="Linen Fashion"></CategoryItem>
                    <CategoryItem linkCategory="Linen Bedding" titleCategory="Linen Bedding"></CategoryItem>
                    <CategoryItem linkCategory="Linen Curtain" titleCategory="Linen Curtain"></CategoryItem>
                </ul>
            </div>
        </>
    )
}

export default CategoryBlock