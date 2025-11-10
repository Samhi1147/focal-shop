import { Link } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Store className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ShopHub
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <Badge
                variant="default"
                className="absolute -right-1 -top-1 h-5 min-w-[1.25rem] rounded-full px-1 text-xs"
              >
                {cartCount}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
