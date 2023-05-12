<script>
	import './styles.css';
	import logo from '$lib/images/svelte-logo.svg';
</script>

<div id="app">
	<img src={logo} alt="SvelteKit" />

	<h1><a href="/">Svelte Store</a></h1>

	<main>
		<slot />
	</main>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		width: 100vw;
	}

	img {
		width: 150px;
	}
</style>
