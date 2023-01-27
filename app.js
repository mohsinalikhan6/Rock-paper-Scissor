var options = ['Rock', 'Paper', 'Scissor']

function startGame() {
    var star = document.getElementById('startGame');
    star.style.display = "none"
    var btns = document.getElementById('btns');
    btns.style.display = "block";
    var results = document.getElementById('result');
    results.style.display = 'none'
    var img1 = document.getElementById('img1');
    img1.style.display = 'none'
    var img2 = document.getElementById('img2');
    img2.style.display = 'none'
    var img3 = document.getElementById('img3');
    img3.style.display = 'none'

}

function userChoice(val) {

    var computerChoice = computerSelected();
    var results = document.getElementById('result');
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    if (val === computerChoice) {
        results.innerHTML = "Draw " + "Computer Chooses " + computerChoice;
        img3.style.display = 'block'    
    } else if (val === options[0] && computerChoice === options[1]
        || val === options[1] && computerChoice === options[2]
        || val === options[2] && computerChoice === options[0]) {
        results.innerText = "Computer Winner " + "Computer Chooses " + computerChoice;
        img1.style.display = "block"
    } else {
        results.innerText = "User Winner " + "Computer Chooses " + computerChoice;
        img2.style.display = "block"
    }
    // console.log(computerChoice)
    // console.log(results)
    // console.log(val)

    var star = document.getElementById('startGame');
    star.style.display = "block";
    var btns = document.getElementById('btns');
    btns.style.display = "none";
    results.style.display = 'block'
}

function computerSelected() {
    var random = Math.random()

    if (random < 0.34) {
        return (options[0])
    }
    else if (random < 0.67) {
        return (options[1])
    }
    else {
        return (options[2])
    }
}
