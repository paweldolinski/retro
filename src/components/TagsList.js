import React from 'react';
import Constants from "../data/Constants";


const TagList = ({ filterData }) => {
    const { list } = Constants
    let renderList = list.map((tag, index) => {
        return <li key={index} onClick={() => filterData(tag)}><span>&#8226;</span>{tag}</li>
    })
    return renderList
}

export default TagList;