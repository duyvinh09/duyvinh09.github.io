/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})
console.log(
  "%c Coder : Đinh Duy Vinh %c",
  'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',
  "font-size:12px;color:#999999;"
);

/*=============== THÔNG BÁO ===============*/
document.write('<body onload="thongbaopopup()">');
document.write('    <style>');
document.write('        .tbpopup .tboverlay {');
document.write('            position: fixed;');
document.write('            top: 0px;');
document.write('            left: 0px;');
document.write('            width: 100vw;');
document.write('            height: 100vh;');
document.write('            background: rgba(0, 0, 0, 0.7);');
document.write('            z-index: 1;');
document.write('            display: none;');
document.write('        }');
document.write('        ');
document.write('        .tbpopup .tbcontent {');
document.write('            position: absolute;');
document.write('            top: 50%;');
document.write('            left: 50%;');
document.write('            transform: translate(-50%, -50%) scale(0);');
document.write('            background: #fff;');
document.write('            max-width: 500px;');
document.write('            z-index: 2;');
document.write('            text-align: center;');
document.write('            padding: 20px;');
document.write('            box-sizing: border-box;');
document.write('            font-family: "Open Sans", sans-serif;');
document.write('            border-radius: 20px;');
document.write('            display: block;');
document.write('            position: fixed;');
document.write('            box-shadow: 0px 0px 10px #111;');
document.write('        }');
document.write('        ');
document.write('        @media (max-width: 700px) {');
document.write('            .tbpopup .tbcontent {');
document.write('                width: 90%;');
document.write('            }');
document.write('        }');
document.write('        ');
document.write('        .tbpopup .tbclose-btn {');
document.write('            cursor: pointer;');
document.write('            position: absolute;');
document.write('            right: 20px;');
document.write('            top: 20px;');
document.write('            width: 35px;');
document.write('            height: 35px;');
document.write('            color: #ff4444;');
document.write('            font-size: 30px;');
document.write('            font-weight: 600;');
document.write('            line-height: 35px;');
document.write('            text-align: center;');
document.write('            border-radius: 50%;');
document.write('        }');
document.write('        ');
document.write('        .tbpopup.active .tboverlay {');
document.write('            display: block;');
document.write('        }');
document.write('        ');
document.write('        .tbpopup.active .tbcontent {');
document.write('            transition: all 300ms ease-in-out;');
document.write('            transform: translate(-50%, -50%) scale(1);');
document.write('        }');
document.write('        ');
document.write('        .tbbuttom {');
document.write('            background: #00cc00;');
document.write('            color: #fff');
document.write('        }');
document.write('    </style>');
document.write('    ');
document.write('    <div class="tbpopup" id="tbpopup-1">');
document.write('        <div class="tboverlay"></div>');
document.write('        <div class="tbcontent">');
document.write('            <div class="tbclose-btn" onclick="thongbaopopup()">×</div>');
document.write('            <div style="font-size:30px;font-weight:bold; margin-top:-10px;">Thông báo !</div>');
document.write('             <div style="border-bottom: 1px solid #e0e0e0; margin-bottom: 20px;"></div>');
document.write('            <p style="font-size:20px; ">Chào Mừng Bạn Đã Ghé Trang Của Tôi</p><br>');
document.write('            <p style="font-size:20px; ">🔥 Được Tạo Bởi<a href="https://zalo.me/duyvinh09" target="_blank"  style=" color:blue; font-weight: bold;"> ĐINH DUY VINH</p>');
document.write('            </div>');
document.write('    </div>');
document.write('    ');
document.write('    <script>');
document.write('        function thongbaopopup() {');
document.write('            document.getElementById("tbpopup-1").classList.toggle("active");');
document.write('        }');
document.write('    </script>  ');
