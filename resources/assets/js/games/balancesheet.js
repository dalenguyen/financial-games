// ES6 Modules or TypeScript
import swal from 'sweetalert2';

var totalAssetVal = 0,
    totalLiabilityVal = 0;

// Create the game content

var assets = {
  "Cash" : 4000,
  "Account Receivable" : 5000,
  "Building" : 80000,
  "Equipment" : 10500
};

var liabilities = {
  "Account Payable" : 5500,
  "Building Loan" : 75000
};

var equity = {
  "Paid in Capital" : 14500,
  "Retained Earnings" : 4500
};

// initialize the game
init();

// Reset button
document.getElementById("reset").addEventListener("click", init);

// Check result
document.getElementById("result").addEventListener("click", result);

// initialize the game
function init(){
  totalAssetVal = 0;
  totalLiabilityVal = 0;
  $("#totalAsset").html("$" + totalAssetVal);
  $("#totalLiability").html("$" + totalLiabilityVal);

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  $('#assetSlot').html( '' );
  $('#liabilitySlot').html( '' );
  $('#equitySlot').html( '' );
  $('#gameContent').html( '' );

  initializeContent(assets);
  initializeContent(liabilities);
  initializeContent(equity);

  // reorganize the game content
  var $list = $("#gameContent");

  $list.children().detach().sort(function(a, b) {
    return $(a).text().localeCompare($(b).text());
  }).appendTo($list);
}

// add content from Object to ul
function initializeContent(contentArray){
  for (var k in contentArray){
    if (contentArray.hasOwnProperty(k)) {
      $('<li class="box" draggable="true" value="'+ contentArray[k] +'">' + k + '<span class="pull-right">$' + contentArray[k] + "</span>" +'</li>').data( 'number', contentArray[k] ).attr( 'id', k ).appendTo('#gameContent');
    }
  }
}

// check game result
function result(){
  // create assets object from assetSlot
  var assetResult = createObject('#assetSlot');

  // create liabilities object from liabilitySlot
  var liabilityResult = createObject('#liabilitySlot');

  // create equity object from equitySlot
  var equityResult = createObject('#equitySlot');

  // Check the results
  if(compare2Objects(assets, assetResult)
        && compare2Objects(liabilities, liabilityResult)
        && compare2Objects(equity, equityResult)){
    swal('Good job!', 'You solved it!', 'success');
  }else{
    swal('Oops...', 'Please try again!', 'error');
  }

}

// Return an object from a list
function createObject(objectID){
  var results = {};

  $(objectID).each(function(){
    var key = '',
        value = 0;
    $(this).find('li').each(function(){
      var current = $(this);

      if(current.children().length > 0) {
        // add current text to our current phrase
        key = current[0].id;
        value = current[0].value;
        // assign value to asset
        results[key] = value;
      }

    })

  });

  return results;
}

// Compare two objects
function compare2Objects(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

var dragger,
    parentID;

$('#mainContent').on({
    dragstart: function(e){
      dragger = e.target;
      parentID = this.parentNode.id;
    },
}, "li");

$('.target').on({
  dragstart: function(e){
    // dragger = e.target;
  },

  dragenter: function(e){
    e.preventDefault();
  },

  drop: function(e){
    var draggerValue = dragger.value;
    // Drag item to gameContent
    if(e.target.id === "gameContent" || e.target.children.id === "gameContent" || e.target.id === "gamebox-drag" || e.target.parentNode.id === "gameContent"){
      $("#gameContent").append(dragger);

      if(parentID === "assetSlot"){
        totalAssetVal -= Number(draggerValue);
        $("#totalAsset").html("$" + totalAssetVal);
      }else if(parentID === "liabilitySlot" || parentID === "equitySlot"){
        totalLiabilityVal -= Number(draggerValue);
        $("#totalLiability").html("$" + totalLiabilityVal);
      }

    }else{

      if(e.target.parentNode.id === "assetSlot"){
        $(e.target.parentNode).append(dragger);
        if(parentID === "gameContent"){
          totalAssetVal += Number(draggerValue);
          $("#totalAsset").html("$" + totalAssetVal);
        }else if(parentID === "assetSlot"){
          // Don't add value
        }else{
          totalAssetVal += Number(draggerValue);
          $("#totalAsset").html(totalAssetVal);
          totalLiabilityVal -= Number(draggerValue);
          $("#totalLiability").html("$" + totalLiabilityVal);
        }

      }else if(e.target.children[0]){
        if(e.target.children[0].id === "assetSlot"){
          $(e.target.children).append(dragger);
          if(parentID === "gameContent"){
            totalAssetVal += Number(draggerValue);
            $("#totalAsset").html("$" + totalAssetVal);
          }else if(parentID === "assetSlot"){
            // Don't add value
          }else{
            totalAssetVal += Number(draggerValue);
            $("#totalAsset").html("$" + totalAssetVal);
            totalLiabilityVal -= Number(draggerValue);
            $("#totalLiability").html("$" + totalLiabilityVal);
          }
        }
      }

      if(e.target.parentNode.id === "liabilitySlot" || e.target.parentNode.id === "equitySlot"){
        console.log(1);
        $(e.target.parentNode).append(dragger);

        if(parentID === "gameContent"){
          totalLiabilityVal += Number(draggerValue);
          $("#totalLiability").html("$" + totalLiabilityVal);
        }else if(parentID ==="liabilitySlot" || parentID === "equitySlot"){
          // Don't add value
        }else if(parentID ==="assetSlot"){
            totalAssetVal -= Number(draggerValue);
            $("#totalAsset").html("$" + totalAssetVal);
            totalLiabilityVal += Number(draggerValue);
            $("#totalLiability").html("$" + totalLiabilityVal);
        }

      }else if(e.target.children[0]){
        if(e.target.children[0].id === "liabilitySlot" || e.target.children[0].id === "equitySlot"){
          $(e.target.children).append(dragger);
          if(parentID === "gameContent"){
              totalLiabilityVal += Number(draggerValue);
              $("#totalLiability").html("$" + totalLiabilityVal);
          }else if(parentID ==="liabilitySlot" || parentID === "equitySlot"){
            // Don't add value
          }else if(parentID ==="assetSlot"){
              totalAssetVal -= Number(draggerValue);
              $("#totalAsset").html("$" + totalAssetVal);
              totalLiabilityVal += Number(draggerValue);
              $("#totalLiability").html("$" + totalLiabilityVal);
          }
        }
      }
    }

    $(this).css("outline", "1px solid #666666");
  },

  dragover: function(e){
    $(this).css("outline", "2px dashed #666666");
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }

    return false;
  },

  dragleave: function(e){
    $(this).css("outline", "1px solid #666666");
  },

});
