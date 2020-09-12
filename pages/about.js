export default function About() {

    fetch('https://reqres.in/api/users',
        {
            method: "POST",
            body: JSON.stringify({
                "name": "morpheus",
                "job": "leader"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((res) => {
            res.json().then((data) => {
                console.log(data);
                // document.querySelector("#name").innerHTML = data.name
            });
        })
        .catch((err) => {
            console.log(err)
        });

    return (
        <ul>
            oi
        </ul>
    )
}
