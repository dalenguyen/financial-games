<!-- line-items.blade.php -->

@extends('games.balancesheet.master')

@section('title', 'Balance Sheet Line Items')

@section('header_script')
  <link rel="stylesheet" href="/css/games/quiz.css">
  <style>
    .more-less{
      float:right;
    }
  </style>
@endsection

@section('content')
  <h1 class="text-center">Balance Sheet Line Items</h1>
  <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"><i class="more-less glyphicon glyphicon-minus"></i> Assets (What Company Owns)</a>
        </h4>
      </div>
      <div id="collapse1" class="panel-collapse collapse in">
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr class="success">
                <th>Current Assets</th>
                <th>Fixed (or capital) Assets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Cash or anything that can easily be converted to cash within a year, reported in order of declining liquidity:</p>
                  <ul>
                    <li>Cash</li>
                    <li>Securities</li>
                    <li>Accounts or notes receivable</li>
                    <li>Inventories</li>
                    <li>Work in progress</li>
                    <li>Prepaid expenses</li>
                  </ul>
                </td>
                <td>
                  <p>Tangible properties or equipment used to support business</p>
                  <ul>
                    <li>Plant or equipment</li>
                    <li>Land and buildings</li>
                    <li>Furniture and fixtures</li>
                    <li>Less Accumulated Depreciation</li>
                  </ul>
                  <p>Intangible Assets:</p>
                  <ul>
                    <li>Patent /copyrights</li>
                    <li>Goodwill</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"><i class="more-less glyphicon glyphicon-plus"></i> Liabilities (What Company Owes to Creditors)</a>
        </h4>
      </div>
      <div id="collapse2" class="panel-collapse collapse">
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr class="success">
                <th>Current Liabilities</th>
                <th>Long Term Liabilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Short Term, payable within a year, and usually from current assets.</p>
                  <ul>
                    <li>Accounts payable</li>
                    <li>Taxes owed</li>
                    <li>Accounts or notes receivable</li>
                    <li>Prepayments</li>
                  </ul>
                </td>
                <td>
                  <p>Due after one year.</p>
                  <ul>
                    <li>Notes for operating expenses</li>
                    <li>Capital Leases</li>
                    <li>Long Term Unsecured Loans</li>
                    <li>Bonds</li>
                    <li>Mortgates</li>
                    <li>Pension Liabilities</li>
                    <li>Contingent Liabilities</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"><i class="more-less glyphicon glyphicon-plus"></i> Equity (also called Net Worth)</a>
        </h4>
      </div>
      <div id="collapse3" class="panel-collapse collapse">
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr class="success">
                <th>Capital Stock</th>
                <th>Retained Earnings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>The amount of money the owner’s originally invested in the company or the amount of money raised by selling shares. </p>
                </td>
                <td>
                  <p>The profits of the business from operations since inception that have not been withdrawn by owners or distributed as dividends.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  @include('games.balancesheet.progresses.progress-bar')

@endsection

@section('footer_script')
  <script type="text/javascript">
  function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
  }
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);

  @include('games.balancesheet.progresses.progress-script')
  </script>

@endsection
