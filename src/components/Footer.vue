<template>
  <footer id="footer">
      <div class="container">
          <div class="row">
              <div class="col-md-3">
                  <h6 class="head">Company</h6>
                  <ul>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact Us</router-link></li>
                  </ul>
              </div>
               <div class="col-md-3">
                  <h6 class="head">Jobs Openings</h6>
                  <ul>
                       <li><router-link to="/apply">Apply to Jobs</router-link></li>
                  </ul>
              </div>
              <div class="col-md-3">
                  <h6 class="head">Legal</h6>
                  <ul>
                      <li><router-link to="/policies">Policy & Terms</router-link></li>
                  </ul>
              </div>
              <div class="col-md-3">
                  <h6 class="head">Contact Info</h6>
                  <div class="details">
                      <div class="first d-flex">
                          <i class="fa fa-map-marker"></i>
                          <div class="content">
                              <p class="pl-4">I7 E 52nd st, New York, NY 10022, United State of America</p>
                          </div>
                      </div>
                      <div class="first d-flex">
                          <i class="fa fa-envelope"></i>
                          <div class="content">
                              <p class="pl-4">support@jobportal.com</p>
                          </div>
                      </div>
                       <!-- <div class="first d-flex">
                          <i class="fa fa-phone"></i>
                          <div class="content">
                              <p class="pl-4">+234-8106-583-308</p>
                          </div>
                      </div> -->
                  </div>
              </div>
          </div><br>
          <hr>
          <div class="row">
              <div class="footer__bottom">
              <!-- <div class="col-12">
                  <small>We pride ourseleves as the company of choice that can provide you with amazing growth opportunities for you. </small><br>
              </div><br> -->
              <div class="col-12 text-center">
                  <small class="copy">Copyright &copy;2020 All rights reserved.</small>
              </div>
          </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
footer{
    background: #000;
    padding: 7rem 0;
    color: #fff;
    .head{
        color:#fff;
        font-weight: 900;
        text-transform: uppercase;
        font-size: .9rem;
        padding-bottom: 1rem;
    }
    ul{
        li a{
            line-height: 2.7;
            color: #fff;
            opacity: .6;
            font-weight: 400;
            font-size: .85rem;
        }
    }
    p{
        color:#fff;
        opacity: .6;
        font-weight: 400;
        font-size: .9rem;
    }
    .fa-envelope, .fa-phone, .fa-map-marker{
        color:#fff;
        opacity: .6;
        font-weight: bold;
    }
    .footer__bottom{
        small{
            color: #fff;
            opacity: .5;
        }
        .copy{
            text-align: center !important;
        }
    }
}
.email{
    font-size: .82rem;
}
</style>