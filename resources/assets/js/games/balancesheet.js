init();

var totalAssetVal = 0,
    totalLiabilityVal = 0;

// Reset button
document.getElementById("reset").addEventListener("click", init);

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

  // Create the game content
  var gameNumbers = {500 : "Cash", 200 : "Account Payable", 300 : "Common Stock"};
  for (var k in gameNumbers){
    if (gameNumbers.hasOwnProperty(k)) {
         // alert("Key is " + k + ", value is" + gameNumbers[k]);
      $('<li class="box" draggable="true" value="'+ k +'">' + gameNumbers[k] + '<span class="pull-right">$'+k+"</span>" +'</li>').data( 'number', k ).attr( 'id', gameNumbers[k] ).appendTo('#gameContent');
    }
  }
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
