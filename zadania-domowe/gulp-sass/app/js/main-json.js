$.getJSON('../package.json', function (data) {
    console.log(data); 
    wstaw(data.author);
    
});

function wstaw(autor) {
    $('span').append(autor);
} 

