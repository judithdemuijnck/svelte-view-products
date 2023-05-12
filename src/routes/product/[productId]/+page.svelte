<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { getProduct } from '../../../stores/actions';
	import Carousel from '$lib/components/Carousel.svelte';
	import StarRating from '$lib/components/StarRating.svelte';

	let product;

	onMount(async () => {
		const { productId } = $page.params;
		product = await getProduct(productId);
	});
</script>

<div class="product-container">
	{#if product}
		<Carousel images={product.images} title={product.title} />
		<h2>{product.title}</h2>
		<div class="infos">
			<h3>{product.brand}</h3>
			<StarRating rating={product.rating} />
			<h3>{product.category}</h3>
		</div>
		<p>{product.description}</p>
		<h3 class="price">£{product.price}</h3>
		<h3 class="stock">{product.stock} left in stock...</h3>
	{/if}
</div>

<style>
	.product-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h2 {
		font-size: 2em;
		font-weight: 700;
	}

	.infos {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.infos h3 {
		font-weight: 100;
		color: #4075a6;
	}

	.price {
		color: #ff3e00;
	}

	.stock {
		font-weight: 100;
	}
</style>
