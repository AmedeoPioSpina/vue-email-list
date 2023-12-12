const emailFetch = async () => {
    return resutl = await axios("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((resp) => resp.data)
    .then((data) => data.response);
}

const emailList = []

const injectElement = async () => {
    for(let i = 0; i < 10; i++){
        const newLi = document.createElement("li");
        const ulTarget =  document.querySelector("ul");
        const emailResult = await emailFetch();
        console.log(emailResult);
        emailList.push(emailResult);
        newLi.textContent = emailResult;
        ulTarget.appendChild(newLi);
    }
}

injectElement()
