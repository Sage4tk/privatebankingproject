window.onscroll = () => {
    if (window.scrollY == 0) {
        document.querySelector('nav').style.backgroundColor = "";
    } else if (window.scrollY <= 100) {
        document.querySelector('nav').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        document.querySelector('nav').style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    }
    
    
    if (window.scrollY >= 400) {
        document.querySelector('.about > h2').classList.add('appear');
        document.querySelector('.about > p').classList.add('appear');
    }
}

const funds = document.querySelector('#funds');
const mentor = document.querySelector('#mentor');

//fund number display
(fundIncrease = () => {
    let num = 200371;
    funds.innerHTML = num;
    setInterval(() => {
        const random = Math.floor(Math.random() * 5);
        num += random;
        funds.innerHTML = num;
    }, 5000)
})();

//mentor number display
(mentorIncrease = () => {
    let num = 49104;
    mentor.innerHTML = num;
    setInterval(() => {
        const random = Math.floor(Math.random() * 3);
        num += random;
        mentor.innerHTML = num;
    }, 5000)
})();   

// fundIncrease();
// mentorIncrease();

const team = document.querySelectorAll('img');

const teamName = document.querySelector(".who h3");
const teamPos = document.querySelector(".who h4");
const teamDesc = document.querySelector(".who p");

team.forEach((e) => {
    e.onmouseover = (el) => {
        const target = el.target.id;

        if (target === "coo") {
            teamName.innerHTML = "Elfrid Manning";
            teamPos.innerHTML = "Chief Operating Officer";
            teamDesc.innerHTML = "Elfrid takes bold calculated stakes. His mastery in the use of financial instruments made him a millionaire in less than a year. He is passionate in sharing his knowledge."
        } else if (target === "ceo") {
            teamName.innerHTML = "Andrew Dang";
            teamPos.innerHTML = "Chie Executive Officer";
            teamDesc.innerHTML = "A visionary of common wealth. Andrew's wants to see a prosporous world where everybody wins. He created this company to help everyone with financial literacy"
        } else {
            teamName.innerHTML = "Dan McDermott";
            teamPos.innerHTML = "Head of Human Resources";
            teamDesc.innerHTML = "Dan has a keen eye for talent, he helped this company prosper by picking the right people. He has a masters degree in both finance and human resources."
        }
    }
})

document.querySelector('button').onclick = (e) => {
    e.preventDefault();
}

//burger
document.querySelector('.burger').onclick = () => {
    document.querySelector('ul').classList.toggle("hidden");
    document.querySelector('ul').classList.toggle('showlist');
}
