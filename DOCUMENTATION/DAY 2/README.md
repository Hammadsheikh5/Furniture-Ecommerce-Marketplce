# Day 2 Activities: Transitioning to Technical Planning

## 1. Define Technical Requirements

### Frontend Requirements
The frontend should provide a seamless and engaging user experience.

#### **User Interface**
- **Homepage**: Display featured products, categories, and promotional banners.
- **Product Listing**: Grid layout with filtering and sorting options (e.g., price, category).
- **Product Details**: Detailed product information, images, related products, and "Add to Cart" button.
- **Cart**: Show selected items, quantities, and total price. Enable item removal and quantity updates.
- **Checkout**: Capture user information (shipping and billing), order summary, and payment details.
- **Order Confirmation**: Thank-you page showing order details and confirmation.

---

### Sanity CMS as Backend
Leverage Sanity CMS for dynamic data management and scalability.

#### **Schemas to Design in Sanity**
- **Products**:
  - Fields: `name`, `description`, `price`, `images`, `category`, `stock`, `SKU`, and `tags`.
- **Categories**:
  - Fields: `name`, `description`, and `image`.
- **Orders**:
  - Fields: `orderId`, `customerInfo`, `products` (array of product references), `totalPrice`, and `status` (e.g., pending, shipped, delivered).
- **Customers**:
  - Fields: `name`, `email`, `phone`, and `address`.

#### **GROQ Queries**
- Fetch product listings, product details by ID, and category-based filtering.
- Retrieve orders for order confirmation and admin review.

#### **Sanity Studio**
- Set up a user-friendly interface for managing product inventory, updating orders, and adding categories.

---

### Third-Party APIs
Integrate essential APIs to enhance backend functionality and support frontend features.

#### **Payment Gateway**
- Use for secure and seamless payment processing.
- Ensure support for payment intents, order totals, and card validation.

#### **Shipment Tracking API**
- Provide live shipping rates during checkout.
- Enable order tracking for customers post-purchase.
