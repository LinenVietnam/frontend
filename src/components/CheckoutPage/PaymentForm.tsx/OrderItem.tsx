interface OrderItemprops{
    titleOrder: string
    priceOrder?: number
}

function OrderItem(props: OrderItemprops) {

    const {titleOrder, priceOrder} = props

    return (
        <div className="order-item mb-5">
            <div className="flex justify-between mb-5">
                <div className="text-lg md:text-base">{titleOrder}</div>
                <div className="text-lg md:text-base">$ {priceOrder}</div>
            </div>
            <hr className="w-full h-[1px] bg-slate-200" />
        </div>
    )
}

export default OrderItem