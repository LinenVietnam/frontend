interface OrderListProps{
    // nameProductOrder: string
    // nameUserOrder: string
    // addressOrder: string
    // phoneNumberOrder: number
    // amountOrder: string
    // totalOrder: number
    // companyNameOrder: string
    // noteOrder: string
    item: any
}

function OrderList(props: OrderListProps) {

    const {item} = props

    return (
        <tr className="bg-white px-5 py-10 mb-10 align-middle">
            <td className="text-left font-sans text-lg">{item.nameProductOrder}</td>
            <td className="text-left font-sans ">{item.nameUserOrder}</td>
            <td className="text-left font-sans ">{item.addressOrder}</td>
            <td className="text-left font-sans">{item.phoneNumberOrder}</td>
            <td className="text-left font-sans text-lg">{item.amountOrder}</td>
            <td className="text-left font-sans ">{item.companyNameOrder}</td>
            <td className="text-left font-sans ">{item.totalOrder}</td>
            <td className="text-left font-sans">{item.noteOrder}</td>
        </tr>
    )
}

export default OrderList