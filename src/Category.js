import React from 'react'

const Category = () => {
  return (
    <div>
  <div id="preloader">
    <div className="loader" />
  </div>
  {/* preloader area end */}
  {/* login area start */}
  <div className="login-area">
    <div className="container">
      <div className="login-box ptb--25">
        <form>
          <div className="login-form-head">
            <h4>Sign In</h4>
            <p>Hello there, Sign in and start managing your Admin Template</p>
          </div>
          <div className="login-form-body">
            <div className="form-gp">
              <label htmlFor="exampleInputEmail1">Add Category</label>
              <input type="email" id="email" />
              <i className="ti-email" />
              <div className="text-danger" />
            </div>
            <div className="row mb-4 rmber-area">
              <div className="col-6">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                  <label className="custom-control-label" htmlFor="customControlAutosizing">Remember
                    Me</label>
                </div>
              </div>
              <div className="col-6 text-right">
                <a href="forgot-password.html">Forgot Password?</a>
              </div>
            </div>
            <div className="submit-btn-area">
              <button id="form_submit" onclick="login()" type="button">Log in
                <i className="ti-arrow-right" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Category
