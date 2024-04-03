'use client'
import { useEffect, useState } from "react";
import TagItem from "./TagItem";

interface PDBItemLink{
    labelItem: string
    categoryProduct?: string
    tagProduct?: string
}

function PDBItemLink(props: PDBItemLink) {

    const {labelItem, categoryProduct, tagProduct} = props

    return (
        <div className="mt-2">
            <span>{labelItem}: </span>
            <TagItem categoryProduct={categoryProduct} />
        </div>
    )
}

export default PDBItemLink