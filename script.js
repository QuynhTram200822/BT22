// Using Fetch to call API
// fetch('https://dummyjson.com/products')
//   .then(Response => {
//     return Response.json()
//   })
//   .then(data => {
//     // console.log("Check fetch data:", data)
//   })


// Using Axios to call API

axios.get('https://dummyjson.com/products')
  .then(response => {
    console.log(response.data);
  });