document.addEventListener("DOMContentLoaded", function () {
  headercontent = document.getElementById('header-container');
  headercontent.innerHTML =
    ` 
    <header class="sticky-top">
        <nav class="navbar navbar-expand-md navbar-light">
          <div class="container-fluid justify-content-space-between">
            <!-- Logo a la izquierda -->
            <button class="btn btn-primary" id="lineizq" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
              aria-label="Menú de navegación">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
    
            <a href="index.html">
              <img id="svg" src="images/letrero.svg" alt="Logo de CandySoapp" class="logo-img">
            </a>
            <button class="btn btn-primary navbar-toggler" id="linedrch" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Alternar navegación">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg> </button>
    
            <!-- Elementos a la derecha, alineados horizontalmente -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav" role="menubar">
                <li class="nav-item" role="menuitem">
                  <a class="nav-link" href="graph.html">
                    <i class="bi bi-bar-chart"></i>
                    <span>Gráfica</span>
                  </a>
                </li>
                <li class="nav-item" id="cart" role="menuitem">
                  <a class="nav-link" href="#" aria-label="Carrito">
                    <i class="bi bi-cart"></i>
                    <span>Carrito</span>
                    <span id="fillCountBadge" class="badge bg-danger" aria-hidden="true"></span>
                  </a>
                </li>
                <li class="nav-item" role="menuitem">
                  <a class="nav-link" href="#" aria-label="Perfil">
                    <i class="bi bi-person"></i>
                    <span>Perfil</span>
                  </a>
                </li>
                <li class="nav-item" role="menuitem">
                  <a href="#" class="nav-link" id="notificaciones" aria-label="Notificaciones">
                    <div class="animate__animated" id="campana">
                      <i class="bi bi-bell"></i>
                    </div>
                    <span>Notificaciones</span>
                  </a>
                </li>
                <li class="nav-item" role="menuitem">
                  <a href="register.html" class="btn btn-outline-light" aria-label="Iniciar Sesión">
                    <i class="bi bi-box-arrow-in-right"></i>Iniciar Sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <aside>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions">
          <div class="offcanvas-header">
            <img src="images/logotipo.png" alt="CandySoapp" id="logotipo">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
    
            <!-- Desplegables con iconos -->
            <div class="accordion" id="customizeAccordion">
              <!-- Personaliza tu jabón -->
              <div class="accordion-item">
                <h2 class="options" id="customizeHeader">
                  <button class="accordion-button text-dark" type="button" data-bs-toggle="collapse"
                    data-bs-target="#customizeCollapse" aria-expanded="true" aria-controls="customizeCollapse" >
                    <i class="bi bi-gear"> Personaliza tu jabón</i>
                  </button>
                </h2>
                <div id="customizeCollapse" class="accordion-collapse collapse show" aria-labelledby="customizeHeader"
                  data-bs-parent="#customizeAccordion">
                  <div class="accordion-body">
                    <!-- Contenido personaliza tu jabón -->
                    <ul>
                      <li><a href="#">Escoge ingredientes.</a></li>
                      <li><a href="#">Elige fragancias.</a></li>
                      <li><a href="#">Decide la forma y color.</a></li>
                    </ul>
                  </div>
                </div>
              </div>
    
              <!-- Realiza un estudio -->
              <div class="accordion-item">
                <h2 class="options" id="studyHeader">
                  <button class="accordion-button text-dark collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#studyCollapse" aria-expanded="false" aria-controls="studyCollapse">
                    <i class="bi bi-journal-text"> Realiza un estudio</i> 
                  </button>
                </h2>
                <div id="studyCollapse" class="accordion-collapse collapse" aria-labelledby="studyHeader"
                  data-bs-parent="#customizeAccordion">
                  <div class="accordion-body">
                    <!-- Contenido realiza un estudio -->
                    <ul>
                      <li><a href="#">Encuentra el jabón ideal para tu tipo de piel.</a></li>
                      <li><a href="#">Obtén recomendaciones personalizadas.</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- Tipo de piel -->
              <div class="accordion-item">
                <h2 class="options" id="skinTypeHeader">
                  <button class="accordion-button text-dark collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#skinTypeCollapse" aria-expanded="false" aria-controls="skinTypeCollapse">
                    <i class="bi bi-person"> Tipo de piel</i>
                  </button>
                </h2>
                <div id="skinTypeCollapse" class="accordion-collapse collapse" aria-labelledby="skinTypeHeader"
                  data-bs-parent="#customizeAccordion">
                  <div class="accordion-body">
                    <!-- Contenido tipo de piel -->
                    <ul>
                      <li><a href="#">Piel seca.</a></li>
                      <li><a href="#">Piel grasa.</a></li>
                      <li><a href="#">Piel sensible.</a></li>
                      <li><a href="#">Piel mixta.</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="toggleContrastButton" aria-label="Cambiar Modo de Contraste" title="Cambiar Modo de Contraste">
            <span class="bi-moon" id="contrastIcon"></span>
          </button>
        
            <aside>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions">
              <div class="offcanvas-header">
                <img src="images/logotipo.png" alt="CandySoapp" id="logotipo">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
        
                <!-- Desplegables con iconos -->
                <div class="accordion" id="customizeAccordion">
                  <!-- Personaliza tu jabón -->
                  <div class="accordion-item">
                    <h2 class="options" id="customizeHeader">
                      <button class="accordion-button text-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#customizeCollapse" aria-expanded="true" aria-controls="customizeCollapse" >
                        <i class="bi bi-gear"> Personaliza tu jabón</i>
                      </button>
                    </h2>
                    <div id="customizeCollapse" class="accordion-collapse collapse show" aria-labelledby="customizeHeader"
                      data-bs-parent="#customizeAccordion">
                      <div class="accordion-body">
                        <!-- Contenido personaliza tu jabón -->
                        <ul>
                          <li><a href="#">Escoge ingredientes.</a></li>
                          <li><a href="#">Elige fragancias.</a></li>
                          <li><a href="#">Decide la forma y color.</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
        
                  <!-- Realiza un estudio -->
                  <div class="accordion-item">
                    <h2 class="options" id="studyHeader">
                      <button class="accordion-button text-dark collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#studyCollapse" aria-expanded="false" aria-controls="studyCollapse">
                        <i class="bi bi-journal-text"> Realiza un estudio</i> 
                      </button>
                    </h2>
                    <div id="studyCollapse" class="accordion-collapse collapse" aria-labelledby="studyHeader"
                      data-bs-parent="#customizeAccordion">
                      <div class="accordion-body">
                        <!-- Contenido realiza un estudio -->
                        <ul>
                          <li><a href="#">Encuentra el jabón ideal para tu tipo de piel.</a></li>
                          <li><a href="#">Obtén recomendaciones personalizadas.</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Tipo de piel -->
                  <div class="accordion-item">
                    <h2 class="options" id="skinTypeHeader">
                      <button class="accordion-button text-dark collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#skinTypeCollapse" aria-expanded="false" aria-controls="skinTypeCollapse">
                        <i class="bi bi-person"> Tipo de piel</i>
                      </button>
                    </h2>
                    <div id="skinTypeCollapse" class="accordion-collapse collapse" aria-labelledby="skinTypeHeader"
                      data-bs-parent="#customizeAccordion">
                      <div class="accordion-body">
                        <!-- Contenido tipo de piel -->
                        <ul>
                          <li><a href="#">Piel seca.</a></li>
                          <li><a href="#">Piel grasa.</a></li>
                          <li><a href="#">Piel sensible.</a></li>
                          <li><a href="#">Piel mixta.</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <!-- Toast para notificaciones -->
          <div aria-live="polite" aria-atomic="true" class="position-relative">
        
            <div class="toast-container end-0 p-2 position-fixed">
              <!-- Then put toasts within -->
              <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <img src="images/letter.png" class="rounded me-2" alt="CS" width="40" height="40">
                  <strong class="me-auto">Hola!😄</strong>
                  <small class="text-body-secondary">just now</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                  No tienes ninguna notificación.
                </div>
              </div>
              <!--
              <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <img src="images/letter.png" class="rounded me-2" alt="CS" width="15" height="15">
                  <strong class="me-auto">Bootstrap</strong>
                  <small class="text-body-secondary">2 seconds ago</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                  Heads up, toasts will stack automatically
                </div>
              </div>-->
            </div>
          </div>
        

    `;
});