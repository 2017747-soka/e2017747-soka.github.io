function hello(language) {
    var message = "";

    if (language == 1) {
        message = "★★★";
    } else if (language == 2) {
        message = "★";
    } else if (language == 3) {
        message = "★★";
    } else if (language == 4) {
        message = "★★★★";
    } else {
        message = "想定されていない引数です．";
    }

    alert(message);

}

function janken(myHand) {

    var handArray = ['グー', 'チョキ', 'パー'];

    console.log('あなたは' + handArray[myHand]);

    var random = Math.random() * 100;
    console.log(random);

    var randomInt = Math.floor(random)
    console.log(randomInt);

    var computerHand = randomInt % 3;
    console.log('ばつ丸くんは' + handArray[computerHand]);

    var victory = 0;

    victory = (myHand - computerHand + 3) % 3;

    
     if(myHand == 0) {
         if(computerHand == 0) {
             victory = 0;
         } else if(computerHand == 1) {
             victory = 2;
         } else if(computerHand == 2) {
             victory = 1;
         }
   
     } else if (myHand == 1) {
         if(computerHand == 0) {
             victory = 1;
         } else if(computerHand == 1) {
             victory = 0;
         } else if(computerHand == 2) {
             victory = 2;
         }
     
     } else if (myHand == 2) {
         if(computerHand == 0) {
             victory = 2;
         } else if(computerHand == 1) {
             victory = 1;
         } else if(computerHand == 2) {
         victory = 0;
     }
     }

    var messageArray = ['あいこだからもう一回！', '負けちゃった…残念', '勝ったよ！おめでとう★'];
     alert('あなたは' + handArray[myHand] + '，ばつ丸くんは' + handArray[computerHand] + '，だから' + messageArray[victory]);

    $('#janken-result-p').text("あなたは" + handArray[myHand] + "，ばつ丸くんは" + handArray[computerHand] + "だから" + messageArray[victory]);

}