<script>
	import { onMount } from 'svelte';
	import { products } from '../stores/store.js';
	import {
		getAllProducts,
		searchProducts,
		filterByCategory,
		sortProducts
	} from '../stores/actions.js';

	import ProductPreview from '$lib/components/ProductPreview.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';

	onMount(async () => {
		getAllProducts();
	});
</script>

<svelte:head>
	<title>View Products</title>
</svelte:head>

<section>
	<Toolbar on:search={searchProducts} on:sort={sortProducts} on:filter={filterByCategory} />

	{#if $products && $products.length > 0}
		<div class="products-wrapper">
			{#each $products as product (product.id)}
				<ProductPreview {...product} />
			{/each}
		</div>
	{:else}
		<h2>Loading...</h2>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.products-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
