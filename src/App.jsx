import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);

  function updateProduct(updatedProduct) {
    setProducts((previous) =>
      previous.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    setEditingProduct(null);
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">Update Products</h1>

      {editingProduct ? (
        <ProductForm
          editingProduct={editingProduct}
          onSave={updateProduct}
        />
      ) : (
        <p className="mb-4 text-gray-600">
          Select a product to edit.
        </p>
      )}

      <ProductList
        products={products}
        onEdit={setEditingProduct}
      />
    </main>
  );
}