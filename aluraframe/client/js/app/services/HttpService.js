class HttpService {

    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET',url);
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log('Respuesta recibida');
                                            
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        console.log('Error en petición');
                        reject(xhr.responseText);
                    }
                }
            }
        });
    }
}