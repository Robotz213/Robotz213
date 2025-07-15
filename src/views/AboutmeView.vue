<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue'
</script>

<template>
  <HeaderView />
  <section id="sobre" class="bg-white section-padding shadow-inner">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-blue-700 mb-12">Sobre Mim</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Minha Jornada na Programação</h3>
          <p class="mb-4 leading-relaxed">
            Iniciei minha jornada no universo da programação com C++, o que me proporcionou uma base
            robusta em lógica e desenvolvimento de sistemas. Com o tempo, minha paixão pelo Python
            cresceu, atraído por sua sintaxe intuitiva e pelo vasto ecossistema de bibliotecas.
            Hoje, meu foco principal é criar scripts e robôs que simplificam o dia a dia de pessoas
            e empresas, transformando tarefas complexas em processos automatizados e eficientes.
          </p>
          <h3 class="text-2xl font-semibold mb-4">Formação e Crescimento Contínuo</h3>
          <p class="leading-relaxed">
            Atualmente, estou cursando Gestão da Tecnologia da Informação, buscando constantemente
            expandir meus conhecimentos e habilidades para me manter atualizado com as últimas
            tendências e tecnologias do mercado. Acredito que a tecnologia deve ser uma ferramenta
            para simplificar a vida e permitir que as pessoas se concentrem no que realmente
            importa. Se uma tarefa é repetitiva e pode ser automatizada, eu encontro a solução!
          </p>
        </div>
        <div>
          <img
            src="@/assets/img/trabaiano2.png"
            width="500px"
            alt="Nicholas trabalhando"
            class="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
