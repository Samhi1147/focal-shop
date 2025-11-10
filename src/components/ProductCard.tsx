import { Link } from "react-router-dom";
import { Product } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mb-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="w-full"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
