import '../Styles/Footer.css';
import facebook from '../Components/Assets/Branding/facebook.png';
import instagram from '../Components/Assets/Branding/Instagram.png';
import twitter from '../Components/Assets/Branding/twitter.png';
import email from '../Components/Assets/Branding/email.png';

const Footer = () => {
  return (
    <>
        <div className="main-footer-container" style={{ backgroundColor: '#dcdcdc' }}>
            <div className="container d-flex-block grid gap-0 column-gap-3 pt-5 ">
                <div className='row'>
                    <div className='col-6'>
                        <div className="fw-bold fs-5 branding">
                            <p>DISCOUNT FINDER</p>
                        </div>
                        <div className="fs-6">
                            <p>Experience the future of e-commerce design with SHOPR</p>
                        </div>
                        <div className="d-flex">
                            <img src={facebook} alt="facbook_icon" className="mx-1"></img>
                            <img src={instagram} alt="instagram_icon" className="mx-1"></img>
                            <img src={twitter} alt="twitter_icon" className="mx-1"></img>
                            <img src={email} alt="email_icon" className="mx-1"></img>              
                        </div> 
                    </div>
                    <div className='col-6 pt-2'>
                        <div className='row fw-bold fs-6'>
                            <div className='col'>Shop</div>
                            <div className='col'>Information</div>
                            <div className='col'>Company</div>
                        </div>
                        <div className='row pt-2'>
                            <div className='col'>My Account</div>
                            <div className='col'>Shopping Policy</div>
                            <div className='col'>About Us</div>
                        </div>
                        <div className='row pt-2'>
                            <div className='col'>Login</div>
                            <div className='col'>Returns & Refunds</div>
                            <div className='col'>Private Policy</div>
                        </div>
                        <div className='row pt-2'>
                            <div className='col'>Wishlist</div>
                            <div className='col'>Cookies Policy</div>
                            <div className='col'>Terms & Conditions</div>
                        </div>
                        <div className='row pt-2'>
                            <div className='col'>Cart</div>
                            <div className='col'>Frequently Asked</div>
                            <div className='col'>Contact Us</div>
                        </div>
                    </div>
                </div>
                <div className=' row pt-4'>
                    <hr />
                    <p>&copy; 2023 DISCOUNT FINDER</p>
                </div>
            </div>
            
            {/* <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row fw-bold fs-6">
                            <div className="col-2">DISCOUNT FINDER</div>
                        </div>
                        <div className="row fw-bold p-3 fs-6">
                            <div className="col-2">Experience the future of e-commerce design with SHOPR</div>
                        </div> 
                    </div>
                    <div className="col">
                        <div className="row fw-bold p-3 fs-6">
                            <div className="col-2">Shop</div>
                            <div className="col-2">Information</div>
                            <div className="col-2">Company</div>
                        </div>
                    </div>
                    <div className="col">
                    
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <p>&copy; 2023 DISCOUNT FINDER</p>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Footer;