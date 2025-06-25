// Mock product data and service functions
const mockProducts = [
  // Men's Products
  {
    id: 1,
    name: "Classic Blue Shirt",
    price: 2099.00,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "shirts",
    gender: "men",
    rating: 4.5,
    reviewCount: 128,
    sizes: ["S", "M", "L",],
    brand: "StyleHub",
    isNew: false,
    isFeatured: true,
    description: "A timeless classic blue shirt perfect for any occasion."
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 2199.00,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "jackets",
    gender: "men",
    rating: 4.7,
    reviewCount: 89,
    sizes: ["S", "M", "L"],
    brand: "UrbanStyle",
    isNew: true,
    isFeatured: true,
    description: "Stylish denim jacket for a casual yet trendy look."
  },
  {
    id: 3,
    name: "Casual Chinos",
    price: 3099.00,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "pants",
    gender: "men",
    rating: 4.3,
    reviewCount: 156,
    sizes: ["S", "M", "L"],
    brand: "ComfortFit",
    isNew: false,
    isFeatured: false,
    description: "Comfortable chinos perfect for everyday wear."
  },

   // Women's Products
  {
    id: 6,
    name: "Long Skirt",
    price: 999.00,
    discount: 5,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "dresses",
    gender: "women",
    rating: 4.8,
    reviewCount: 245,
    sizes: ["S", "M", "L"],
    brand: "SummerVibes",
    isNew: true,
    isFeatured: true,
    description: "A style that typically extends to the ankles or even the floor"
  },
  {
    id: 7,
    name: "Silk Blouse",
    price: 2599.00,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "tops",
    gender: "women",
    rating: 4.6,
    reviewCount: 178,
    sizes: ["S", "M", "L"],
    brand: "LuxeFashion",
    isNew: false,
    isFeatured: true,
    description: "Elegant silk blouse for sophisticated styling."
  },
  {
    id: 8,
    name: "High-Waisted Jeans",
    price: 3599.00,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "bottoms",
    gender: "women",
    rating: 4.7,
    reviewCount: 312,
    sizes: ["S", "M", "L"],
    brand: "DenimCo",
    isNew: false,
    isFeatured: true,
    description: "Flattering high-waisted jeans with perfect fit."
  }


];


export const productService = {
  // Get all products
  getAllProducts: () => {
    return mockProducts;
  },

  // Get product by ID
  getProductById: (id) => {
    return mockProducts.find(product => product.id === id);
  },

  // Get men's products
  getMenProducts: () => {
    return mockProducts.filter(product => product.gender === 'men');
  },

   // Get women's products
  getWomenProducts: () => {
    return mockProducts.filter(product => product.gender === 'women');
  },


} 