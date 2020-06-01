<template>
  <footer id="footer">
      <div class="container">
          <div class="row">
              <div class="col-md-3">
                  <h6 class="head">Company</h6>
                  <ul>
                    <li><a href="#intro">About</a></li>
                    <li><a href="#features">Job Listings</a></li>
                    <li><a href="#products">Contact</a></li>
                   <li><a href="#pricing">Sign Up</a></li>
                  </ul>
              </div>
               <div class="col-md-3">
                  <h6 class="head">Features</h6>
                  <ul>
                      <li><router-link to="/">Investments</router-link></li>
                      <li><router-link to="/">Data Analysis (coming ...)</router-link></li>
                  </ul>
              </div>
              <div class="col-md-3">
                  <h6 class="head">Legal</h6>
                  <ul>
                      <li><router-link to="/">Privacy Policy</router-link></li>
                      <li><router-link to="/">Terms & Conditions</router-link></li>
                  </ul>
              </div>
              <div class="col-md-3">
                  <h6 class="head">Contact Info</h6>
                  <div class="details">
                      <div class="first d-flex">
                          <i class="fa fa-map-marker"></i>
                          <div class="content">
                              <p class="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, distinctio.</p>
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
              <div class="col-12">
                  <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto, commodi consequuntur quis corporis sapiente excepturi eaque corrupti animi aliquid quo doloribus! Laboriosam est aliquam laudantium quisquam alias atque earum molestias sit saepe itaque consequatur, harum expedita, consequuntur dolore. Quibusdam impedit quo velit nihil animi libero eligendi voluptatem commodi perspiciatis?</small><br>
              </div><br>
              <div class="col-12 text-center">
                  <small class="copy">Copyright &copy;2020 All rights reserved. Funbile Investment Company Limited</small>
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
    background: #f8f9fc;
    padding: 5rem 0;
    .head{
        color:#00093a;
        font-weight: 900;
        text-transform: uppercase;
        font-size: .9rem;
        padding-bottom: 1rem;
    }
    ul{
        li a{
            line-height: 2.7;
            color: #00093a;
            opacity: .6;
            font-weight: 400;
            font-size: .85rem;
        }
    }
    p{
        color:#00093a;
        opacity: .6;
        font-weight: 400;
        font-size: .9rem;
    }
    .fa-envelope, .fa-phone, .fa-map-marker{
        color:#00093a;
        opacity: .6;
        font-weight: bold;
    }
    .footer__bottom{
        small{
            color: #00093a;
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