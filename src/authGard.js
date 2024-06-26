export default {
  beforeEach: (to, from, next) => {
    const isAuthenticated = localStorage.getItem("userToken");
    if (
      (to.path === "/Wishlist" && !isAuthenticated) ||
      (to.path === "/cart" && !isAuthenticated) ||
      (to.path === "/MyProfile" && !isAuthenticated)
    ) {
      next("/login");
    } else {
      next();
    }
  },
};
