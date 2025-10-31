var hygein = './Dataset/hygeinerun.json';
const fs = require('fs')

function runAnalysis(jsonString) {
    var accuracyrate = [];
    var stargrowthrate = [];
    var currstars = [];
    var hints=[];
    var all_correct = [];
    var average_session_time = [];
    var number_of_students=0;
    var data = JSON.parse(jsonString);
    data.students.forEach(element => {
        accuracyrate.push(calculateAccuracyRate(element));
        stargrowthrate.push(calculateStarGrowthRate(element));
        currstars.push(calculateCurrentStars(element));
        all_correct.push(calculateFreqAllCorrect(element));
        average_session_time.push(calculateSessionTime(element));
        hints.push(getHints(element));
        number_of_students++;
    });
    const freq_all_correct = {};
    all_correct.forEach(e => freq_all_correct[e] ? freq_all_correct[e]++ : freq_all_correct[e] = 1 );
        
    var sum = average_session_time.reduce((a, b) => (a + b), 0);
    average_session_time = sum/number_of_students;
    
    return {
        accuracyrate, 
        stargrowthrate, 
        currstars, 
        freq_all_correct, 
        average_session_time,
        hints,
    };
}

function runData (returnType) {
    var readData = fs.readFileSync(hygein, 'utf8');
    var obj = runAnalysis(readData);    

    if(returnType == "accuracyRate")    return obj['accuracyrate'];
    if(returnType == "starGrowthRate")    return obj['stargrowthrate'];
    if(returnType == "currStars")    return obj['currstars'];
    if(returnType == "averageSessionTime") return obj['average_session_time'];
    if(returnType == "hints") return obj['hints'];
}

function calculateAccuracyRate(data) {  
    var id = data.id;
    var acc = data.attempts.correct/(data.attempts.correct+data.attempts.wrong);
    var obj = {'id':id,'acc_rate':acc};
    return obj
}

function calculateStarGrowthRate(data) {  
    var id = data.id;
    var star_growth = data.studentStats.starsEarnedFromThisGame - data.studentStats.starsEarnedLastAttempt;
    var obj = {'id':id,'star_growth':star_growth};
    return obj;
}

function calculateCurrentStars(data) { 
    var id = data.id;
    var currentStars = data.studentStats.currentStars;
    var obj ={'id':id,'currentStars':currentStars};
    return obj;
}

function calculateFreqAllCorrect(data) {  
    var all_correct = data.attempts.allCorrectAttempt;
    return all_correct;
}

function calculateSessionTime(data) {  
    var session_start_time = data.startingTime;
    var session_last_attempt_time = data.lastAttemptTime;
    session_start_time = session_start_time.match(/\d\d:\d\d/);
    session_last_attempt_time = session_last_attempt_time.match(/\d\d:\d\d/);
    var session_time = session_last_attempt_time - session_start_time;
    console.log(session_start_time);
    let [hour, minute] = session_start_time[0].split(':');
    hour = Number(hour);
    min = Number(minute);
    var d = hour*60 + min;

    let [hour1, minute1] = session_last_attempt_time[0].split(':');
    hour1 = Number(hour1);
    min1 = Number(minute1);
    var d1 = hour1*60 + min1;

    return d1-d;
}


function getHints(data){
    var id = data.id;
    var hints =data.studentStats.hintsTaken;
    var obj = {
        'id':id,
        'hints':hints,
    };
    return obj;
}

function getSingleUserData() {
    var readData = fs.readFileSync('./Dataset/sample_data_hygein.json', 'utf8');
    var data = JSON.parse(readData);
    var stars = [];
    var correct_attempts = [];
    data.data.forEach(element => {
        stars.push({
            "sno": element.session_num,
            "star": element.studentStats.currentStars,
        });
        correct_attempts.push({
            "sno": element.session_num,
            "correct": element.attempts.correct,
        })
    });
    return [
        stars,
        correct_attempts,
        runData("averageSessionTime"),
    ];
}

exports.getAccuracyRate = () => runData("accuracyRate");
exports.getStarGrowthRate = () => runData("starGrowthRate");
exports.getCurrStars = () => runData("currStars");
exports.getAverageSessionTime = () => runData("averageSessionTime");
exports.getHints = () => runData("hints");
exports.singleUserData = () => getSingleUserData();