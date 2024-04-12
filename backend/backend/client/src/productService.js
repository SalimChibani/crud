// productService.js

export const FetchProducts = async () => {
    try {
      const response = await fetch('your-api-endpoint'); // Replace 'your-api-endpoint' with the actual API endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  