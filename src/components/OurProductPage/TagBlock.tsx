import TagItem from "./TagItem"

function TagBlock() {
    return (
        <div className="text-xl font-light mt-10">Tags
            <div className="mt-5 gap-3">
                <TagItem linkTag="" titleTag="Collection"></TagItem>
                <TagItem linkTag="" titleTag="Fabric"></TagItem>
                <TagItem linkTag="" titleTag="Fashion"></TagItem>
                <TagItem linkTag="" titleTag="Home"></TagItem>
                <TagItem linkTag="" titleTag="Modern"></TagItem>
                <TagItem linkTag="" titleTag="Sale"></TagItem>
                <TagItem linkTag="" titleTag="Style"></TagItem>
                <TagItem linkTag="" titleTag="Textile"></TagItem>
            </div>
        </div>
    )
}

export default TagBlock