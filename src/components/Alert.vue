<template>
  <div class="alert">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h2>Get Job Alert For New Jobs</h2>
                  <p>Be the first to know when a new job is posted here</p>
              </div>
              <div class="col-md-6">
                  <form action="">
                      <div class="form-group">
                              <div class="input__holder d-flex justify-content-between">
                                  <input type="text" class="form-control" placeholder="Enter your email address">
                              <button type="submit" class="alert__btn">Subscribe</button>
                              </div>
                      </div>
                  </form>
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
.alert{
    padding: 4rem 0;
    background: $primary-color;
    color: #fff;
    margin-bottom: 0 !important;
    h2{
        font-weight: bold;
    }
    p{
        font-size: .9rem;
        opacity: .8;
        line-height: 1.8;
        padding-top: .5rem;
    }
    form{
        input{
            height: 3.3rem;
            border-radius: 2px;
            box-shadow: none;
            flex: 10;
        }
        .alert__btn{
            background: $secondary-color;
            padding: 1rem;
            border-radius: 4px;
            border: none;
            color: #fff;
            font-size: .9rem;
        }
    }
}
</style>