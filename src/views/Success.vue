<template>
  <div class="wrapper">
    <div class="newsletter">
      <div class="contents">
        <!-- <img src="../assets/images/rect1.svg" class="img-1" alt="" />
        <img src="../assets/images/rect1.svg" class="img-2" alt="" /> -->
        <div class="ball ball-1"></div>
        <div class="ball ball-2"></div>
        <div class="ball ball-3"></div>
        <div class="ball ball-4"></div>
        <div class="ball ball-5"></div>
        <div class="newsletter__content">
          <h1>Be the first to know when we officially launch!</h1>
          <p>
            Muna wallet helps you Buy and sell Crypto instantly with your bank
            account, Secure P2P Fiat Crypto conversion that is safer, cheaper,
            faster and simpler for Africans. You can also stake your crypto and
            earn up to 10% interest per year. Be the first to know when we go
            live.
          </p>
          <div v-if="success" class="alert alert-success animated fadeInRight">
            {{ success }}
          </div>
          <div v-if="err" class="alert alert-danger animated fadeInRight">
            {{ err }}
          </div>
          <form @submit.prevent="submit()" data-netlify="true" method="post">
            <input
              v-model="email"
              type="email"
              class="form-control"
              name="email"
              placeholder="Enter email address here"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      email: null,
      success: null,
      err: null
    }
  },
  methods: {
    submit() {
      if (this.email) {
        this.success =
          'You have successfully subscirbed to our email notification. We promise not to spam you!'
        this.removeAlert()
      } else {
        this.err = 'Please provide your email address here'
        this.removeAlert()
      }
    },
    removeAlert() {
      setTimeout(() => {
        document.querySelector('.alert').remove()
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.wrapper {
  background: #fff;
  width: 100vw !important;
  overflow-x: hidden;
}
.newsletter {
  position: relative;
  height: auto;
  background: #003e53;
  color: #fff;
  font-family: 'Ubuntu' !important;
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .newsletter__content {
    max-width: 700px;
    text-align: center;
    margin: 10rem 1rem;
    h1 {
      text-transform: uppercase;
      font-weight: bolder;
      font-size: 2.7rem;
      line-height: 1.5;
      padding-bottom: 2rem;
      text-shadow: 0.03em 0.03em 0.05em #003e53;
    }
    p {
      line-height: 1.7;
      opacity: 0.8;
      font-size: 0.9rem;
    }
    form {
      margin-top: 3rem;
      display: flex;
      input {
        flex: 12;
        height: 3.7rem;
        border-radius: 0px;
        box-shadow: none;
        outline: none;
      }
      input[type='submit'] {
        // padding: auto 2rem;
        flex: 3;
        border: none;
        background: $primary-color;
        color: #fff;
        &:hover {
          background: #49ad01;
          transition: all ease-in-out 0.5s;
        }
      }
    }
  }
  .img-1 {
    top: 0;
    right: 0;
    position: absolute;
  }
  .img-2 {
    bottom: 0;
    left: 0;
    position: absolute;
  }
  .ball {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    position: absolute;
    border-top-left-radius: 4px;
    bottom: 0;
    animation-name: animate;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .ball-1 {
    left: 40px;
    background: #f9ad6d;
  }
  .ball-2 {
    left: 300px;
    background: #68bc98;
    animation-delay: 6s;
  }
  .ball-3 {
    left: 500px;
    background: #49ad01;
    animation-delay: 2s;
  }
  .ball-4 {
    right: 200px;
    background: #f8704b;
    animation-delay: 5s;
  }
  .ball-5 {
    right: 40px;
    background: #7b7fda;
    animation-delay: 7s;
  }
}

//ANIMATING THE BALLS
@keyframes animate {
  to {
    opacity: 1;
    transform: translateY(-700px);
  }
}

//MEDIA QUERIES FOR SMALL SCREENS
@media only screen and (max-width: 600px) {
  .wrapper {
    height: 100%;
  }
  .newsletter__content {
    h1 {
      font-size: 1.5rem !important;
    }
    .newsletter__content {
      margin: 12rem 1rem;
    }
    form {
      flex-direction: column;
      input {
        padding: 1.5rem 1rem;
        margin-bottom: 1rem;
      }
      input[type='submit'] {
        padding: 1.2rem 0rem;
      }
    }
  }
}
</style>
