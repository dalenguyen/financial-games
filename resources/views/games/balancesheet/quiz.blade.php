<!-- quiz.blade.php -->

@extends('games.balancesheet.master')

@section('title', 'Balance Sheet')

@section('header_script')
  <link rel="stylesheet" href="/css/games/quiz.css">
@endsection

@section('content')
    <div id="app">
      <h1>@{{ quiz.title }}</h1>
      <!-- index is used to check with current question index -->
      <div v-for="(question, index) in quiz.questions" class="question-content">
        <!-- Hide all questions, show only the one with index === to current question index -->
        <div v-show="index === questionIndex" class="question-box">
          <h4>@{{ question.text }}</h4>
          <ol>
            <li v-for="(response, child_index) in question.responses">
                <!-- The radio button has three new directives -->
                <!-- v-bind:value sets "value" to "true" if the response is correct -->
                <!-- v-bind:name sets "name" to question index to group answers by question -->
                <!-- v-model creates binding with userResponses -->
                <input type="radio"
                       v-bind:value="response.text"
                       v-bind:name="response.text"
                       v-model="userResponses[index]"> @{{response.text}}
              </label>
            </li>
          </ol>
          <!-- The two navigation buttons -->
          <!-- Note: prev is hidden on first question -->
          <button v-if="questionIndex > 0" v-on:click="prev">
            Prev
          </button>
          <button v-on:click="next">
            Next
          </button>

          <button v-on:click="question.showHint = !question.showHint " class='pull-right'>
            Show hints
          </button>

          <div class="alert alert-info" v-show="question.showHint" style="margin-top: 20px;">
            <p>@{{ question.hint }}</p>
          </div>
        </div>

      </div>
      <div v-show="questionIndex === quiz.questions.length">
        <h2>
        Quiz finished
      </h2>
        <p>
          Total score: @{{ score() }} / @{{ quiz.questions.length }}
        </p>
        <button v-on:click="start">
          Restart
        </button>
      </div>            
    </div>
@endsection

@section('footer_script')
  <script src="/js/games/quiz.js"></script>

@endsection
