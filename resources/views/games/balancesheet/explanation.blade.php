<!-- explaination.blade.php -->

@extends('games.balancesheet.master')

@section('title', 'Balance Sheet Explaination')

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

@endsection

@section('footer_script')
  {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.3/vue.js"> --}}
  {{-- </script> --}}
  {{-- <script src="/js/games/quiz.js"></script> --}}

@endsection
