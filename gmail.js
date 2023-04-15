// var x = "vishnu@."
// var y  = x.split('.')
// for(var i = 0;i < y.length;i++){
//     if(y[i] == ""){
//         console.log("hello")
//     }
// }

var spl = "!/?`~\|,'{}[]_;:#$%^&*()-+"
function Run(){
    var err = document.getElementById("error")
    err.innerHTML = ""
    var email = document.getElementById("email").value
    // console.log(email)
    email = email.toLowerCase()
    
    //checking special characters and number of @symbols
    if(email.indexOf('@') == -1){
        err.innerHTML = "Invalid username or Email-Id"
    }
    var count = 0
    for(var i = 0;i < email.length;i++){
        if(email[i] == '@'){
            count++
        }
        // checking any special characters included or not
        if(spl.includes(email[i])){
            err.innerHTML = "only accepts alphabets, digits and fullstops(.)"
        }
    }
    if(count > 1){
        err.innerHTML = "Invalid username or Email-Id"
    }

    // if(email.length < 6){
    //     err.innerHTML = "Invalid username or Email-Id"
    // }

    //splitting at @ symbol
    var div = email.split('@')

    // checking the length of username after splitting at @ symbol
    if(div[0].length < 6){
        err.innerHTML = "username contains atleast 6 characters"
    }

    // checking whether dot in first or last place in the username
    var dots_user = div[0].split('.')
    for(var i = 0; i < dots_user.length;i++){
        if(dots_user[i].length == 0){
            err.innerHTML = "Invalid username or Email-Id"
        }
    }
    
    if(div[1] != "gmail.com"){
        err.innerHTML = "Invalid email-id"
    }

    // checking dot symbol after @
    if(div[1].indexOf('.') == -1){
        err.innerHTML = "Invalid username or Email-Id"
    }

    // checking whether dot in first or last place in the domain
    var dots_domain = div[1].split('.')
    for(var i = 0; i < dots_domain.length;i++){
        if(dots_domain[i].length == 0){
            err.innerHTML = "Invalid username or Email-Id"
        }
    }

    // if there is not any invalid error, this step will come to action
    if(err.innerHTML == ""){
        err.innerHTML = "Your email or username is ready"
    }



}

// var x = "vishnuvardhanaa"
// var y = x.indexOf('a')
// console.log(y)
