export default (products, query) => {
    let searchedArray = products != null ? products : null
    const { title, from, to, continent } = query
    
    try {
        if (title) {
            searchedArray = searchedArray.filter(product => (
                product.title.search(new RegExp(title, 'i')) !== -1
            ))
        }

        if (from) {
            searchedArray = searchedArray.filter(product => (
                product.price >= from
            ))
        }

        if (to) {
            searchedArray = searchedArray.filter(product => (
                product.price <= to
            ))
        }

        if (continent) {
            searchedArray = searchedArray.filter(product => (
                product.continent === continent
            ))
        }

        return searchedArray
    } catch (error) {
        return []
    }
}