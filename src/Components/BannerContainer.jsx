import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const BannerContainer = ({ title, postText, banners, isGrey }) => {
  return (
        <div className="main-banner-container" style={{ backgroundColor: isGrey && '#dcdcdc' }}>
            <div className="d-flex align-items-center justify-content-between">
                <h3>{title}</h3>
                <p>{postText}</p>
            </div>
            <div className="d-flex w-100 banner-row col-12">
                {banners.map((banner) => {
                    const getRating = (ratingValue) => {
                        let rating = [];
                        for(let idx=1;idx <= 5;idx++) {
                            if(ratingValue < idx) {
                                rating.push(<FaRegStar />);
                            } else {
                                rating.push(<FaStar />);
                            }
                        }
                        return rating;
                    }
                    
                    return (
                        <div className="banner-box col-4" key={banner.id}>
                            <img src={banner.image} className="col-12" style={{ maxHeight:200 }}/>
                            <div className="p-3">
                                {
                                    banner.rating && 
                                    <div>{...getRating(banner.rating)}</div>
                                    
                                }
                                <div className="fw-bold">{banner?.title}</div>
                                <div className="fs-6 fw-lighter">{banner?.content}</div>
                                {
                                    banner?.discount_price && 
                                    <div>
                                        <div><span className="fw-bold">${banner?.discount_price} </span>{'  '} <span className="text-decoration-line-through">${banner?.actual_price}</span></div>
                                    </div>
                                }
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default BannerContainer;