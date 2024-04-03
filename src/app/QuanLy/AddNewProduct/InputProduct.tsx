interface InputProductProps{
    titleInput: string
    name: string
    onChange: any
}

function InputProduct(props: InputProductProps) {

    const {titleInput, name, onChange} = props

    return (
        <div className="flex flex-col mb-10">
            <label className="text-xl mb-3">{titleInput}:</label>
            <input type="text" className="bg-transparent border-b-2 border-slate-400 text-2xl focus:outline-none focus:border-slate-700 transition duration-300 max-w-[720px]" onChange={onChange} name={name}/>
        </div>
    )
}

export default InputProduct