import getProducts from './getProducts'; // Adjust import path
import { getDocs, collection } from 'firebase/firestore/lite'; // Import what's used

// Mock Firebase
jest.mock('firebase/firestore/lite', () => ({
  ...jest.requireActual('firebase/firestore/lite'), // Import and retain default exports
  getDocs: jest.fn(),
  collection: jest.fn(),
}));

// Mock the database export from '@/firebase.js'
jest.mock('@/firebase', () => ({
  database: {}, // Provide a mock database object
}));


describe('getProducts service', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('fetches and returns products correctly', async () => {
    const mockFirebaseDocs = [
      { id: '1', data: () => ({ name: 'Product 1', price: 50 }) },
      { id: '2', data: () => ({ name: 'Product 2', price: 100 }) },
    ];
    const mockSnapshot = {
      docs: mockFirebaseDocs,
      // Add other properties like empty, size if your getProducts function uses them
    };

    getDocs.mockResolvedValue(mockSnapshot);
    // collection mock can be simple if its return value isn't deeply used by getDocs or other logic
    collection.mockReturnValue({}); // Mocking collection to return a dummy object

    const result = await getProducts();

    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith({}, 'products'); // Check if collection was called correctly
    // The getProducts function in the example returns the direct result from getDocs
    expect(result).toEqual(mockSnapshot);
  });

  it('handles errors when fetching products', async () => {
    const errorMessage = 'Firebase error';
    getDocs.mockRejectedValue(new Error(errorMessage));
    collection.mockReturnValue({}); // Mocking collection to return a dummy object

    // The current getProducts function does not catch errors, so it will throw
    await expect(getProducts()).rejects.toThrow(errorMessage);

    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith({}, 'products');
  });
});
