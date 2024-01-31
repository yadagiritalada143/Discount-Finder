import help_circle from '../Components/Assets/TilesMenuIcons/help_circle.png';
import blog from '../Components/Assets/TilesMenuIcons/blog.png';
import career from '../Components/Assets/TilesMenuIcons/career.png';
import developer_area from '../Components/Assets/TilesMenuIcons/developer_area.png';

const TilesMenu = () => {
    return (
        <div className="d-flex justify-content-center col-12 mt-5 mb-5">
            <div className='col-2 tile-box'>
                <img className="rounded " width={'50%'} src={help_circle} alt="help_circle" />
                <p className='mt-3 mb-0'>Help Center</p>
            </div>
            <div className='col-2 tile-box'>
                <img className="rounded " width={'50%'} src={blog} alt="blog" />
                <p className='mt-3 mb-0'>Blog</p>
            </div>
            <div className='col-2 tile-box'>
                <img className="rounded " width={'50%'} src={career} alt="career" />
                <p className='mt-3 mb-0'>Career</p>
            </div>
            <div className='col-2 tile-box'>
                <img className="rounded " width={'50%'} src={developer_area} alt="developer_area" />
                <p className='mt-3 mb-0'>Developer Area</p>
            </div>
        </div>
    )
}

export default TilesMenu;