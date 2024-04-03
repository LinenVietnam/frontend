function FilterBlock() {
    return (
        <>
            <div className="text-xl font-light mt-10">Filter</div>
            <div className="slidecontainer mt-5 mb-10">
                <input type="range" min={1} max={100} defaultValue={50} className="slider w-full" id="myRange" />
                <p>Value: 0 - <span id="demo" /></p>
            </div>
        </>
    )
}

export default FilterBlock