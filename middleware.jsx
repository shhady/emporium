import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/api/products', '/'], // Public route, no sign-in required
    authorize: (req, res) => {
        // Check if the path matches the protected route
        if (req.path === "/protected-route") {
            if (!req.session) {
                // Redirect to the sign-in page if the user is not signed in
                res.redirect("/sign-in");
                return false; // Prevent access to the route
            }
        }
        return true; // Allow access if not the protected route or user is signed in
    }
});

// Export the config with matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
