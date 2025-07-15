<template>
  <section id="projetos" class="bg-white section-padding shadow-inner">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-meteorite-700 mb-12">
        Meus Projetos em Destaque
      </h2>
      <p class="text-center text-lg mb-8 max-w-2xl mx-auto">
        Atualmente, estou dedicado ao desenvolvimento de dois projetos principais, ambos focados em
        resolver desafios específicos de forma prática e eficiente, otimizando processos e
        aumentando a produtividade.
      </p>

      <div class="grid md:grid-cols-2 gap-10">
        <div
          class="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300"
        >
          <h3 class="text-3xl font-bold text-meteorite-600 mb-4">CrawJUD</h3>
          <h4 class="text-xl font-semibold text-gray-700 mb-4">
            Automação de Fluxos para Advogados
          </h4>
          <p class="text-gray-700 mb-6 leading-relaxed">
            O CrawJUD é um sistema inovador projetado para automatizar processos em plataformas
            frequentemente utilizadas por advogados, visando economizar tempo e otimizar a
            produtividade. O projeto é modularizado em duas partes principais:
          </p>
          <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <span class="font-semibold">Web:</span> Uma interface de usuário intuitiva para
              controlar execuções e gerenciar robôs de forma centralizada.
              <a
                href="https://github.com/REM-Infotech/CrawJUD-Web"
                target="_blank"
                class="text-meteorite-500 hover:underline text-sm ml-2"
                >[Ver Repositório]</a
              >
            </li>
            <li>
              <span class="font-semibold">API:</span> Responsável pela automação dos fluxos,
              garantindo eficiência e integração perfeita com os sistemas necessários.
              <a
                href="https://github.com/REM-Infotech/CrawJUD-Bots"
                target="_blank"
                class="text-meteorite-500 hover:underline text-sm ml-2"
                >[Ver Repositório]</a
              >
            </li>
          </ul>
          <p class="text-gray-700 leading-relaxed">
            Com o CrawJUD, meu objetivo é simplificar a rotina jurídica, reduzindo
            significativamente o tempo gasto em tarefas repetitivas e permitindo que os
            profissionais se concentrem em atividades de maior valor.
          </p>
        </div>

        <div
          class="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300"
        >
          <h3 class="text-3xl font-bold text-meteorite-600 mb-4">GuardEPI</h3>
          <h4 class="text-xl font-semibold text-gray-700 mb-4">
            Gestão Inteligente de EPIs e Funcionários
          </h4>
          <p class="text-gray-700 mb-6 leading-relaxed">
            O GuardEPI é um sistema abrangente desenvolvido para o controle eficiente de
            Equipamentos de Proteção Individual (EPIs) e a gestão simplificada de informações de
            funcionários. Ele oferece funcionalidades chave para otimizar a segurança e a
            conformidade nas empresas:
          </p>
          <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <span class="font-semibold">Controle de Estoque:</span> Gerencie EPIs de forma eficaz,
              assegurando disponibilidade e rastreabilidade.
            </li>
            <li>
              <span class="font-semibold">Histórico de Liberações:</span> Registre e organize todas
              as entregas e devoluções de EPIs.
            </li>
            <li>
              <span class="font-semibold">Gestão de Funcionários:</span> Ferramentas intuitivas para
              registrar nomes, cargos, departamentos e outros detalhes essenciais do pessoal.
            </li>
          </ul>
          <p class="text-gray-700 leading-relaxed">
            O GuardEPI é ideal para otimizar o gerenciamento de segurança e conformidade em qualquer
            tipo de negócio, reduzindo a burocracia e aumentando a eficiência operacional.
            <a
              href="https://github.com/REM-Infotech/GuardEPI"
              target="_blank"
              class="text-meteorite-500 hover:underline ml-2"
              >[Ver Repositório]</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
