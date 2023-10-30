import React from "react";
const whyChooseData= [
  {
    imgUrl:
      "https://www.houseplans.com/public/img/home/home-modify.svg?v=b287571c64",
    whyChoose_head: "Customize your home plan",
    whyChoose_Description:
      "We will work with you to make small or large changes so you get the house design of your dreams. Tailor your house blueprints with our modification service.",
  },
  {
    imgUrl:
      "https://www.houseplans.com/public/img/home/home-price.svg?v=b287571c64",
    whyChoose_head: "Stay on budget / low price guarantee",
    whyChoose_Description:
      "Get a Cost to Build report for any house plan. We also offer a low price guarantee for home plans and will beat the competition's regularly published price by 5% (conditions apply; call for more details. Excludes services, ancillary products, and special offers/discounts).",
  },
  {
    imgUrl:
      "https://www.houseplans.com/public/img/home/home-house.svg?v=b287571c64",
    whyChoose_head: "Get personalized help with your house blueprints",
    whyChoose_Description:
      "Shopping for house designs can feel overwhelming. Our experienced house blueprint experts are ready to help you find the house plans that are just right for you. Call 1-800-913-2350 or click here.",
  },
];
const WhyChoose = () => {
  return (
    <div className="container py-5">
      <h3 className="text-center">Why choose Houseplans?</h3>
      <div className="row">
        {
            whyChooseData.map((val,ind)=>{
              return ( <a className="whyChoose_card col-lg-4 col-md-4 col-sm-12 p-2 d-block p-lg-4 p-md-2" key={ind}>
                <img className="whyChoose_img mb-3" src={val.imgUrl} />
                  <h5 className="whyChoose_head text-center ">{val.whyChoose_head}</h5>
                  <p className="whyChoose_description text-center">{val.whyChoose_Description}</p>
              </a>)
            })
        }
      </div>
    </div>
  );
};

export default WhyChoose;
