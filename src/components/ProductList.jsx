export default function ProductList({ products, onEdit }) {
  return (
    <div className="space-y-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between rounded border bg-white p-4"
        >
          <div>
            <p className="font-bold">{product.name}</p>
            <p>₹{product.price}</p>
          </div>

          <button
            onClick={() => onEdit(product)}
            className="rounded bg-amber-500 px-4 py-2 text-white"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}