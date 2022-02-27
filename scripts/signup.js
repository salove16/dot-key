import footer from '../components/footer.js'
document.querySelector("#footer").innerHTML = footer();

let btn = document.getElementById("button1");
btn.onclick = async (event)=>{
    event.preventDefault();
  
    let register_data = {
        name : "Anannya!",
        email: document.querySelector("#name").value,
        password: document.querySelector("#password").value,
        username: document.querySelector("#email").value,
        mobile: document.querySelector("#last_name").value,
        description: "Anannya"
    };

    register_data = JSON.stringify(register_data);
    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
            method: "POST",
            body: register_data,
            headers : {
                "Content-Type" : "application/json",
            },
        });
        let data = await res.json();
         console.log(data);
    } catch (error) {
        console.log(error);
    }
};


