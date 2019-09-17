<template>
  <li class="list-item">
    <div v-if="$slots.prepend" class="list-item__prepend">
      <slot name="prepend" />
    </div>
    <div v-if="$slots.default" class="list-item__content">
      <slot />
      <p v-if="$slots.sub" class="list-item__content__sub">
        <slot name="sub" />
      </p>
    </div>
    <div v-if="$slots.append" class="list-item__append">
      <slot name="append" />
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>

<style>
.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.2em;
  width: 100%;
}
.list-item__content,
.list-item__prepend,
.list-item__append {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-item__prepend {
  margin: 0 0.2em;
}
.list-item__append {
  flex-grow: 0;
  margin-left: auto;
}
.list-item__content__sub {
  color: rgb(144, 144, 144);
  font-size: 0.8em;
  margin: 0;
}
</style>
