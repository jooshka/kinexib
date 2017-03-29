<template>
  <div  id="header">
    <div class="container">
      <div class="row flex-items-between">
        <div class="col-auto col-sm-14 col-md-5 col-lg-4">
          <a href="#!" class="logo"><span><img src="images/logo.png" alt=""></span></a>
        </div>
        <nav class="navbar col-auto col-sm-2 col-md-3 col-lg-8 col-xl-9">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar">
          </button>

          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#!"><span>Информация для клиентов</span></a>
                <i class="nav-click fa fa-plus hidden-lg-up"></i>
                <div class="nav-box">
                  <ul class="nav-sub">
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Что такое Кинезио-Тейп</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Инструкция</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">FAQ</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Доставка и Оплата</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">ДЦП</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">О компании</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Меценатство</a></li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"><span>Онлайн каталог</span></a>
                <i class="nav-click fa fa-plus hidden-lg-up"></i>
                <div class="nav-box">
                  <ul class="nav-sub">
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Тейпы для всех</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Для экстремальных нагрузок</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Метровые тейпы PRO</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Сверх эластичный тейп</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Спортивный тейп</a></li>
                    <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Компресс</a></li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"><span>Адреса магазинов</span></a>
                <i class="nav-click fa fa-plus hidden-lg-up"></i>
                <div class="nav-box">
                  <div class="nav-bg"><input type="text" class="nav-fild" placeholder="Поиск по городам" /></div>
                  <div class="nav-scroll">
                    <div class="scrollbar">
                      <ul class="nav-sub">
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Москва</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Санкт-Петербург</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Новосибирск</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Красноярск</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Екатеринбург</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Чехорда</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Вашингтон</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Мадрид</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Москва</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Санкт-Петербург</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Новосибирск</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Красноярск</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Екатеринбург</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Чехорда</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Вашингтон</a></li>
                        <li class="nav-sub__item"><a class="nav-sub__link" href="#!">Мадрид</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"><span>Личный кабинет</span></a>
                <i class="nav-click fa fa-plus hidden-lg-up"></i>
                <div class="nav-box">
                  <div class="nav-sub nav-sub_enter">
                    <div class="mb-10"><input type="email" class="nav-fild" placeholder="E-mail" /></div>
                    <div class="mb-10"><input type="text" class="nav-fild" placeholder="Пароль" /></div>
                    <div class="row text-center">
                      <div class="col-sm-7"><a href="#!" class="fz20">Войти</a></div>
                      <div class="col-sm-9"><a href="#!" class="nav-forgot">Забыли пароль?</a></div>
                    </div>
                    <hr class="nav-line" />
                    <div class="text-center"><a href="#!" class="fz20">Зарегистрироваться</a></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <!-- navbar -->
        <div class="col-md-8 col-lg-4 col-xl-3 text-md-right">
          <div class="phone-item">8 800 555-16-17</div>
          <div class="panel-soc">
            <a href="#!"><i class="icon icon-panel-vk"></i></a>
            <a href="#!"><i class="icon icon-panel-fb"></i></a>
          </div>
          <div class="panel-link">
            <span class="panel-lang active">rus</span>
            -
            <a href="#!" class="panel-lang">eng</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
