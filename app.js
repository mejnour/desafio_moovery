var table = document.getElementById('table');

const response2json = response => response.json()

const addLine = (left, right, table) => {
    var newRow  = table.insertRow();
    var newCell = newRow.insertCell();
    newCell.innerHTML = left
    newCell = newRow.insertCell();
    newCell.innerHTML = right
}

const addImg = (img) => {
    var imagem = document.createElement("img");
    imagem.src = img;
    
    return imagem
}

const addRow = (name, last, age, city, img, table) => {
    var newRow  = table.insertRow();
    var newCell = newRow.insertCell();
    
    if (img !== "image") 
        newCell.appendChild(addImg(img));
    else
        newCell.innerHTML = img

    newCell = newRow.insertCell();
    newCell.innerHTML = name
    newCell = newRow.insertCell();
    newCell.innerHTML = last
    newCell = newRow.insertCell();
    newCell.innerHTML = age
    newCell = newRow.insertCell();
    newCell.innerHTML = city
}

addRow('name', 'last', 'age', 'city', 'image', table)

const json2html = data => {
    data.results.forEach(element => {
        addRow(element.name.first, element.name.last, element.dob.age, element.location.city, element.picture.thumbnail, table)
    })
}

const fetchUsers = () => {
    fetch('https://api.randomuser.me/?results=10')
        .then(response2json)
        .then(json2html);
}