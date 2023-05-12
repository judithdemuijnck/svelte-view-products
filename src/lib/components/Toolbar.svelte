<script>
	import { createEventDispatcher, onMount } from 'svelte';

	import capitalize from '../../utils/capitalize';
	import { getAllCategories } from '../../stores/actions.js';

	let search;
	let sort = '--';
	let sortOptions = ['title', 'category', 'price', 'stock'];
	let currentCategory = 'all';
	let allCategories;

	const dispatch = createEventDispatcher();

	onMount(async () => {
		allCategories = await getAllCategories();
	});

	function handleSearch() {
		dispatch('search', {
			searchTerm: search
		});
	}

	function handleSort() {
		dispatch('sort', {
			sortBy: sort
		});
	}

	function handleFilter() {
		dispatch('filter', {
			category: currentCategory
		});
	}
</script>

<form class="toolbar" on:submit|preventDefault>
	<div class="tool-item">
		<label for="search">
			<input id="search" name="search" type="text" bind:value={search} on:input={handleSearch} />
		</label>
	</div>

	<div class="tool-item">
		<label for="sort-by"><b>Sort by: </b></label>
		<select id="sort-by" name="sort-by" bind:value={sort} on:change={handleSort}>
			<option value="--">--</option>
			{#each sortOptions as sortOption}
				<option value={sortOption}>{capitalize(sortOption)}</option>
			{/each}
		</select>
	</div>

	<div class="tool-item">
		<label for="filter-by"><b>Filter by:</b> </label>
		<select id="filter-by" name="filter-by" bind:value={currentCategory} on:change={handleFilter}>
			<option value="all">All</option>
			{#if allCategories && allCategories.length > 0}
				{#each allCategories as category}
					<option value={category}>{capitalize(category)}</option>
				{/each}
			{/if}
		</select>
	</div>
</form>

<style>
	.toolbar {
		display: flex;
		justify-content: space-around;
		background-color: #ff3e00;
		flex-wrap: wrap;
		padding: 10px;
		align-items: center;
		box-shadow: 0 5px 15px #34495e6a;
		border-radius: 5px;
		width: 100%;
	}

	#search {
		border: none;
		border-radius: 15px;
		box-shadow: 0 5px 15px #34495e1a;
		padding: 5px;
		padding-left: 10px;
		width: 200px;
		background-color: white;
	}

	#sort-by,
	#filter-by {
		border: none;
		background-color: transparent;
	}

	@media screen and (max-width: 767px) {
		.tool-item {
			width: 100%;
			padding: 5px 8px;
			text-align: left;
		}
	}
</style>
