const sortItems = (items, sortBy) => {
	items.sort((a, b) => {
		if (typeof a[sortBy] === 'string') {
			return a[sortBy].localeCompare(b[sortBy]);
		}
		if (a[sortBy] < b[sortBy]) {
			return -1;
		}
		if (a[sortBy] > b[sortBy]) {
			return 1;
		}
		return 0;
	});
	return items;
};

export default sortItems;
