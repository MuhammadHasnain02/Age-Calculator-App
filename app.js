let userDOB = document.getElementById("userDOB")
userDOB.max = new Date().toISOString().split("T")[0]

let calcAgeBtn = document.getElementById("calcAgeBtn")
let prntUserAge = document.getElementById("prntUserAge")

function calcUserAge() {
    
    // today Date
    let todayDate = new Date()
    let date = todayDate.getDate()
    let month = todayDate.getMonth() + 1
    let year = todayDate.getFullYear()
    
    // User Date Of Birth
    let userBirth = new Date(userDOB.value)
    let userDate = userBirth.getDate()
    let userMonth = userBirth.getMonth() + 1
    let userYear = userBirth.getFullYear()

    let totalDate;
    let totalMonth;
    let totalYear;

    totalYear = year - userYear

    if (month >= userMonth) {
        totalMonth = month - userMonth
    }
    else {
        totalYear--
        totalMonth = 12 + month - userMonth
    }

    if (date >= userDate) {
        totalDate = date - userDate
    }
    else{
        totalMonth--
        totalDate = getDaysInMonth(year , month - 1) + date - userDate
    }

    prntUserAge.innerText = `Currently, You are ${totalYear} years, ${totalMonth} months and ${totalDate} days old.`;

}

function getDaysInMonth(year , month) {
    return new Date(year , month , 0).getDate()
}

calcAgeBtn.addEventListener("click" , () => {

    if (userDOB.value) {
        calcUserAge()
    }
    else{
        prntUserAge.innerText = "Please select your Date of Birth."
    }

})