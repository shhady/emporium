import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Public routes, accessible to both signed-in and signed-out users
    publicRoutes: [
        "/((?!checkout).*)" // Make all routes public except for the 'cart' route
    ],
    authorize: (req, res) => {
        // Protect only the '/cart' route
        if (req.path === "/checkout") {
            if (!req.session) {
                // Redirect to the sign-in page if the user is not signed in
                res.redirect("/sign-in");
                return false; // Prevent access to the route
            }
        }
        return true; // Allow access if not the protected route or if the user is signed in
    }
});

// Export the config with matcher
export const config = {
    matcher: ["/((?!_next|.*\\..*).*)"], // Matches all routes except static files and internal paths
};
