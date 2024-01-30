import help_circle from '../Components/Assets/TilesMenuIcons/help_circle.png';
import blog from '../Components/Assets/TilesMenuIcons/blog.png';
import career from '../Components/Assets/TilesMenuIcons/career.png';
import developer_area from '../Components/Assets/TilesMenuIcons/developer_area.png';

const TilesMenu = () => {
  return (
    <div className="d-flex justify-content-center">
        <div className='p-3 justify-content-center'>
            <img className="rounded img-thumbnail" src={help_circle} alt="help_circle"/>
            <p>Help Center</p>
        </div>
        <div className='p-3'>
            <img className="rounded img-thumbnail" src={blog} alt="blog"/>
            <p className='justify-content-center'>Blog</p>
        </div>
        <div className='p-3'>
            <div>
                <img className="rounded img-thumbnail" src={career} alt="career"/>
            </div>
            <p className='justify-content-center'>Career</p>
        </div>
        <div className='p-3'>
            <img className="rounded img-thumbnail" src={developer_area} alt="developer_area"/>
            <p className='justify-content-center'>Developer Area</p>
        </div>
    </div>
  )
}

export default TilesMenu;