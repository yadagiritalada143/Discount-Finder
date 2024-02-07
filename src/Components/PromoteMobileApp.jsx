const PromoteMobileApp = () => {
  return (
    <div>
        <div>
            <p className="text-center">Download the Discount Finder app for</p>
            <p className="text-center fw-bold fs-2">Cashbacks, Vouchers, Reviews</p>
            <p className="text-center">and much more wherever you go!</p>
            <p className="text-center fw-bold fs-4">Get the app download link via SMS and start using out app today. Ready to get started</p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
                <div className='col-4 d-flex'>
                    <span className="input-group-text">+91</span>
                    <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                </div>
                <div className='col-2 d-flex'>
                    <button type="button" className="btn sign-in-up-btn">Share Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PromoteMobileApp;