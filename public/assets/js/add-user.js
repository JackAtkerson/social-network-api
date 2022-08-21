fetch('/api/users', {
    method: 'POST',
    headers: {
        Acccept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
    .then(response => response.json())
    .then(postResponse => {
        alert(postResponse => {
            alert('Pizza created successfully!');
            console.log(postResponse);
        })
        .catch(err => {
            console.log(err);
        });
    })