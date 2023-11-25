function submitForm() {
    var name = document.getElementById('name').value;
    var doctorId = document.getElementById('doctorId').value;
    var specialization = document.getElementById('specialization').value;
    var experience = document.getElementById('experience').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    let role = '';
    if (experience > 5)
    {
        role = 'Senior';
    }
    else if (experience >= 2 && experience <= 5)
    {
        role = 'Junior';
    } 
    else
    {
        role = 'Trainee';
    }


    let tableBody = document.getElementById('Table_Body');
    let newRow = tableBody.insertRow();

  
    let Rows = [];
    for (var i = 0; i < 8; i++) {
        Rows[i] = newRow.insertCell(i);
    }

    Rows[0].innerHTML = name;
    Rows[1].innerHTML = doctorId;
    Rows[2].innerHTML = specialization;
    Rows[3].innerHTML = experience;
    Rows[4].innerHTML = email;
    Rows[5].innerHTML = mobile;
    Rows[6].innerHTML = role;

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.style.backgroundColor ='red'
    deleteButton.onclick = function ()
     {
        tableBody.deleteRow(newRow.rowIndex - 1);

    };
    Rows[7].appendChild(deleteButton);

    document.getElementById('name').value = '';
    document.getElementById('doctorId').value = '';
    document.getElementById('specialization').value = '';
    document.getElementById('experience').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
}

function filterTable() {
    var filterValue = document.getElementById('filter').value;
    var rows = document.getElementById('Table_Body').rows;

    for (var i = 0; i < rows.length; i++) {
        var specializationCell = rows[i].Rows[2].innerHTML;
        if (filterValue === 'all' || specializationCell === filterValue) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}