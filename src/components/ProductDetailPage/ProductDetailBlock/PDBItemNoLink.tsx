interface PDBItemNoLinkProps{
    labelItem: string
    amountProduct: number
}

function PDBItemNoLink(props: PDBItemNoLinkProps) {

    const {labelItem, amountProduct} = props

    return (
        <div className="mt-2">
            <span>{labelItem}: </span>
            <span className="text-slate-500 font-sans text-lg font-medium">{amountProduct}</span>
        </div>
    )
}

export default PDBItemNoLink