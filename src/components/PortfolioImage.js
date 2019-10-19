import React from 'react';


const PortfolioImage = ({ moreItems, filteredData, limitTags, handleOpen }) => {
	let renderList;
	if (filteredData) {
		renderList = filteredData
			.slice(0, moreItems)
			.map(image => {
				return (
					<div className="portfolio__portfolio-item item" key={image.id}>
						<div className="portfolio__wrapper-image" onClick={() => handleOpen(image.largeImageURL)}>
							<img className="portfolio__image" src={image.largeImageURL} alt="" />
						</div>
						<div className="portfolio__caption">
							<div className="portfolio__caption-icon">
								<img src={require("../assets/img/portfolio-icons/icons_542.png")} alt={image.tags} />
							</div>
							<p className="portfolio__caption-tags"> {limitTags(image.tags)}</p>
						</div>
					</div>
				);
			});
	}
	return renderList;
};

export default PortfolioImage