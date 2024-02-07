import { MdHelpCenter } from "react-icons/md";
import { PiCodeFill } from "react-icons/pi";
import { FaBlog } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";

const TilesMenu = () => {
    return (
        <div className="d-flex justify-content-center col-12 mt-5 mb-5">
            <div className='col-2 tile-box'>
                <MdHelpCenter size="100"/>
                <p className='mt-3 mb-0'>Help Center</p>
            </div>
            <div className='col-2 tile-box'>
                <FaBlog size="100"/>
                <p className='mt-3 mb-0'>Blog</p>
            </div>
            <div className='col-2 tile-box'>
                <HiBriefcase size="100"/>
                <p className='mt-3 mb-0'>Career</p>
            </div>
            <div className='col-2 tile-box'>
                <PiCodeFill size="100" />
                <p className='mt-3 mb-0'>Developer Area</p>
            </div>
        </div>
    )
}

export default TilesMenu;