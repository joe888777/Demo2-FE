import { TARGET_URL } from '../core/setting'; 
export const getImage = async () => {
    let data = "";
    await fetch(TARGET_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
        console.log(data);
    });
    return data;
}