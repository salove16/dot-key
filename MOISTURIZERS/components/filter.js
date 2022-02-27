function filter_sort(){
    return `
    <select name="" id="select_product">
    <option value="">All Products</option>
    <option value="">Acne Products</option>
    <option value="">Acne Prone Skin</option>
    <option value="">activeAcne</option>
    <option value="">Age Defence</option>
    <option value="">bundle</option>
    <option value="">Combination skin</option>
    <option value="">Daily Essentials</option>
    <option value="">Dry Skin</option>
    <option value="">Dry Acne</option>
    <option value="">Dryness and Repair</option>
    <option value="">Hydration</option>
    <option value="">Mature Skin</option>
    <option value="">Moisturizer</option>
    <option value="">Normal Skin</option>
    <option value="">Oily Skin</option>
    <option value="">postAcne</option>
    <option value="">proneAcne</option>
    <option value="">Sensitive Skin</option>
    <option value="">Skin Glow</option>
    <option value="">Uneven Tone</option>
    <option value="">Valentine</option>
    <option value="">winter-pick</option>
</select>

<select name="" id="select_featured">
    <option value="">Sort</option>
    <option value="">Featured</option>
    <option value="">Best-selling</option>
    <option value="ATZ">Alphabetically, A-Z</option>
    <option value="ZTA">Alphabetically, Z-A</option>
    <option value="LTH">Price, low to high</option>
    <option value="HTL">Price, high to low</option>
    <option value="">Date, old to new</option>
    <option value="">Date, new to old</option>
</select>
    `;
}

export default filter_sort;