


const ourFetch = (url) => {
    
    let promise = new Promise((resolve, reject)=>{

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'url')

        xhr.send()
        
    xhr.onreadystatechange = ()=>{
        
        if(xhr.readyState == 4  && xhr.status == 200){
            let data = JSON.parse(xhr.responseText)
            resolve(data)
             
            }
            else{
                reject('error')
            }
        }
    


    })

    return promise;
}

window.ourFetch = ourFetch


