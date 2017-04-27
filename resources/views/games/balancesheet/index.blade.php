<!-- index.blade.php -->

@extends('layouts.master')

@section('title', 'Balance Sheet')

@section('header_script')
  <link rel="stylesheet" href="/css/games/balancesheet.css">
@endsection

@section('content')
<div class="row" id="mainContent">
  <h1>Blance Sheet Game</h1>
<div class="col-md-4 gamebox-drag target" id="gamebox-drag">
  <ul id="gameContent" style="list-style: none; padding-left: 0px;"></ul>
</div>
<div class="col-md-8">
  <table class="table table-condensed">
    <tbody>
    <tr>
      <td><h5>Assets</h5></td>
      <td></td>
      <td><h5>Liabilities</h5></td>
    </tr>
    <tr>
      <td>
        <div class="gamebox-drop-asset target"><ul id="assetSlot" style="list-style: none;padding-left: 0px;"></ul></div>
      </td>
      <td></td>
      <td>
        <table class="table">
          <tbody>
            <tr>
            <td>
              <div class="gamebox-drop-liabilty-equity target" >
                <ul id="liabilitySlot" style="list-style: none;padding-left: 0px;"></ul>
              </div>
            </td>
            </tr>
            <tr>
              <td><h5>Equity</h5></td>
            </tr>
            <tr>
              <td>
                <div class="gamebox-drop-liabilty-equity target">
                  <ul id="equitySlot" style="list-style: none;padding-left: 0px;"></ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Total Assets: <span class="pull-right" id="totalAsset"></span></td>
      <td></td>
      <td>Total Liabilites & Owner's Equity: <span class="pull-right" id="totalLiability"></span></td>
      <td></td>
    </tr>
    </tbody>
</table>
</div>
</div>
<div id="content">

<div id="successMessage">
  <h2>You did it!</h2>
  <button onclick="init()">Play Again</button>
</div>

<button id="reset">Reset Game</button>
<button onclick="test()">Check Result</button>
<p>Designed by <a href="https://ca.linkedin.com/in/dalenguyenblogger
">Dale Nguyen</a></p>


</div>
@endsection

@section('footer_script')
  <script src="/js/games/balancesheet.js"></script>
@endsection
