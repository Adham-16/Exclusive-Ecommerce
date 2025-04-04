import toast from "react-hot-toast";

export const addToWishlist = (productId) => {
    const storedWishlist = localStorage.getItem('wishlist');
    let updatedWishlist = [];

    if (storedWishlist) {
        updatedWishlist = JSON.parse(storedWishlist);
    }

    if (!updatedWishlist.includes(productId)) {
        updatedWishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        toast.success('Added to the Wishlist Successfully!', {
            duration: 2000
        });
    } else {
        toast.error('Product is already in the Wishlist!', {
            duration: 2000
        });
    }
};