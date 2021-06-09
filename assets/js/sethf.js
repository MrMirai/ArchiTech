var headerText = `<header class="header">
        <div class="container">
            <div class="header_inner">
                <div class="header_logo"><h1><a href="index.html" style="text-decoration: none; color: cornsilk;"><i class="fa fa-signal fa-fw"></i>ArchiTech</a></h1></div>
                <div class="srch">
                    <form>
                    <input id="mySearch" type="search" onkeyup="myFunction()" placeholder="Поиск...">
                    <button type="submit"></button>
                    </form>
                </div>
            </div>
            <div>
                <nav class="nav four">
                    <ul class="nav_topmenu" style="color: rgb(51, 51, 51);">
                        <li><a class="nav_link" href="eurarhXIX.html">Европейская архитектура X - XIX веков</a></li>
                        <li><a class="nav_link" href="mirarchXX.html">Мировая архитектура XX века</a></li>
                        <li><a class="nav_link" href="archXXI.html">Архитектура XXI века</a></li>
                        <li><a class="nav_link" href="archmir.html">Архитектура стран мира</a></li>
                        <li><a class="nav_link" href="about.html">О сайте</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();

var footerText = `<footer class="footer">
<div class="footer_text">
    <p>Выполнил: Беляев Кирилл Сергеевич <br>
    Группа: 1ПИб-01-12оп <br>
    ЧГУ ИИТ МПО ЭВМ <br>
    2021 г.</p>
</div>
</footer>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();
