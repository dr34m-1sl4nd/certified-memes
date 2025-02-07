function changeText() {
    let recipientName = document.getElementById("nameone")
    let firstInsert = document.getElementById("recname")
    let donorName = document.getElementById("nametwo")
    let secondInsert = document.getElementById("urname")
    let date = document.getElementById("date")
    let dateInsert = document.getElementById("dmy")
    
    recipientName.innerHTML = firstInsert.value
    donorName.innerHTML = "Presented By: " + secondInsert.value
    date.innerHTML = dateInsert.value
}