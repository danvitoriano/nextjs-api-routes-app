export default function Async() {



    // Fetch a random joke
    async function fetchQuote() {
        const rsp = await fetch("https://reqres.in/api/users", {
            // Adding method type 
            method: "POST",

            // Adding body or contents to send 
            body: JSON.stringify({
                "name": "morpheus",
                "job": "leader"
            }),

            // Adding headers to the request 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }),
            data = await rsp.json();
        return data;
    }

    var xpto = async function sayJoke() {
        try {
            let result = await fetchQuote();
            console.log(result)
        } catch (err) {
            console.error(err);
        }
    }


    sayJoke();

    return (
        <ul>
            async
        </ul>
    )
}
