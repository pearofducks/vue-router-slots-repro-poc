<script setup>
import { ref } from 'vue'
const showing = ref(false)
</script>

<template>
  <div>
    <button @click="showing = !showing">Toggle showing</button>

    <h1>With transition</h1>
    <router-view #default="{ Component }">
      <transition>
        <div v-if="showing">
          <component :is="Component" />
          <!-- <component :is="Components.footer" /> -->
        </div>
      </transition>
    </router-view>

    <hr />

    <h1>Without transition (normal router)</h1>
    <div v-if="showing">
      <router-view />
      <router-view name="footer" />
    </div>
  </div>
</template>
