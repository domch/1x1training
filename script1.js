

const NUMBER_OF_WORK = 100;
const TOTAL_TIME = 180;

let rightResult = 0;
let totalTry = 0;
let firstNumber = 0;
let secondNumber = 0;
let totalTime = 0;



function generateOperands(){
    firstNumber = Math.floor(Math.random()*10) + 1;
    secondNumber = Math.floor(Math.random()*10) + 1

    $('#first').text(firstNumber);
    $('#second').text(secondNumber);
}


function main(){

    $('button').hide();
    $("#result").focus();

    generateOperands();

    let interval = 
        setInterval(function(){
            let secs = (TOTAL_TIME - totalTime) % 60;
            let mins = (TOTAL_TIME - totalTime) / 60;

            $("time").html(`${Math.floor(mins)}`.padStart(2, "0")+":"+`${Math.round(secs)}`.padStart(2, "0"));

            if(totalTime == TOTAL_TIME){
                clearInterval(interval);
                totalTime = 0;
                $("#result").attr('disabled','disabled');
            }

            totalTime++;

        }, 1000);


        recognition.start();
}


$("#result").on("keyup", function(e){

    let val = +$(this).val();
    //if(e.which == 13){
    if(firstNumber*secondNumber == val){
        generateOperands();
        $(this).val("");    
        $('section').html(`${++rightResult} richtige Antwort von 100`);
    }
});


$('button').on('click', main);



var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'de';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = true;


recognition.onresult = function(event) {
    let number = parseInt(event.results[event.results.length -1][0].transcript);
    $("#result").val(number);

    console.log(number)
    console.log(event.results)
    
    if(firstNumber*secondNumber == number){
        generateOperands();
        $("#result").val("");

        $('section').html(`${++rightResult} richtige Antwort von 100`);
    }
};


recognition.onnomatch = function() {
    console.log('Speech not recognised');
  }