// The 'qrcode.js' module is used to generate qrcode.
// The github page for 'qrcode.js' => 'https://github.com/davidshimjs/qrcodejs'.


// QRCODE PANEL


document.addEventListener('DOMContentLoaded', (event) => {
  const generateQRLink = document.getElementById('generateQRLink'); // generate qrcode based on the input value
  // const saveQRCodeLink  = document.getElementById('saveQrLink'); // suggests saving the qrcode
  // const removeInputLink = document.getElementById('removeInputLink'); // clears the value entered in the input
  const fileSelectorLink  = document.getElementById('fileSelectorLink'); // file import button
  const hiddenFileInput = document.getElementById('hiddenFileInput');
  const fileNameDisplayInput = document.getElementById('fileNameDisplayInput'); // text field for qrcode value
  const qrCodeContainer = document.getElementById('qrcode');
  const moon = document.getElementById('theme-color'); // dark-theme
  const burger_menu = document.getElementById('burger-menu'); // burger menu

  moon.onclick = function () {
    document.body.classList.toggle('dark_theme');
    
    if (document.body.classList.contains("dark_theme")) {
      moon.src = "./sources/images/sun.png";
      
      moon.classList.add('invert_icon');
      burger_menu.classList.add('invert_icon');
      fileSelectorLink.classList.add('invert_icon');

    } else {
      moon.src = "./sources/images/moon.svg";
      
      moon.classList.remove('invert_icon');
      burger_menu.classList.remove('invert_icon');
      fileSelectorLink.classList.remove('invert_icon');
    }
  }
  
  fileNameDisplayInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      generateQRCode();
    }
  });

  generateQRLink.addEventListener('change', (e) => {
    generateQRCode();
  });

  generateQRLink.addEventListener('click', (e) => {
    generateQRCode();
  });

  function generateQRCode() {
    
    const value = fileNameDisplayInput.value;
    
    if (value.trim() !== '') {
      
        qrCodeContainer.innerHTML = ''; // delete previous qrcode
        new QRCode(qrCodeContainer, value); // Generate new qrcode

        // saveQRCodeLink .classList.remove('disabled');
        // removeInputLink.classList.remove('disabled');
      
    } else {

        qrCodeContainer.innerHTML = '';
        alert('Please enter a value to generate a qrcode.');
      
    }
  }


  // saveQRCodeLink.addEventListener('click', function(event) {
  //   event.preventDefault();

  //   const qrCodeDataURL = qrCodeContainer.querySelector('img').src;

  //   fetch(qrCodeDataURL)
  //     .then(response => response.blob())
  //     .then(blob => {

  //       const link = document.createElement('a');
  //       link.href = URL.createObjectURL(blob);

  //       link.download = 'qrcode.png';

  //       link.click();

  //       URL.revokeObjectURL(link.href);

  //     });
  // });


  // removeInputLink.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   resetInput();

  //   qrCodeContainer.innerHTML = '';

  //   saveQRCodeLink .classList.add('disabled');
  //   removeInputLink.classList.add('disabled');
  // });

  function resetInput() {
    fileNameDisplayInput.value = '';
    hiddenFileInput.value = '';
    fileNameDisplayInput.classList.remove('disabled');
    fileNameDisplayInput.removeEventListener('focus', preventFocus);
  }

  fileSelectorLink.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenFileInput.click();
  });

  hiddenFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];

    if (file) {
      resetInput();
      fileNameDisplayInput.value = file.name;
      // fileNameDisplayInput.classList.add('disabled');
      // fileNameDisplayInput.addEventListener('focus', preventFocus);
    }
  });

  function preventFocus() {
    this.blur(); // prevents access to the text field when the qrcode is generated and it has not been deleted
  }

});
