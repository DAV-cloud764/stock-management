import { useState } from "react";
import { Plus, Trash2, X } from "lucide-react";

import type {
  Product,
  ProductAttribute,
} from "../types/product";

type ProductFormProps = {
  product?: Product;
  onSubmit: (product: Product) => void;
  onCancel: () => void;
};

const categories = [
  "Computers",
  "Audio",
  "Wearables",
  "Accessories",
  "Storage",
];

const units = [
  "Piece",
  "Box",
  "Pack",
  "Kilogram",
  "Liter",
  "Meter",
];

export default function ProductForm({
  product,
  onSubmit,
  onCancel,
}: ProductFormProps) {
  const isEditing = Boolean(product);

  const [name, setName] = useState(product?.name ?? "");
  const [sku, setSku] = useState(product?.sku ?? "");
  const [category, setCategory] = useState(
    product?.category ?? ""
  );
  const [unit, setUnit] = useState(product?.unit ?? "");
  const [description, setDescription] = useState(
    product?.description ?? ""
  );
  const [threshold, setThreshold] = useState(
    product?.threshold.toString() ?? ""
  );
  const [availableQuantity, setAvailableQuantity] =
    useState(
      product?.availableQuantity.toString() ?? "0"
    );

  const [attributes, setAttributes] = useState<
    ProductAttribute[]
  >(product?.attributes ?? []);

  function addAttribute() {
    setAttributes([
      ...attributes,
      {
        name: "",
        value: "",
      },
    ]);
  }

  function removeAttribute(index: number) {
    setAttributes(
      attributes.filter((_, attributeIndex) => {
        return attributeIndex !== index;
      })
    );
  }

  function updateAttribute(
    index: number,
    field: keyof ProductAttribute,
    value: string
  ) {
    setAttributes(
      attributes.map((attribute, attributeIndex) => {
        if (attributeIndex !== index) {
          return attribute;
        }

        return {
          ...attribute,
          [field]: value,
        };
      })
    );
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const cleanedAttributes = attributes.filter(
      (attribute) =>
        attribute.name.trim() !== "" &&
        attribute.value.trim() !== ""
    );

    const productData: Product = {
      id: product?.id ?? crypto.randomUUID(),
      name: name.trim(),
      sku: sku.trim(),
      category,
      unit,
      description: description.trim(),
      attributes: cleanedAttributes,
      availableQuantity: Number(availableQuantity),
      threshold: Number(threshold),
    };

    onSubmit(productData);
  }

  return (
    <div className="form-overlay">
      <div className="product-form-panel">
        <div className="product-form-header">
          <div>
            <span className="form-breadcrumb">
              Products
            </span>

            <h2>
              {isEditing
                ? "Edit Product"
                : "Add Product"}
            </h2>

            <p>
              {isEditing
                ? "Update product information and configuration."
                : "Create a new product and define its inventory settings."}
            </p>
          </div>

          <button
            type="button"
            className="icon-button"
            onClick={onCancel}
            aria-label="Close form"
          >
            <X size={20} />
          </button>
        </div>

        <form
          className="product-form"
          onSubmit={handleSubmit}
        >
          <div className="form-section">
            <h3>Basic Information</h3>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="product-name">
                  Product Name
                </label>

                <input
                  id="product-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="product-sku">
                  SKU
                </label>

                <input
                  id="product-sku"
                  type="text"
                  value={sku}
                  onChange={(event) =>
                    setSku(event.target.value)
                  }
                  placeholder="Enter SKU"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="product-category">
                  Category
                </label>

                <select
                  id="product-category"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                  required
                >
                  <option value="">
                    Select category
                  </option>

                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="product-unit">
                  Unit
                </label>

                <select
                  id="product-unit"
                  value={unit}
                  onChange={(event) =>
                    setUnit(event.target.value)
                  }
                  required
                >
                  <option value="">
                    Select unit
                  </option>

                  {units.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="product-description">
                  Description
                </label>

                <textarea
                  id="product-description"
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="Describe the product"
                  rows={4}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-heading">
              <div>
                <h3>Attributes</h3>

                <p>
                  Add specifications specific to this
                  product.
                </p>
              </div>

              <button
                type="button"
                className="secondary-button"
                onClick={addAttribute}
              >
                <Plus size={16} />
                Add attribute
              </button>
            </div>

            {attributes.length === 0 ? (
              <div className="attributes-empty">
                No attributes added yet.
              </div>
            ) : (
              <div className="attributes-form-list">
                {attributes.map(
                  (attribute, index) => (
                    <div
                      className="attribute-form-row"
                      key={`${index}-${attribute.name}`}
                    >
                      <input
                        type="text"
                        value={attribute.name}
                        onChange={(event) =>
                          updateAttribute(
                            index,
                            "name",
                            event.target.value
                          )
                        }
                        placeholder="Attribute name"
                      />

                      <input
                        type="text"
                        value={attribute.value}
                        onChange={(event) =>
                          updateAttribute(
                            index,
                            "value",
                            event.target.value
                          )
                        }
                        placeholder="Attribute value"
                      />

                      <button
                        type="button"
                        className="danger-icon-button"
                        onClick={() =>
                          removeAttribute(index)
                        }
                        aria-label={`Remove attribute ${
                          index + 1
                        }`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <div className="form-section">
            <h3>Inventory Settings</h3>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="product-quantity">
                  Available Quantity
                </label>

                <input
                  id="product-quantity"
                  type="number"
                  min="0"
                  value={availableQuantity}
                  onChange={(event) =>
                    setAvailableQuantity(
                      event.target.value
                    )
                  }
                  disabled={isEditing}
                  required
                />

                {isEditing && (
                  <span className="field-help">
                    Stock quantity is managed through
                    Adjust Stock.
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="product-threshold">
                  Low Stock Threshold
                </label>

                <input
                  id="product-threshold"
                  type="number"
                  min="0"
                  value={threshold}
                  onChange={(event) =>
                    setThreshold(event.target.value)
                  }
                  required
                />
              </div>
            </div>
          </div>

          <div className="product-form-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-button"
            >
              {isEditing
                ? "Save Changes"
                : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
