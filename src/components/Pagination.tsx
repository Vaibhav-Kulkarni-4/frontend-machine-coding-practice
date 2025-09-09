import { useState, useEffect } from "react";

interface PaginationProps {
  itemsPerPageCount?: number;
}

export default function Pagination({
  itemsPerPageCount = 10,
}: Readonly<PaginationProps>) {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalProducts = products.length;
  const pageSize = Math.ceil(totalProducts / itemsPerPageCount);
  const start = currentPage * itemsPerPageCount;
  const end = start + itemsPerPageCount;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=${200}`);
    const data = await response.json();
    setProducts(data.products);
  };

  //   console.log(
  //     "products",
  //     "\ntotalProducts",
  //     totalProducts,
  //     "\npageSize",
  //     pageSize,
  //     "\nstart",
  //     start,
  //     "\nend",
  //     end,
  //     "\ncurrentPage",
  //     currentPage
  //   );

  const handlePageChange = (event: any, idx: number) => {
    setCurrentPage(idx);
  };

  const handleLeftPagination = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const handleRightPagination = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      <h2 className="mt-10 mb-5 flex justify-center items-center text-xl font-bold">
        Pagination
      </h2>
      <div className="flex items-center justify-center flex-col gap-3">
        <table className="border-spacing-1 border-2 border-slate-500 p-2">
          <thead className="border-2 border-slate-500">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody className="p-2">
            {products.slice(start, end).map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center gap-1">
          <button
            className={`${
              currentPage === 0 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={handleLeftPagination}
            disabled={currentPage === 0}
          >
            ⬅️
          </button>
          {[...Array(pageSize)].map((_, idx) => (
            <button
              key={idx}
              className={`border border-solid border-gray-400 px-2 py-1 rounded-md cursor-pointer ${
                currentPage === idx ? "bg-blue-300" : ""
              }`}
              onClick={(event) => handlePageChange(event, idx)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            className={`${
              currentPage === pageSize - 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={handleRightPagination}
            disabled={currentPage === pageSize - 1}
          >
            ➡️
          </button>
        </div>
      </div>
    </>
  );
}
