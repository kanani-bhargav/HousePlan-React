import React from "react";

const CollectionCard = ({imageUrl,categoryName}) => {
  return (
    <a  className="collection-card col-lg-3 col-md-4 col-sm-6 p-2">
  <img className="collection-img " src={imageUrl} />
  <div className="collection-description p-1">
    <h6  className="text-center mb-0">{categoryName}</h6>
  </div>
</a>

  );
};

export default CollectionCard;
