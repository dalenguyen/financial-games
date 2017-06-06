<!-- explanation.blade.php -->

@extends('games.balancesheet.master')

@section('title', 'Balance Sheet Tutorial')

@section('header_script')
  <link rel="stylesheet" href="/css/games/quiz.css">
  <link rel="stylesheet" href="/css/games/bsheet-explanation.css">
@endsection

@section('content')

<header class="text-center">
  <h2>Financial Literacy Games</h2>
  <h3>Balance Sheet Component (Tutorial)</h3>
</header>

<figure class="text-center">
  <img src="http://3.bp.blogspot.com/-6YJegHvJiBk/VLUuZRBa-7I/AAAAAAAAQ7A/BLo-pgzA228/s1600/balance%2Bsheet.PNG" alt=" Balance sheet tutorial" width="70%">
</figure>

<article style="margin: 20px;">
  <h3>About Financial Literacy Games</h3>
  <p>Financial Literacy Games is an online gamification platform that helps improving students knowledge on Financial Literacy subject through interactive lessons.</p>
  <p>In this Balance Sheet component, you will have a chance to learn and play in order to gain knowledge on Balance Sheet subject.</p>
  <p>This Balance Sheet component is currently corporate with Professor <strong>Karen Sinotte</strong> from <strong>George Brown College</strong> in order to test the effectiveness of this method on improving students' math and financial literacy ability through interactive learning.</p>
</article>

<article style="margin: 20px;">
  <h3>How to use this platform</h3>
  <p>The Balance Sheet component currently has four sections that you can learn and practice from:</p>
  <ol>
    <li><strong>Read the Explanation:</strong> basic knowledge about Balance Sheet</li>
    <li><strong>Balance Sheet Line Items:</strong> learn about Assets, Liabilities and Equity</li>
    <li><strong>Balance Sheet Quix: </strong> a little quiz to test your knowledge</li>
    <li><strong>Balance Sheet Final: </strong> an interactive drag and drop game to help you blance the account</li>
  </ol>
  <p><em>* Remember to <a href="/login">login</a> and check on the checkbox when you finish a section to track your record</em></p>
</article>

@endsection

@section('footer_script')
  <script type="text/javascript">

  </script>

@endsection
