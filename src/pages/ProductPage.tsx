import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ProductVariants } from '../components/product/ProductVariants';
import { ProductPrice } from '../components/product/ProductPrice';
import { ProductImage } from '../components/product/ProductImage';
import { ProductHighlights } from '../components/product/ProductHighlights';
import { PaymentMethods } from '../components/product/PaymentMethods';
import { products } from '../data/products';
import { getIPhoneColors } from '../utils/colors';
import { getStorageOptions, conditionOptions } from '../utils/productOptions';
import { useCart } from '../hooks/useCart';
import { useCartOverlay } from '../hooks/useCartOverlay';

export function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const { open } = useCartOverlay();
  
  const product = products.find(p => p.id === id);
  
  const [selectedStorage, setSelectedStorage] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // Redirect if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          </div>
        </div>
      </div>
    );
  }

  const colors = getIPhoneColors(product.name);
  const storageOptions = getStorageOptions(product).map(opt => ({
    label: opt.capacity,
    value: opt.capacity,
    price: opt.price
  }));

  const conditionOpts = conditionOptions.map(opt => ({
    label: opt.label,
    value: opt.value,
    price: product.price + opt.price
  }));

  useEffect(() => {
    if (storageOptions.length > 0) {
      setSelectedStorage(storageOptions[0].value);
      setSelectedCondition(conditionOpts[0].value);
      setSelectedColor(colors[0].name);
      setTotalPrice(product.price);
    }
  }, [product.id]);

  useEffect(() => {
    const storageOption = storageOptions.find(opt => opt.value === selectedStorage);
    const conditionOption = conditionOpts.find(opt => opt.value === selectedCondition);

    if (storageOption && conditionOption) {
      const baseStoragePrice = storageOption.price;
      const conditionUpcharge = conditionOption.price - product.price;
      setTotalPrice(baseStoragePrice + conditionUpcharge);
    }
  }, [selectedStorage, selectedCondition]);

  const handleAddToCart = () => {
    if (!selectedStorage || !selectedCondition || !selectedColor) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      image: product.image,
      storage: selectedStorage,
      color: selectedColor,
      condition: selectedCondition
    });
    
    // Open the cart overlay
    open();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="space-y-4">
              <ProductImage 
                src={product.image}
                alt={product.name}
                hasDiscount={product.discount}
                hasWarranty={true}
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.reviews} reviews
                  </span>
                </div>
              </div>

              <ProductHighlights />

              <ProductVariants
                storageOptions={storageOptions}
                conditionOptions={conditionOpts}
                colors={colors}
                selectedStorage={selectedStorage}
                selectedCondition={selectedCondition}
                selectedColor={selectedColor}
                basePrice={product.price}
                onStorageChange={setSelectedStorage}
                onConditionChange={setSelectedCondition}
                onColorChange={setSelectedColor}
              />

              <ProductPrice
                price={totalPrice}
                originalPrice={product.originalPrice}
                onAddToCart={handleAddToCart}
                disabled={!selectedStorage || !selectedCondition || !selectedColor}
              />

              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}