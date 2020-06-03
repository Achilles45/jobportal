<template>
  <div class="jobs">
      <div class="container">
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8 text-center heading">
                  <h2>JOB OPPORTUNITIES FOR EVERYONE</h2>
                  <p>We have a job for you irrespective of your race, color, education and experience.</p>
              </div>
              <div class="col-md-2"></div>
          </div>
         <div class="row pt-5">
             <div class="col-md-6">
                 <img src="../assets/images/worker1.jpg" class="img-fluid worker" alt="">
             </div>
             <div class="col-md-1"></div>
             <div class="col-md-5">
                 <h3>Informal Jobs</h3>
                 <hr>
                 <p>We help anyone that can work get acccess to job opportunities irrespective of your situation. Our informal opportunities allows people with no university education get a job placement. Job opprtunities applies for the following group of people here.</p>
               <div class="row">
                   <div class="col-md-6">
                        <p><i class="fa fa-check-circle"></i> Company security & guards</p>
                        <p><i class="fa fa-check-circle"></i> Cleaners</p>
                        <p><i class="fa fa-check-circle"></i> Drivers</p>
                        <p><i class="fa fa-check-circle"></i> Store Keepers</p>
                   </div>
                    <div class="col-md-6">
                        <p><i class="fa fa-check-circle"></i> Customer Service/Call Centre </p>
                        <p><i class="fa fa-check-circle"></i> Cooks/Chefs</p>
                        <p><i class="fa fa-check-circle"></i> Heavy duty truck drivers</p>
                   </div>
               </div>
                  <div class="button__holder">
                     <router-link to="/apply" class="apply__btn">Apply to Jobs</router-link>
                 </div>
             </div>
         </div>
          <div class="row pt-5">
             <div class="col-md-5">
                 <h3>Formal Jobs & Professionals</h3>
                 <hr>
                 <p>If you are skilled worker or an experienced professional at a craft, we've also got amazing opprtunities and growth opprtunities for you that you cannot afford to miss. <br>Whether you are an account manager, auditing/finance manager, Administrative officer, Human Resource Executive, Medical doctor, Nurse, Pharmacist, Sailor, Electrical engineer, Language interpreter, Sailor, Welder & QC Engineer, Software Developer among others, you are sure of getting your dream job with us.</p>
                 <div class="button__holder mb-5">
                     <router-link to="/apply" class="apply__btn">Apply to Jobs</router-link>
                 </div>
             </div>
             <div class="col-md-1"></div>
             <div class="col-md-6">
                  <img src="../assets/images/worker3.jpeg" class="img-fluid worker" alt="">
             </div>
         </div><br><br>
          <div class="row pt-5">
             <div class="col-md-6">
                  <img src="../assets/images/worker2.svg" class="img-fluid worker" alt="">
             </div>
             <div class="col-md-1"></div>
             <div class="col-md-5">
                   <h3>Amazing Growth Opportunities</h3>
                   <hr>
                 <p>Working with a company that you know cares for you is one of the best thing that can happen to you. All our services are users centric and we put you in the center of all our plannings and activities. We love you and want you to come work with us.</p>
                    <div class="button__holder">
                     <router-link to="/apply" class="apply__btn">Apply to Jobs</router-link>
                 </div>
             </div>
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
.jobs{
    padding: 4rem 0;
    .worker{
        border-radius: 10px;
    }
    h3{
        font-weight: bold;
        color: #2b2b2b;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    p{
        color: #2b2b2b;
        line-height: 2;
        opacity: .7;
        font-size: .9rem;
    }
    .button__holder{
        padding-top: 2rem;
        .apply__btn{
            background: $secondary-color;
            text-decoration: none;
            color: #fff;
            border-radius: 50px;
            padding: 1.2rem 2rem;
            font-size: .9rem;
        }
    }
}
</style>