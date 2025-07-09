<script setup lang="ts">
import { navbarStore } from '@/store/navbar'
import { storeToRefs } from 'pinia'
const { currentPage } = storeToRefs(navbarStore())
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 fs-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click="currentPage = 'home'">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="currentPage = 'myStacks'">Stacks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="currentPage = 'graduation'">Formação</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
