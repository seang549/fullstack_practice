


function getAll() {
    fetch("https://fullstack-practice-seans-way.onrender.com/fs_table")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error)
    })
}


let button = document.getElementById("submit")
button.addEventListener('click', () => {
    getAll();
    console.log('working')
})


// async function getAll() {
//     const result = await fetch ("http://localhost:8035/hello");
//     const jsonData = await result.json()
//     console.log(jsonData)
// }

// function fetchData() {
//     fetch('https://movies-db-team3.onrender.com/movies_to_watch')
//     .then(response => response.json())
//     .then(data => {
//         const movieTable = document.getElementById('movieTable');
//         movieTable.innerHTML = '';

//         data.forEach(entity => {
//             const newRow = document.createElement('tr');
//             const titleCell = document.createElement('td');
//             const directorCell = document.createElement('td');
//             const releaseYearCell = document.createElement('td');
//             const genreCell = document.createElement('td');
//             const ratingCell = document.createElement('td');
//             const deleteCell = document.createElement('td');
//             const editCell = document.createElement('td')
//             const deleteBtn = document.createElement('button');
//             const editBtn = document.createElement('button');

//             titleCell.textContent = entity.title;
//             directorCell.textContent = entity.director;
//             releaseYearCell.textContent = entity.release_year;
//             genreCell.textContent = entity.genre;
//             ratingCell.textContent = entity.rating;
            
//             deleteBtn.textContent = 'Delete';
//             deleteBtn.addEventListener('click', function() {
//                 deleteRow(entity.id);
//             });

//             editBtn.textContent = 'Edit';
//             editBtn.classList.add('edit-btn');
//             editBtn.addEventListener('click', function() {
//                 getEntity(entity.id);
//             });

//             deleteCell.appendChild(deleteBtn);
//             editCell.appendChild(editBtn);
//             newRow.appendChild(titleCell);
//             newRow.appendChild(directorCell);
//             newRow.appendChild(releaseYearCell);
//             newRow.appendChild(genreCell);
//             newRow.appendChild(ratingCell);
//             newRow.appendChild(deleteCell);
//             newRow.appendChild(editCell);
//             movieTable.appendChild(newRow);
//         });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// fetchData();