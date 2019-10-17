import React from 'react';
import Constants from "../data/Constants";


const TagList = ({ filterData }) => {
    const { list } = Constants
    let renderList = list.map((tag, index) => {
        return <li className="portfolio__filters-list-item" key={index} onClick={() => filterData(tag)}><span className="portfolio__list-item-dot ">&#8226;</span>{tag}</li>
    })
    return renderList
}

export default TagList;