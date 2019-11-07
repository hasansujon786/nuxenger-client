<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="px-6 h-12 font-semibold rounded-lg focus:outline-none"
  >
    <slot>I'm a button</slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  --btn-bg: #ccd5e0;
  --btn-bg-hover: #bfc9d3;
  --btn-text: #2d3748;

  transition: background-color 280ms ease-out;
  background-color: var(--btn-bg);
  border: 2px solid var(--btn-bg);
  color: var(--btn-text);
  // &:focus,
  &:hover {
    border-color: var(--btn-bg-hover);
    background-color: var(--btn-bg-hover);
  }
  &:active {
    border-color: var(--btn-bg);
    background-color: var(--btn-bg);
  }

  /* _____________ Button Varient Colors _____________ */

  &[primary] {
    --btn-bg: var(--primary);
    --btn-bg-hover: var(--primary-light);
    --btn-text: #ffffff;
  }

  &[secondary] {
    --btn-bg: var(--secondary);
    --btn-bg-hover: var(--secondary-light);
    --btn-text: #ffffff;
  }

  &[outlined] {
    background-color: transparent;
    color: var(--btn-bg);

    &:hover {
      background-color: var(--btn-bg);
      border-color: var(--btn-bg);
      color: var(--btn-text);
    }

    &:active {
      background-color: var(--btn-bg-hover);
      border-color: var(--btn-bg-hover);
      color: var(--btn-text);
    }
  }

  &:disabled {
    --btn-bg: #e2e8f0;
    --btn-bg-hover: #e2e8f0;
    --btn-text: #a0aec0;
    cursor: default;
  }
}

body.user-is-tabbing button:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
</style>
