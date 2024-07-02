//global vairables - pause and play buttons
var musicButton = document.getElementById("playMusic");
var pauseButton = document.getElementById("stopMusic");

var musicButtonTwo = document.getElementById("playMusicTwo");
var pauseButtonTwo = document.getElementById("stopMusicTwo");

var musicButtonThree = document.getElementById("playMusicThree");
var pauseButtonThree = document.getElementById("stopMusicThree");

//spin variables
var spin = document.getElementById("vinyl");
var spinTwo = document.getElementById("vinylTwo");
var spinThree = document.getElementById("vinylThree");

//radio variables
var radioWave = document.getElementById("hertz"); //for changing the frequency based on what message is playing
var radioOn = document.getElementById("radioOn");
var radioOnTwo = document.getElementById("radioOnTwo");
var radioOnThree = document.getElementById("radioOnThree");
var radioOnFour = document.getElementById("radioOnFour");
var radioOnFive = document.getElementById("radioOnFive");
var radioOff = document.getElementById("radioOff");
var haveIt = [0, 1, 2, 3, 4]; //leo did this part



var complimentHolder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var complimentDisplay = document.getElementById("complimentDisplay");


//music functions - 1
function play () {
    musicButton.play();
}

function pause () {
    musicButton.pause();
}

function activateSound() { //function for playing the sound
    spin.classList.add("recordSpin"); //this line and the one above are just to add the animation
    if (musicButton.paused) { //if the music is paused and the button is pressed then it will play
        musicButton.play();
        spin.classList.remove("recordSlow"); //prevents the animation from playing when it shouldn't
        spin.classList.add("recordSpin"); //plays the proper animation for when the music plays
    } 
    }

    function playSound() {
        if (pauseButton.paused) { //if the pause sound is paused when the button is pressed then it will play
            pauseButton.play(); //when it plays it will tell the music to pause
            musicButton.pause();
            spin.classList.remove("recordSpin"); //the music play animation is stopped
            spin.classList.add("recordSlow"); //the music stop animation is started
        } else { 
            pauseButton.pause(); //tells the record scratch to pause if it isn't told to play
            }
    }


//music functions - 2
    function activateSoundTwo() { //function for playing the sound
        spinTwo.classList.add("recordSpin"); //this line and the one above are just to add the animation
        if (musicButtonTwo.paused) { //if the music is paused and the button is pressed then it will play
            musicButtonTwo.play();
            spinTwo.classList.remove("recordSlow"); //prevents the animation from playing when it shouldn't
            spinTwo.classList.add("recordSpin"); //plays the proper animation for when the music plays
        } 
        }
    
        function playSoundTwo() {
            if (pauseButtonTwo.paused) { //if the pause sound is paused when the button is pressed then it will play
                pauseButtonTwo.play(); //when it plays it will tell the music to pause
                musicButtonTwo.pause();
                spinTwo.classList.remove("recordSpin"); //the music play animation is stopped
                spinTwo.classList.add("recordSlow"); //the music stop animation is started
            } else { 
                pauseButtonTwo.pause(); //tells the record scratch to pause if it isn't told to play
                }
        }


        //music functions - 3
        function activateSoundThree() { //function for playing the sound
            spinThree.classList.add("recordSpin"); //this line and the one above are just to add the animation
            if (musicButtonThree.paused) { //if the music is paused and the button is pressed then it will play
                musicButtonThree.play();
                spinThree.classList.remove("recordSlow"); //prevents the animation from playing when it shouldn't
                spinThree.classList.add("recordSpin"); //plays the proper animation for when the music plays
            } 
            }
        
            function playSoundThree() {
                if (pauseButtonThree.paused) { //if the pause sound is paused when the button is pressed then it will play
                    pauseButtonThree.play(); //when it plays it will tell the music to pause
                    musicButtonThree.pause();
                    spinThree.classList.remove("recordSpin"); //the music play animation is stopped
                    spinThree.classList.add("recordSlow"); //the music stop animation is started
                } else { 
                    pauseButtonThree.pause(); //tells the record scratch to pause if it isn't told to play
                    }
            }




        

    //compliment generator
    function randomGenerator() {
    let number;
    var randomCompliment = complimentHolder[Math.floor(Math.random()*complimentHolder.length)]; //leo did this part
    var index = complimentHolder.indexOf(randomCompliment); //leo did this part
    switch (randomCompliment) { //random number between 0 and 14. when a number is picked, the compliment with that case is displayed.
        case 0: //bella cases 0-4
            number = ' "You are a tough video gamer competitior" - Bella';
            complimentHolder.splice(index, 1); //leo did this part
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 1: 
            number = ' "You are photogenic" - Bella';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 2: 
            number = ' "You are the best at dirty jokes" - Bella';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 3: 
            number = ' "You are a good chef and you have the best $20" - Bella';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 4: 
            number = ' "You have the best confused face" - Bella';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 5: //leo cases 5-9
            number = '"You are so funny" - Leo';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 6: 
            number = '"You are a clutch gamer boy" - Leo';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 7: 
            number = '"&#x1F935; &#x1F448; &#x1F346; &#x1F44D; &#x1F924;" - Leo';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 8: 
            number = '"Looking great today &#x1F609;" - Leo';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 9: 
                number = '"You are always right" - Leo';
                complimentHolder.splice(index, 1);
                complimentDisplay.innerHTML = number;
                complimentDisplay.style = "color: #CC3F2D";
    break;
        case 10: //peyton cases 10-14
            number = '"You are the best baking buddy" - Peyton';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 11: 
            number = '"You are a fiercely loyal friend" - Peyton';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 12: 
            number = '"Your straightforward and honest perspective makes for the best advice" - Peyton';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 13: 
            number = '"You do not let fear stop you from going after what you want or what you think is right" - Peyton';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 14: 
            number = '"One of the best people to go hiking or camping with" - Peyton';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 15: //logan cases 15-19
            number = '"As long as you have been in my life, it has felt like a dream that I never wish to wake up from" - Logan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 16: 
            number = '"You are my shiny pokemon because I am so lucky to have found you" - Logan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 17: 
            number = '"You make my life complete" - Logan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 18: 
            number = '"You always listen to anything I have to say and know exactly what to say when I need to hear it" - Logan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 19: 
            number = '"Your eyes are like a window to heaven" - Logan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 20: //ethan cases 20-24
            number = '"You are an amazing and supportive person" - Ethan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 21:
            number = '"You have a contagious smile and laugh" - Ethan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
        case 22:
            number = '"You have a great voice" - Ethan';
            complimentHolder.splice(index, 1);
            complimentDisplay.innerHTML = number;
            complimentDisplay.style = "color: #CC3F2D";
    break;
            case 23: 
                number = '"Your company always brightens my day" - Ethan';
                complimentHolder.splice(index, 1);
                complimentDisplay.innerHTML = number;
                complimentDisplay.style = "color: #CC3F2D";
    break;
        case 24: 
                number = '"I like your style" - Ethan';
                complimentHolder.splice(index, 1);
                complimentDisplay.innerHTML = number;
                complimentDisplay.style = "color: #CC3F2D";
    break;
        default: complimentDisplay.innerHTML = "That's all we could fit ;) Click to see them again!";
        complimentDisplay.style = "color: green";
        complimentHolder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        }
        }



        /* light mode stuff */

        function light() {
            var lightMode = document.body; //makes the variable lightMode equal to the body of the html document
            lightMode.classList.toggle("lightMode"); //toggles on and off the classlist
        }




        /* slideshow for gallery */
        var slideNumber = 1;
        showSlides(slideNumber);

        function changeSlide(n) {
            showSlides(slideNumber += n);
        }

        function currentSlide(n) {
            showSlides(slideNumber = n);
        }

        function showSlides(n) {
            var i = 0;
            var slides = document.getElementsByClassName("galleryContainer");
            if (n > slides.length) {
                slideNumber = 1;
            }
            if (n < 1) {
                slideNumber = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideNumber - 1].style.display = "block";
        }





        //radio function
        function activateRadio() { //function for playing the sound
            let messageNumber;
            var randomNumber = haveIt[Math.floor(Math.random()*haveIt.length)]; //leo did this part
            var indexTwo = haveIt.indexOf(randomNumber); //leo did this part
            console.log(randomNumber);
            switch (randomNumber) { //random number between 0 and 14. when a number is picked, the compliment with that case is displayed.
                case 0: //bella cases 0-4
                if (haveIt.includes(0) && (radioOn.paused)) {
                    haveIt.splice(indexTwo, 1); //leo did this part
                    messageNumber = 'Bella';
                    radioWave.innerHTML = messageNumber; //this line changes the text based on what audio message is playing
                    radioOn.play();
                    radioWave.style = "color: rgb(218, 199, 199)";
                }
            break;
                case 1: 
                if (haveIt.includes(1) && (radioOnTwo.paused)) {
                    haveIt.splice(indexTwo, 1); //leo did this part
                    messageNumber = 'Ethan';
                    radioWave.innerHTML = messageNumber; //this line changes the text based on what audio message is playing
                    radioOnTwo.play();
                    radioWave.style = "color: rgb(218, 199, 199)";
                }
            break;
                case 2: 
                if (haveIt.includes(2) && (radioOnThree.paused)) {
                    haveIt.splice(indexTwo, 1); //leo did this part
                    messageNumber = 'Logan';
                    radioWave.innerHTML = messageNumber; //this line changes the text based on what audio message is playing
                    radioOnThree.play();
                }
            break;
                case 3: 
                if (haveIt.includes(3) && (radioOnFour.paused)) {
                    haveIt.splice(indexTwo, 1); //leo did this part
                    messageNumber = 'Peyton';
                    radioWave.innerHTML = messageNumber; //this line changes the text based on what audio message is playing
                    radioOnFour.play();
                    radioWave.style = "color: rgb(218, 199, 199)";
                }
            break;
                case 4:
                    if (haveIt.includes(4) && (radioOnFive.paused)) {
                        haveIt.splice(indexTwo, 1); //leo did this part
                        messageNumber = 'Leo';
                        radioWave.innerHTML = messageNumber; //this line changes the text based on what audio message is playing
                        radioOnFive.play();
                        radioWave.style = "color: rgb(218, 199, 199)";
                    }
            break;
                default: radioWave.innerHTML = "No More Messages - Press On to Hear Again";
                radioWave.style = "color: #d4af37";
                haveIt = [0, 1, 2, 3, 4] //leo did this part
                if ((radioOff.paused)) {
                    radioOn.pause();
                    radioOnTwo.pause();
                    radioOnThree.pause();
                    radioOnFour.pause();
                    radioOnFive.pause();
                    radioOff.play();
                    }
                }
            }
        
            function killSwitch() {
                if (radioOff.paused) { //if the pause sound is paused when the button is pressed then it will play
                    radioOff.play(); //when it plays it will tell the music to pause
                    radioOn.pause();
                    radioOnTwo.pause();
                    radioOnThree.pause();
                    radioOnFour.pause();
                    radioOnFive.pause();
                } else { 
                    radioOff.pause(); //tells the record scratch to pause if it isn't told to play
                    }
            }