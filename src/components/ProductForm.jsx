import { useState } from "react";

export default function ProductForm({ editingProduct, onSave }) {
  const [name, setName] = useState(() => editingProduct?.name ?? "");
  const [price, setPrice] = useState(() =>
    editingProduct ? String(editingProduct.price) : ""
  );

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      ...editingProduct,
      name,
      price: Number(price),
    });

    setName("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        className="w-full rounded border p-3"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="w-full rounded border p-3"
        type="number"
        min="0"
        step="0.01"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <button
        type="submit"
        className="rounded bg-blue-600 px-5 py-3 text-white"
      >
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}