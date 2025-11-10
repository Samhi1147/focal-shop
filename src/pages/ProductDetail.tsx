import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-3xl font-bold">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Return to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <Badge className="mb-4 w-fit">{product.category}</Badge>
            <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
            <p className="mb-6 text-lg text-muted-foreground">
              {product.description}
            </p>
            <div className="mb-8 flex items-baseline gap-4">
              <span className="text-5xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => addToCart(product)}
                size="lg"
                className="flex-1"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Buy Now
              </Button>
            </div>

            <div className="mt-8 space-y-4 rounded-lg border p-6">
              <h3 className="font-semibold">Product Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free shipping on orders over $50</li>
                <li>• 30-day return policy</li>
                <li>• 1-year warranty included</li>
                <li>• Secure payment processing</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
