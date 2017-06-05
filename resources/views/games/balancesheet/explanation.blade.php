<!-- explaination.blade.php -->

@extends('games.balancesheet.master')

@section('title', 'Balance Sheet Explanation')

@section('header_script')
  <link rel="stylesheet" href="/css/games/quiz.css">
  <link rel="stylesheet" href="/css/games/bsheet-explanation.css">
@endsection

@section('content')
  <h1 class="text-center">Balance Sheet Structure</h1>
  <ul>
    <li>Measures financial status at a point in time</li>
    <li>Follows the accounting formula</li>
  </ul>
  <div class="text-center formular">
    <p>Assets = Liabilities + Equities</p>
    <p>What is Owned = Owed to Creditors & Owners </p>
  </div>

  <img src="http://www.myaccountingcourse.com/financial-statements/images/balance-sheet-template.jpg" alt="balance sheet" width="100%">

  <table class="table">
    <thead>
      <tr class="success">
        <th>What is shows you</th>
        <th>What it doesn’t show you</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul>
            <li>At a point of time, shows what the company owns (assets) and owes (Liabilities) and the difference between the two (Equity)</li>
            <li>Provides a general indication of the size of the organization</li>
            <li>Provides insight into asset efficiency, risks, and how the firm is positioned for the future.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Income or expenses</li>
            <li>Market value of the assets</li>
            <li>Quality of the assets</li>
            <li>Contingent liabilities (Operating leases, Guarantees to others, Pending lawsuits, Liens on assets or tax problems)</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

  <div id="app" class="checkbox">
  @if (Auth::guest())
    <div class="alert alert-warning">
      <a href="/login">Login</a> to track your progress
    </div>
  @else

    <div class="alert alert-info">
      <input type="checkbox" id="explanation" v-model="checked" style="margin-left: 0;">
      <label for="checkbox">Check to finish this section</label>
    </div>
  @endif
  </div>

@endsection

@section('footer_script')
  <script type="text/javascript">
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
      watch: {
        checked: function(){
          let that = this;
          let csrfToken = $('meta[name="csrf-token"]').attr('content');
          let user_id = this.user_id

          if(user_id > 0){
            this.$http.post(
                'http://games.dalenguyen.me/balance-sheet-explanation',
                {checked: this.checked, lesson: "Explanation", user_id: user_id},
                {headers : {'X-CSRF-TOKEN': csrfToken}}
              ).then(function(response){
                console.log(response.data);
                // update the progress bar
                $('.progress-bar').css('width', response.data + "%");
                $('.progress-bar').text(response.data + "% Complete");
              })
          }
        }
      },
      methods: {
        checkStatus: function(){
          let that = this;
          if(this.user_id > 0){
            this.$http.get('http://games.dalenguyen.me/balance-sheet-explanation',
                    {params: {checkStatus: true, user_id: this.user_id}}
                  ).
                  then(function(response){
                    // success callback
                    that.checked = response.data > 0 ? true : false;
                  }).then(function(response){
                    // error callback
                  });
          }
        }
      }
    })
  </script>

@endsection
