
// Filter the restaurant data according input type
export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>

        // incase of old api
        //restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())

        // incase of new api
        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
