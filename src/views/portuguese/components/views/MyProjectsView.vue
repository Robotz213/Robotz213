<template>
  <div v-if="false" id="my-projects">
    <h2>Meus Projetos</h2>
    <div id="pagination">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            type="button"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
            disabled
          >
            Disabled
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        <div>
          <h3>CrawJUD</h3>
          <h4>Automação de Fluxos para Advogados</h4>
          <p>
            O CrawJUD é um sistema inovador que automatiza processos em sistemas frequentemente
            utilizados por advogados, ajudando a economizar tempo e aumentar a produtividade. O
            projeto é dividido em duas partes:
          </p>
          <ul>
            <li>
              <a href="https://github.com/REM-Infotech/CrawJUD-Web" target="_blank">Web</a>:
              Responsável por fornecer uma interface de usuário intuitiva, onde é possível controlar
              execuções e gerenciar robôs de forma centralizada.
            </li>
            <li>
              <a href="https://github.com/REM-Infotech/CrawJUD-Bots" target="_blank">API</a>: Cuida
              da automação dos fluxos, garantindo eficiência e integração com os sistemas
              necessários.
            </li>
          </ul>
          <p>
            Com o CrawJUD, meu objetivo é facilitar a rotina jurídica, reduzindo o tempo gasto em
            tarefas repetitivas.
          </p>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="profile-tab-pane"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <div>
          <h3>GuardEPI</h3>
          <h4>Gestão Inteligente de EPIs e Funcionários</h4>
          <p>
            O GuardEPI é um sistema completo para controle de Equipamentos de Proteção Individual
            (EPIs) e gestão simplificada de funcionários. Ele oferece:
          </p>
          <ul>
            <li>
              Controle de Estoque: Gerencie EPIs de forma eficiente, garantindo disponibilidade e
              rastreabilidade.
            </li>
            <li>Histórico de Liberações: Registre e organize todas as entregas de EPIs.</li>
            <li>
              Gestão de Funcionários: Ferramentas simples para registrar nomes, cargos,
              departamentos e outros detalhes essenciais.
            </li>
          </ul>
          <p>
            O GuardEPI é projetado para otimizar o gerenciamento de segurança e compliance nas
            empresas. O repositório pode ser acessado
            <a href="https://github.com/REM-Infotech/GuardEPI" target="_blank">aqui</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
