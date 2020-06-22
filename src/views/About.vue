<template>
  <div class="about">
    <Navbar />
    <div class="about__wrapper">
      <div class="container">
        <h1>About Us</h1>
        <p>Get to know us today!</p>
      </div>
    </div>
    <div class="about__content">
      <div class="container">
       <div class="row">
         <div class="col-md-6 image__holder">
            <img src="../assets/images/worker1.jpg" class="img-fluid" alt="">
         </div>
         <div class="col-md-1"></div>
         <div class="col-md-5">
           <h3>10+ YEARS OF PROVIDING JOB FOR PEOPLE LIKE YOU</h3>
           <p>Global construction company is a group of independent construction companies that carries out work across the United States, Canada, the Caribbean, and in Australia. These diverse operations in the civil infrastructure, heavy industrial, and buildings markets are supported by a strategic presence in more than 30 major centers.</p>
           <p class="pb-5">Global construction company help to build on a solid foundation of commitment to corporate social responsibility; continually evolve to incorporate new information, technology, and best practices; and help drive transformational change within the construction industry through leading by example.</p>
           <router-link to="/apply" class="request__btn">Apply to Jobs</router-link>
         </div>
       </div>
      </div>
    </div>
    <div class="trust">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center heading">
            <p>WE ARE EXCELLENT IN WHAT WE DO</p>
            <h3>SEE WHY OUR USERS TRUST US</h3>
          </div>
        </div>
        <div class="row text-center pt-5">
          <div class="col-md-3">
            <img src="../assets/images/customer.svg" class="icons" alt="">
            <h5>24/7 Customer Support</h5>
            <p>Our top notch customer support team is always ready to respond to your concerns.</p>
          </div>
           <div class="col-md-3">
            <img src="../assets/images/speed.svg" class="icons" alt="">
            <h5>Speed and Efficiency</h5>
            <p>We try to quickly match you to your qualified positions. No stories!</p>
          </div>
           <div class="col-md-3">
            <img src="../assets/images/innovation.svg" class="icons" alt="">
            <h5>Innovative Proccesses</h5>
            <p>The company is innovative in her planning and execution to give our users the best possible value.</p>
          </div>
           <div class="col-md-3">
          <img src="../assets/images/money.svg" class="icons" alt="">
            <h5>Fair Pricing</h5>
            <p>We have no hidden cost in our services and our pricing is fair</p>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="container">
        <div class="row">
          <div class="col-12 heading">
            <h2>Meet The Awsome Team</h2>
          </div>
        </div>
        <div class="team__wrapper">
          <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/team1.jpg" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>ALLAN STEWERT</h5>
              <h6>CEO</h6>
            </div>
          </div>
           <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/team2.jpg" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>BRADON CASTILO</h5>
              <h6>Head of Operations</h6>
            </div>
          </div>
           <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/team3.jpg" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>MARILLYN HEWSON</h5>
              <h6>Customer Relations</h6>
            </div>
          </div>
           <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/team4.jpg" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>JONATHAN GRANT</h5>
              <h6>CTO</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
  components:{
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.about{
  .about__wrapper{
    background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url('../assets/images/img10.jpg');
    color: #fff;
    padding: 4rem 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    h1{
        font-weight: bold;
        font-size: 2.8rem;
    }
    p{
        font-size: .9rem;
        opacity: .6;
    }
  }
  .about__content{
    padding: 6rem 0;
    h3{
      font-weight: bold;
      color: #212121;
      padding-bottom: 1rem;
    }
    p{
      line-height: 1.9;
      color: #676767;
      font-size: .95rem;
      // padding-bottom: 2rem;
    }
     .image__holder::after{
        content: "";
        width: 200px;
        position: absolute;
        margin: 0 auto;
        height: 70%;
        width: 95%;
        background: transparent;
        border: 5px solid #000;
        left: 50px;
        right: 0;
        bottom: 80px;
        z-index: -10;
    }
    .request__btn{
      background: $secondary-color;
      padding: 1.2rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      color: #fff;
      &:hover{
        background: $primary-color;
        transition: all ease-in-out .5s;
      }
    }
  }
  .trust{
    padding-top: 4rem;
    padding-bottom: 4rem;
    // background: #fafafa;
    .heading{
      p{
        color: $tertiary-color;
        font-size: .85rem;
        font-weight: bold;
      }
      h3{
        font-weight: bold;
        color: #212121;
        font-size: 2rem;
      }
    }
    .holder{
       box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
       padding: 2rem;
    }
    .icons{
      max-width: 60px;
      height: auto;
      padding-bottom: 1rem;
    }
    h5{
      font-weight: bold;
      color: #2b2b2b;
      font-size: 1.1rem;
    }
    p{
      color: #2b2b2b;
      font-size: .9rem;
      opacity: .7;
      line-height: 1.8;
      padding-top: .5rem;
    }
  }

  .team{
    padding: 4rem 0;
    h2{
      font-weight: bold;
      color: #2b2b2b;
    }
    .team__wrapper{
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 30px;
      .team__card{
        // box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
        &:hover{
            transform: translateY(-10px);
            transition: all ease-in-out .5s;
          }
        .img__wrapper{
          background: #000;
        }
        .body{
          padding:1.3rem 2rem;
          text-align: center;
           box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
          h5{
            font-weight: 400;
            color: #2b2b2b;
            font-size: 1rem;
          }
          h6{
            font-size: .9rem;
            font-weight: bold;
            color: #2b2b2b;
          }
        }
      }
    }
  }
}

//Media queries
@media only screen and (max-width: 600px){
 .about__wrapper{
    h1{
      font-size: 2.2rem !important;
    }
  }
   .about__content{
     h3{
       padding-top: 3rem;
       font-size: 1.3rem !important;
       line-height: 1.5;
     }
     .image__holder::after{
       display: none !important;
     }
   }
   .trust{
     h3{
       font-size: 1.5rem !important;
     }
   }
    .team{
     h2{
       font-size: 1.5rem !important;
       font-weight: bolder;
       text-align: center;
     }
   }
}
</style>