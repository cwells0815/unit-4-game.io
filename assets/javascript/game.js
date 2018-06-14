$(document).ready(function() {
    var totalScore = 0;
    function gameInit(totalWins, totalLosses, scoreMessage) {
      
      var scoreMatch = Math.floor((Math.random() * 120) + 1);;
      $('#points').text(scoreMatch);
      $('#pointsValue').val(scoreMatch);
      
   
      // load c1-4
      var crystal1Value = Math.floor((Math.random() * 15) + 1);;
      $('#crystal1Value').val(crystal1Value);
   
      
      var crystal2Value = Math.floor((Math.random() * 15) + 1);;
      $('#crystal2Value').val(crystal2Value);
   
      
      var crystal3Value = Math.floor((Math.random() * 15) + 1);;
      $('#crystal3Value').val(crystal3Value);
   
      
      var crystal4Value = Math.floor((Math.random() * 15) + 1);;
      $('#crystal4Value').val(crystal4Value);
   
      $('#totalScore').text(totalScore);
      $('#totalScoreValue').val(totalScore);
   
      $('#wins').text(totalWins);
      $('#winsValue').val(totalWins);
   
      $('#losses').text(totalLosses);
      $('#lossesValue').val(totalLosses);
   
      $('#scoreMessage').text(scoreMessage);
    } 
   
    // start
    gameInit(0, 0);
   
    $('.crystalButton').on('click', function() {
     var getValue = $(this).next('input').val();
     var getTotal =  $('#totalScoreValue').val();
   
     var newTotalScore = Number(getValue) + Number(getTotal);
     
     $('#totalScore').text(newTotalScore);
     $('#totalScoreValue').val(newTotalScore)
   
     var pointsToMatchValue = $('#pointsValue').val();
     var getTotalWins = $('#winsValue').val();
     var getTotalLosses = $('#lossesValue').val();
   
     // You win
     if (Number(pointsToMatchValue) === newTotalScore) {
       gameInit(Number(getTotalWins) + 1, getTotalLosses, 'You win!');  
     }
   
     // You lose
     if (newTotalScore > pointsToMatchValue) {
       gameInit(getTotalWins, Number(getTotalLosses) + 1, 'You lost!');  
     }
    });
   });