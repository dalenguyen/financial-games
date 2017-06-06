<!-- progress-script.blade.php -->

new Vue({
  el: "#app",
  data: {
    checked: false,
    user_id: {{Auth::id() ?? 0}}
  },
  mounted: function(){
    // check if the lesson is finish or not
    this.checkStatus();
  },
  methods: {
    checkStatus: function(){
      let that = this;
      let url = $(location).attr('href');
      if(this.user_id > 0){
        this.$http.get(url,
                {params: {checkStatus: true, user_id: this.user_id}}
              ).
              then(function(response){
                // success callback
                console.log("GET: " + response.data);
                that.checked = response.data > 0 ? true : false;
                console.log("Checked: " + that.checked);
              }).then(function(response){
                // error callback
              });
      }
    },
    updatePercentage: function(){
      let that = this;
      let csrfToken = $('meta[name="csrf-token"]').attr('content');
      let user_id = this.user_id;
      let newPercentage = 0;

      if(user_id > 0){
        let url = $(location).attr('href');
        this.$http.post(
            url,
            {checked: this.checked, user_id: user_id},
            {headers : {'X-CSRF-TOKEN': csrfToken}}
          ).then(function(response){
            console.log("Response data: " + response.data);
            // update the progress bar
            newPercentage = parseInt($('.progress-bar').attr('aria-valuenow')) + parseInt(response.data);
            console.log("New percentage: " + newPercentage);

            $('.progress-bar').css('width', newPercentage + "%");
            $('.progress-bar').text(newPercentage + "% Complete");
            $('.progress-bar').attr('aria-valuenow', newPercentage);
          })
      }
    }
  }
})
