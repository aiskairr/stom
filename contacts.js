document.addEventListener("DOMContentLoaded", function() {
    const phoneNumber = ""; 
    const instagramLink = "";
  
    // Добавление ссылок на Font Awesome в head
    const fontAwesomeLink1 = document.createElement('link');
    fontAwesomeLink1.rel = "stylesheet";
    fontAwesomeLink1.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";
    fontAwesomeLink1.integrity = "sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==";
    fontAwesomeLink1.crossOrigin = "anonymous";
    fontAwesomeLink1.referrerPolicy = "no-referrer";
    document.head.appendChild(fontAwesomeLink1);
  
    const fontAwesomeLink2 = document.createElement('link');
    fontAwesomeLink2.rel = "stylesheet";
    fontAwesomeLink2.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    fontAwesomeLink2.integrity = "sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==";
    fontAwesomeLink2.crossOrigin = "anonymous";
    fontAwesomeLink2.referrerPolicy = "no-referrer";
    document.head.appendChild(fontAwesomeLink2);
  
    // Создание кнопки Instagram
    const instagramButton = document.createElement('a');
    instagramButton.href = instagramLink;
    instagramButton.target = "_blank";
    instagramButton.title = "Написать в instagram";
    instagramButton.rel = "noopener noreferrer";
    instagramButton.innerHTML = `
        <div class="inst-button" style="background: -webkit-linear-gradient(45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%);
      background: linear-gradient(45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%)">
            <i class="fa fa-instagram" aria-hidden="true" style="background: -webkit-linear-gradient(45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%);
          background: linear-gradient(45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%)"></i>
        </div>
    `;
    document.body.appendChild(instagramButton);
  
    // Создание кнопки WhatsApp
    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://api.whatsapp.com/send/?phone=${phoneNumber}`;
    whatsappButton.target = "_blank";
    whatsappButton.title = "Написать в Whatsapp";
    whatsappButton.rel = "noopener noreferrer";
    whatsappButton.innerHTML = `
        <div class="whatsapp-button">
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </div>
    `;
    document.body.appendChild(whatsappButton);
  
    // Создание кнопки телефона
    const phoneButton = document.createElement('a');
    phoneButton.href = `tel:${phoneNumber}`;
    phoneButton.target = "_blank";
    phoneButton.title = "Позвонить";
    phoneButton.rel = "noopener noreferrer";
    phoneButton.innerHTML = `
        <div class="phone-button">
            <i class="fa fa-phone" aria-hidden="true"></i>
        </div>
    `;
    document.body.appendChild(phoneButton);
  
    // Добавление стилей
    const style = document.createElement('style');
    style.innerHTML = `
        .inst-button, .whatsapp-button, .phone-button {
            position: fixed;
            right: 13px;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            color: #fff;
            text-align: center;
            line-height: 53px;
            font-size: 35px;
            z-index: 9999;
        }
        .inst-button {
            bottom: 67px;
            transform: translate(-50%, -160%);
            background: #dd2d42 !importent;
        }
        .whatsapp-button {
            bottom: 32px;
            transform: translate(-50%, -50%);
            background: #00a884;
        }
        .phone-button {
            bottom: 160px;
            transform: translate(-50%, -160%);
            background-color: #5bc0de;
        }
        .inst-button:before, .inst-button:after,
        .whatsapp-button:before, .whatsapp-button:after,
        .phone-button:before, .phone-button:after {
            content: " ";
            display: block;
            position: absolute;
            border: 50%;
            border: 1px solid;
            left: -20px;
            right: -20px;
            top: -20px;
            bottom: -20px;
            border-radius: 50%;
            animation: animate 1.5s linear infinite;
            opacity: 0;
            backface-visibility: hidden;
        }
        .inst-button:before, .inst-button:after {
            border-color: #bd5734;
        }
        .whatsapp-button:before, .whatsapp-button:after {
            border-color: #00a884;
        }
        .phone-button:before, .phone-button:after {
            border-color: #5bc0de;
        }
        .inst-button:after, .whatsapp-button:after, .phone-button:after {
            animation-delay: 0.5s;
        }
        @keyframes animate {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: scale(1.2);
                opacity: 0;
            }
        }
        @media (max-width: 768px) {
            .binf1 {
                font-size: 14px !important;
                color: #4b4b4b !important;
                text-transform: uppercase !important;
                line-height: 20px !important;
            }
            .binf2 {
                font-size: 14px;
            }
        }
    `;
    document.head.appendChild(style);
  });
  