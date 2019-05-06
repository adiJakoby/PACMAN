var isLoggedIn = false;

jQuery.fn.simulateKeyPress = function(character) {
    jQuery(this).trigger({
       type: 'keypress',
       which: character.charCodeAt(0)
    });
 };

function ShowModal() {
    ShowSection('about');
    // Get the modal
    var modal = document.getElementById('about');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.onkeyup = function (event) {
        if (event.keyCode == 27) {
            modal.style.display = "none";
        }
    }
}

function ShowSection(id) {
    //hide all sections
    var section1 = document.getElementById('welcome');
    section1.style.display = "none";
    var section2 = document.getElementById('register');
    section2.style.display = "none";
    var section3 = document.getElementById('settings');
    section3.style.display = "none";
    var section4 = document.getElementById('about');
    section4.style.display = "none";
    var section5 = document.getElementById('login');
    section5.style.display = "none";
    var section6 = document.getElementById('pacman');
    section6.style.display = "none";

    //show only one section
    var selected = document.getElementById(id);

    selected.style.display = 'inline-block';

    if (id !== 'pacman') {
        $('body').simulateKeyPress('p');
        
    }
}

$('#mybutton').on('click', function (evt) {
    $('#mydiv').show();
    return false;//Returning false prevents the event from continuing up the chain
});

function Login() {
    // Log the user in  and start pacman.
    // call login
    // var userName = document.forms["formLogIn"]["unInput"].value; //= "";
    // var pass = document.forms["formLogIn"]["pswdInput"].value; // = "";
    // if(checkPassword(userName,pass)){
    document.forms["formLogIn"]["unInput"].value = "";
    document.forms["formLogIn"]["pswdInput"].value = "";
    if (isLoggedIn) {
        ShowSection('settings');
    }
    // }
}

function changeInnerHtml(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}

// catch click on a and call pause