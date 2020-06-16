<template>
  <div class="contact">
    <Navbar />
    <div class="contact__wrapper">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Have any question, reach out to us today!</p>
      </div>
    </div>
    <div class="contact__content">
      <div class="container">
       <div class="row">
         <div class="col-md-5 text">
             <h2>Contact us today!</h2>
            <h5>The customer support team is always ready to answer all your questions</h5>
            <h6><i class="fa fa-home"></i>Contact Office</h6>
            <p>I7 E 52nd st, New York, NY 10022, United State of America</p>
            <h6><i class="fa fa-envelope"></i>Email Address</h6>
            <p>info@globalconstructioncompany.net</p>
             <h6><i class="fa fa-phone"></i>Phone Number/Whatsapp</h6>
             <p><a href="tel:+491789162706">+491789162706</a></p><br>
         </div>
         <div class="col-md-1"></div>
         <div class="col-md-5 text">
           <h2>Send us a message</h2>
           <p>You can send in your enquiries and the team will reach you in less than 24 hours</p>
           <form @submit.prevent="contact()">
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Full name" v-model="name">
               </div>
                <div class="form-group">
                   <input type="text" class="form-control" placeholder="Email address" v-model="email">
               </div>
                <div class="form-group">
                   <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone_number">
               </div>
               <div class="form-group">
                   <textarea name="" id="" cols="10" rows="6" class="form-control" v-model="message" placeholder="Your message">
                     </textarea>
               </div>
               <div v-if="err" class="alert alert-danger animate__animated animate__bounce">
               {{err}}
             </div>
             <div v-if="success" class="alert alert-success animate__animated animate__bounce">
               {{success}}
             </div>
               <button type="submit" class="form__btn">Send Message</button>
           </form>
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
  },
  data(){
    return{
      name: null,
      email: null,
      phone_number:null,
      message:null,
      err:null,
      success:null
    }
  },
  methods:{
    contact(){
      //Check if the user has filled out form completely
      if(!this.name || !this.email || !this.phone_number || !this.message){
        this.err = 'Please fill out the form and try again!'
        this.removeAlert()
      }else{
        //Send a success message to the user
        this.success = 'Message sent. We will get back to you soon!'
      }
    },
    removeAlert(){
      setTimeout(() => {
        document.querySelector('.alert').remove()
      }, 5000);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.contact{
  .contact__wrapper{
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
  .contact__content{
      padding: 6rem 0;
    .text{
     h2{
         font-weight: bold;
         color:#212121;
         font-size: 2.3rem;
     }
     h5{
         color: #2b2b2b;
         font-size: 1rem;
         font-weight: 400;
         padding-top: .5rem;
         line-height: 1.5;
         padding-bottom: 1.5rem;
         opacity: .8;
     }
     .fa-home, .fa-envelope, .fa-phone{
         margin-right: .5rem;
         color: #2b2b2b;
     }
     h6{
         font-weight: bold;
         font-size: 1rem;
         color: #2b2b2b;
         padding-bottom: .5rem;
     }
     p, a{
         color: #2b2b2b;
         text-decoration: none;
         opacity: .7;
         font-size: .9rem;
     }

 }
  }
}
form{
    margin-top: 2rem;
    input{
        border-radius: 0;
        box-shadow: none !important;
        height: 3rem;
        color: #676767;
        opacity: .8;
        font-size: .9rem;
        &::placeholder{
            font-size: .9rem;
            font-weight: 500;
            color: #676767;
            opacity: .7;
        }
    }
    textarea{
        border-radius: 0;
        box-shadow: none !important;
            font-size: .9rem;
            font-weight: 500;
            color: #676767;
            opacity: .8;
            margin-bottom: 2rem;
    }
    .form__btn{
        background: $secondary-color;
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        color: #fff;
        outline: none !important;
        &:hover{
            background: $primary-color;
            transition: all ease-in-out .5s;
        }
    }
}

//Media Queries
@media only screen and (max-width: 600px){
  .contact__wrapper{
    h1{
      font-size: 2.2rem !important;
    }
  }
  .text{
    h2{
      font-size: 2rem !important;
    }
    h5{
      padding-bottom: 2rem !important;
    }
    p{
      font-size: .9rem !important;
      color: #676767 !important;
      line-height: 1.7;
    }
  }
}
</style>