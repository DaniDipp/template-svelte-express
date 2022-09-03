<script lang="ts">
	import svelteLogo from "./assets/svelte.svg";
	import Test from "./components/Counter.svelte";
</script>

<main>
	<h1>Template!</h1>
	<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
	<Test />
</main>

<style>
	main {
		text-align: center;
		padding: 2em;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		font-family: "Blue Highway", sans-serif;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
