<script>
	export let category;
	export let images;
	export let title;
	export let description;
	export let price;
	export let stock;
	export let id;
	let isLoading = true;
</script>

<article class="product-preview">
	<!-- can I shorten this (to ternary?) somehow? -->
	{#if isLoading}
		<h4>Loading...</h4>
	{/if}
	<img on:load={() => (isLoading = false)} src={images[0]} alt={title} />
	<h3 class="product-category">{category}</h3>
	<h2>{title}</h2>
	<p>{description}</p>
	<h3 class="product-price">£{price}</h3>
	<p>{stock} left in stock</p>
	<a href={`product/${id}`}>View</a>
</article>

<style>
	.product-preview {
		width: 300px;
		margin: 10px 5px;
		padding: 15px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		background-color: white;
		position: relative;
		text-align: center;
	}

	img {
		width: 90%;
	}

	.product-category {
		color: #787878;
		font-weight: 200;
		font-size: 1em;
		text-align: right;
		margin: 0;
	}

	.product-price {
		color: #4075a6;
	}

	@media screen and (max-width: 767px) {
		.product-preview {
			width: 100%;
		}
	}
</style>
