const  baseUrl = "http://localhost:3002";
class ApiService
{
    getApi(uri) {
         return fetch(baseUrl+uri);         
    }
    postApi(uri,payLoad) {  
        fetch(baseUrl+uri, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payLoad)
        }).then(res => res.json())
          .then(res => console.log(res));
    }
    putApi(uri,payLoad) {  
        fetch(baseUrl+uri, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payLoad)
        }).then(res => res.json())
          .then(res => console.log(res));
    }
    patchApi(uri,payLoad) {  
        fetch(baseUrl+uri, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payLoad)
        }).then(res => res.json())
          .then(res => console.log(res));
    }
    deleteApi(uri){         
        fetch(baseUrl+uri, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json( )
        })
        .then(data => 
            // this is the data we get after doing the delete request, do whatever you want with this data
            console.log(data) 
        );
    }
}
export default new ApiService();