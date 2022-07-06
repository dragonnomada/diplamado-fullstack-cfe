<template>
  <div class="w-100 vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
    <div class="p-4">
      <div class="px-4 py-4 border rounded shadow bg-white">
        <div class="border-bottom">
          <h1><span><i class="fa-solid fa-robot"></i></span> Empresa Labs</h1>
          <h2 class="text-secondary">Inicia Sesión</h2>
        </div>
        <div class="pb-4">
          <div class="py-2">
            <label class="fw-bold text-muted" for="email">Correo:</label>
            <input class="form-control" id="email" type="email" placeholder="Correo">
          </div>
          <div class="py-2">
            <label class="fw-bold text-muted" for="password">Contraseña:</label>
            <input class="form-control" id="password" type="password" placeholder="Contraseña">
          </div>
        </div>
        <div>
          <button class="w-100 btn btn-primary">
            <span class="pe-2"><i class="fa-solid fa-lock"></i></span>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  </div>
</template>