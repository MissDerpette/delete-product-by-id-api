

const outputElement = document.querySelector('.output');
const appElement = document.querySelector('.app'); 


const getProductForm = document.querySelector('#get-product-id-form');
getProductForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // get id from form value
  let productId = document.querySelector('#g-product-id').value;
  // interpo;ate apiurl with id
  const apiUrl = `http://206.189.148.20:8080/api/get/${productId}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the retrieved data
      console.log(data); // For example, log the retrieved data

      // Update the DOM with the retrieved data
      outputElement.innerHTML = `
        <div class="product-card">
        <div class="product-image">
            <img src="${data.image}">
        </div>
        <div class="product-name">
            <h3>  ${data.name} </h3>
        </div>
        <div class="product-description">
            ${data.description}
        </div>
        <div class="product-price">
             ${data.price}
        </div>
        <div class="add-to-card submit-button">Update</div>
      </div>
       `; 

    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.log('Error:', error);
    });
});


const updateForm = document.querySelector('#update-product-form');
updateForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('updateForm, clicked')

    function getFormValue (){
        const name = document.getElementById("u-product-name").value;
        const description = document.getElementById("u-product-description").value;
        const image = document.getElementById("u-image").value;
        const price = document.getElementById("u-product-price").value;
    
        let formData = {
            "name": name,
            "image": image,
            "description": description,
            "price": price
        }
        return formData
    };


    
    let productId = document.querySelector('#u-product-id').value;
    let updatedUrl = `http://206.189.148.20:8080/api/update/${productId}`
    

    fetch(updatedUrl, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(getFormValue())
    })
    
    .then(response => response.json())
    .then(data => {
        console.log('Response', data);

        
    // fetch
});
})
//start of delete-crud
// let deletedId = document.querySelector('#d-product-id').value;
// let deletedUrl = `http://206.189.148.20:8080/api/delete/${deletedId}`

// function deletedData() {
//     fetch(deletedUrl, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log('Data deleted successfully!');
//         } else {
//             console.error('Failed to delete data.');
//         }
//     })

//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// const delDataForm = document.querySelector('#delete-product-id-form');
// delDataForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log('delForm, deletedData');
// })



function deletedData() {

    let deletedId = document.querySelector('#d-product-id').value;
    let deletedUrl = `http://206.189.148.20:8080/api/delete/${deletedId}`;

    fetch(deletedUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            console.log('Data deleted successfully!');
        } else {
            console.error('Failed to delete data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const delDataForm = document.querySelector('#delete-product-id-form');
delDataForm.addEventListener('submit', function(event){
    event.preventDefault();
    deletedData();
});

