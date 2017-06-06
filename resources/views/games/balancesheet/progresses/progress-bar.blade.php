<!-- progress-bar.blade.php -->

<div id="progress" class="checkbox">
  @if (Auth::guest())
    <div class="alert alert-warning">
      <a href="/login">Login</a> to track your progress
    </div>
  @else

    <div class="alert alert-info">
      <input type="checkbox" id="explanation" v-model="checked" style="margin-left: 0;" v-on:click="updatePercentage()">
      <label for="checkbox">Check to finish this section</label>
    </div>
  @endif
</div>
