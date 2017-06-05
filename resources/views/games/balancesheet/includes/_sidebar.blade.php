{{-- _sidebar.blade.php --}}

<aside>
  <div class="grid-12">
    <h3>Balance Sheet Outline</h3>
    <ul>
      <li class="topic-outline-mini-item current" data-item-id="91">
        <span></span>
        <div>
        <a href="/balance-sheet-explaination">Read the Explanation</a></div>
      </li>
      <li class="topic-outline-mini-item" data-item-id="92">
        <span></span>
        <a href="/balance-sheet-line-items">Balance Sheet Line Items</a>
      </li>
      <li class="topic-outline-mini-item" data-item-id="96">
        <span></span>
        <a href="/balance-sheet-quiz">
        Balance Sheet Quiz </a>
      </li>
      <li class="topic-outline-mini-item pro" data-item-id="100">
      <span></span>
      <a href="/balance-sheet-final" class="pro">
      Balance Sheet Final </a>
      </li>
    </ul>

    @if (Auth::guest())
      <div class="alert alert-warning">
        <a href="/login">Login</a> to track your progress
      </div>
    @else
    <h4>Your Progress</h4>
    <div class="progress">
      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="{{ Auth::user()->getProgress() }}"
      aria-valuemin="0" aria-valuemax="100" style="width:{{ Auth::user()->getProgress() }}%">
        {{ Auth::user()->getProgress() }}% Complete
      </div>
    </div>
    @endif
</aside>
