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
    }
}