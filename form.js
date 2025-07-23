const input1 = document.getElementById('fdname');

input1.addEventListener('input', function() { //Finds whether text area for fdname is filled
    if(this.value.trim() !== '')
    {
        this.classList.add('filled');
    }
    else
    {
        this.classList.remove('filled');
    }
});

const input2 = document.getElementById('fname');

input2.addEventListener('input', function() {//Finds whether text area for fname is filled
    if(this.value.trim() !== '')
    {
        this.classList.add('filled');
    }
    else
    {
        this.classList.remove('filled');
    }
});

const input3 = document.getElementById('lname');

input3.addEventListener('input', function() {//Finds whether text area for lname is filled
    if(this.value.trim() !== '')
    {
        this.classList.add('filled');
    }
    else
    {
        this.classList.remove('filled');
    }
});

const input4 = document.getElementById('email');

input4.addEventListener('input', function() {//Finds whether text area for email is filled
    if(this.value.trim() !== '')
    {
        this.classList.add('filled');
    }
    else
    {
        this.classList.remove('filled');
    }
});

const form = document.getElementById('form-content');

form.addEventListener('submit', function(x){//Updates form for bottom border bar color value and returns a window alert when submitted
    x.preventDefault();
    const foodName = document.getElementById('fdname').value;
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    window.alert("You submitted: " + foodName);
});
