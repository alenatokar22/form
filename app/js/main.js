$(function () {


  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  $("#dialog-1").dialog({
    autoOpen: false,
    buttons: {
      Cancel: function () { $(this).dialog("close"); },
      Confirm: function () { Confirm(); $(this).dialog("close"); }
    }
  });

  $("#submit").click(function () {
    var emailStr = document.getElementById('field-email').value;
    var passlStr = document.getElementById('field-pass').value;

    console.log(validateEmail(emailStr));
    if (!validateEmail(emailStr)) {
      alert(emailStr + " is not valid");
      return;
    }
    if (!emailStr || !passlStr || passlStr.length < 4) return;

    var dialogEement = document.getElementById('dialog-1');

    dialogMsg = "Please confirm account creation for: " + emailStr;
    dialogEement.innerText = dialogMsg;

    $("#dialog-1").dialog("open");
  });

  function Confirm() {
    var emailStr = document.getElementById('field-email').value;
    var content = document.getElementById("form");
    content.innerHTML = `
          <div class="wrapper">
          <h2>
            <p>Hello user with email: ${emailStr}</p>
          </h2>
            <br>
              <img src='//upload.wikimedia.org/wikipedia/en/thumb/0/0f/Wingstop_logo.svg/220px-Wingstop_logo.svg.png'>
            </br>
          </div>`;
  };
});
