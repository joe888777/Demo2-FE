import { TARGET_URL } from '../core/setting'; 
export const getImage = async () => {
    let data = "";
    await fetch(TARGET_URL /*{
        method: "GET",
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin": ["*"]
        }
    }*/)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
        console.log(data);
    });
    return data;
}