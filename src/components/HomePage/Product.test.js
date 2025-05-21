import { render, screen, fireEvent } from '@testing-library/react';
import Product from './Product';

// Mock the ButtonOrNotistack component
jest.mock('./ButtonOrNotistack', () => ({ id, addToCart }) => (
  <button onClick={() => addToCart(id)}>Add to Basket</button>
));

// Mock next/link
jest.mock('next/link', () => ({ children }) => children);

const mockProduct = {
  id: '1',
  images: ['/test-image1.jpg', '/test-image2.jpg', '/test-image3.jpg'],
  title: 'Test Product',
  price: '100',
  inBasket: false,
};

const mockAddToCart = jest.fn();

describe('Product component', () => {
  beforeEach(() => {
    // Reset the mock function before each test
    mockAddToCart.mockClear();
  });

  it('renders product information correctly', () => {
    render(
      <Product
        id={mockProduct.id}
        images={mockProduct.images}
        title={mockProduct.title}
        price={mockProduct.price}
        inBasket={mockProduct.inBasket}
        addToCart={mockAddToCart}
        spacingValue={1}
      />
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    // Check if the images are rendered (we check the first and second image based on the component's usage)
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', '/test-image1.jpg');
    expect(images[1]).toHaveAttribute('src', '/test-image3.jpg');
  });

  it('calls addToCart when "Add to Basket" is clicked', () => {
    render(
      <Product
        id={mockProduct.id}
        images={mockProduct.images}
        title={mockProduct.title}
        price={mockProduct.price}
        inBasket={false} // Explicitly set inBasket to false for this test
        addToCart={mockAddToCart}
        spacingValue={1}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /add to basket/i }));
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct.id);
  });

  it('shows "Go to cart" button if product.inBasket is true', () => {
    render(
      <Product
        id={mockProduct.id}
        images={mockProduct.images}
        title={mockProduct.title}
        price={mockProduct.price}
        inBasket={true} // Explicitly set inBasket to true for this test
        addToCart={mockAddToCart}
        spacingValue={1}
      />
    );
    // Check for the "Go to cart" button text
    expect(screen.getByRole('button', { name: /go to cart/i })).toBeInTheDocument();
    // Ensure addToCart is not called when the product is already in the basket
    // (assuming clicking "Go to cart" doesn't call addToCart)
    fireEvent.click(screen.getByRole('button', { name: /go to cart/i }));
    expect(mockAddToCart).not.toHaveBeenCalled();
  });
});
