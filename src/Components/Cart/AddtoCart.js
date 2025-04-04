import toast from "react-hot-toast";

export const addToCart = (productId, quantity = 1) => {
    const savedCart = localStorage.getItem('cart');
    const cartItems = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cartItems.find(item => item.id === productId);
    let updatedCart;

    if (existingItem) {
        updatedCart = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
        toast.success('Item quantity increased !', {
            duration: 2000
        });
    } else {
        updatedCart = [...cartItems, { id: productId, quantity }];
        toast.success('Added to the Cart Successfully!', {
            duration: 2000
        });
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
};