<template>
  <div class="process">
      <div class="container">
          <div class="row">
              <div class="col-12 heading text-center">
                  <h2>How It Works</h2>
                  <p>Finding and securing a job with us is very simple and free</p>
              </div>
          </div>
          <div class="process__wrapper text-center">
              <div class="process__card">
                  <img src="../assets/images/user.svg" class="icons" alt="">
                  <h5>Create Free Account</h5>
                  <p>The onboarding process is very simple, convinient and can be completed in few minutes on any device.</p>
              </div>
               <div class="process__card">
                    <img src="../assets/images/search.svg" class="icons" alt="">
                  <h5>Find Jobs</h5>
                  <p>On the listing page are the jobs that are available. Browse through to see the one that suits your need.</p>
              </div>
               <div class="process__card">
                    <img src="../assets/images/apply.svg" class="icons" alt="">
                  <h5>Apply to Jobs</h5>
                  <p>Once you find the one that suits you, you can then apply and it is completely free to apply to jobs.</p>
              </div>
               <!-- <div class="process__card">
                    <img src="../assets/images/user.svg" class="icons" alt="">
                  <h5>Apply to Jobs</h5>
                  <p>Once you find the one that suits you, you can then apply and it is completely free to apply to jobs.</p>
              </div> -->
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.process{
    padding: 4rem 0;
    .heading{
        h2{
            font-weight: 400;
            color: #000;
            font-size: 2.2rem;
        }
        p{
            color: #676767;
            font-size: .9rem;
            padding-bottom: 1rem;
        }
    }
    .process__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
        margin-top: 2rem;
        .process__card{
            border-radius: 8px;
            // box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
            .icons{
                max-width: 60px;
                height: auto;
            }
            h5{
                font-weight: bold;
                padding-top: 1rem;
                font-size: 1rem;
                color: #000;
            }
            p{
                padding-top: .5rem;
                color: #676767;
                font-size: .9rem;
                line-height: 1.8;
                opacity: .85;
            }
        }
    }
}
</style>