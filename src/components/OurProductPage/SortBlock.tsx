interface SortBlockProps{
    handleChangeSort: any
}

function SortBlock(props: SortBlockProps) {

    const {handleChangeSort} = props

    return (
        <div className="font-sans">
            <select onChange={handleChangeSort} className="bg-transparent">
                <option value="lastest">Sort by lastest</option>
                <option value="oldest">Sort by oddest</option>
                <option value="low-to-high">Sort by price: low to hight</option>
                <option value="high-to-low">Sort by price: high to low</option>
            </select>
        </div>
    )
}

export default SortBlock