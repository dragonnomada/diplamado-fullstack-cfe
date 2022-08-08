<template>
  <div class="toolbar">
    <div>
      <span>💬</span>
    </div>
    <div class="items">
      <div>
        <span>🔍</span>
      </div>
      <div class="avatar">
        <img src="https://placekitten.com/40">
      </div>
    </div>
  </div>
  <div class="header-space"></div>
  <p class="title bold">Food</p>
  <p class="title light">Delivery</p>
  <div class="food-categories">
    <div class="food-item">
      <span>🍔</span>
      <span>Burger</span>
    </div>
    <div class="food-item active">
      <span>🍕</span>
      <span>Pizza</span>
    </div>
    <div class="food-item">
      <span>🥗</span>
      <span>Salad</span>
    </div>
    <div class="food-item">
      <span>🍧</span>
      <span>Desser</span>
    </div>
  </div>
  <p>Popular</p>
  <div class="food-cards">
    <div class="scroll-wrapper">
      <template v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <div class="food-card-wrapper">
          <div class="food-card">
            <img src="https://placekitten.com/50" alt="">
            <span>$12.99</span>
            <span>Quattro formaggi</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.scroll-wrapper {
  display: flex;
  overflow-x: auto;
}

.food-card-wrapper {
  padding: 6px;
}

.food-cards {
  overflow: hidden;
}

.food-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid gainsboro;
  border-radius: 12px;

  padding: 24px;

  background-color: whitesmoke;
}

.food-categories {
  display: flex;
  justify-content: space-evenly;

  padding: 12px 0px;
}

.food-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid gainsboro;
  border-radius: 24px;

  padding: 24px;
}

.food-item.active {
  background-color: orange;
}

.title {
  font-size: 2rem;
}

.title.bold {
  font-weight: 600;
}

.title.light {
  font-weight: 300;
}

.header-space {
  padding: 2rem;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.items {
  display: flex;
  align-items: center;
}

.avatar>img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
}
</style>