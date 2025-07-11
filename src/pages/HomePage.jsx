import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // 🧠 Filter and Sort
  useEffect(() => {
    let result = products;

    // Filter
    if (searchTerm) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortOption === 'title-asc') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'title-desc') {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset on search or sort
  }, [searchTerm, sortOption, products]);

  // 🧠 Pagination Logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📦 Product Store</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sort Dropdown */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-6"
      >
        <option value="">Sort by</option>
        <option value="title-asc">Title: A → Z</option>
        <option value="title-desc">Title: Z → A</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
      </select>

      {/* Product List */}
      <ProductList products={currentItems} />

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default HomePage;
