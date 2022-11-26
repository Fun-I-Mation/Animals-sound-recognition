dog = 0;
cow = 0;
cat = 0;
lion = 0;

function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    //access for microphone// 
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iODfCkiZ_/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(results);
        red = Math.floor(Math.random()*255) + 1;
        green = Math.floor(Math.random()*255) + 1;
        blue = Math.floor(Math.random()*255) + 1;
        document.getElementById("result_label").innerHTML = "Detected voice is of " + results[0].label;
        document.getElementById("result_count").innerHTML = "Detected dog - " + dog + " Detected cat - " + cat + " Detected cow - " + cow + " Detected lion - " + lion;
        document.getElementById("result_label").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("result_count").style.color = "rgb(" + red + "," + green + "," + blue + ")";

        img = document.getElementById("image");

        if(results[0].label == "Barking")
        {
            img.src = "bark.gif";
            dog = dog + 1;
        }

        else if(results[0].label == "Meowing")
        {
            img.src = "meow.gif";
            cat = cat + 1;
        }
        
        else if(results[0].label == "Mooing")
        {
            img.src = "moo.gif";
            cow = cow + 1;
        }

        else if(results[0].label == "Roaring")
        {
            img.src = "roar.gif";
            lion = lion + 1;
        }

        else
        {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}