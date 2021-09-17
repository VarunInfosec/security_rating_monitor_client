<template>
<div class="register-container full-height sm-p-t-30">
    <div class="d-flex justify-content-center flex-column full-height ">
        <img src="assets/img/logo.png" alt="logo"  width="150" >
        <h3>{{ __('Create a Security Rating Account') }}</h3>
        <p>
          Already a member? <a href="#/" class="text-info">Login</a>
        </p>
        <form id="form-register" class="p-t-15" role="form" action="index.html">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group form-group-default">
                <label>First Name</label>
                <input type="text" name="fname" placeholder="John" class="form-control" required>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-default">
                <label>Last Name</label>
                <input type="text" name="lname" placeholder="Smith" class="form-control" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group form-group-default">
                <label>Username</label>
                <input type="text" name="uname" placeholder="yourname.pages.com (this can be changed later)" class="form-control" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group form-group-default">
                <label>Password</label>
                <input type="password" name="pass" placeholder="Minimum 8 Characters" class="form-control" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group form-group-default">
                <label>Email</label>
                <input type="email" name="email" placeholder="We will send loging details to you" class="form-control" required>
              </div>
            </div>
          </div>
          <div class="row m-t-10">
            <div class="col-lg-6">
              <p>I agree to the <a href="#"  class="text-info">terms and conditions</a>” and add a checkbox before the text.</p>
            </div>
            <div class="col-lg-6 text-right">
              <a href="#" class="text-info small">Contact us</a>
            </div>
          </div>
          <button aria-label="" class="btn btn-primary btn-cons m-t-10" type="submit">Create a new account</button>
        </form>
      </div>
</div>
</template>

<script>
export default {
    name: 'Register',
    setup() {
        // document.getElementById('app').classList.add('register-container', 'full-height', 'sm-p-t-30')
    },
}
</script>