/**
 * Format a number as currency
 * @param value - Number to format
 * @param currency - Currency code (default: USD)
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number, currency = 'USD'): string => {
    // For rentals (typically under 10000), show monthly price
    const isRental = value < 10000;
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(value) + (isRental ? '/mo' : '');
  };
  
  /**
   * Format a date string to local date
   * @param dateString - ISO date string
   * @returns Formatted date string
   */
  export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  /**
   * Format area with appropriate unit
   * @param area - Area value
   * @param unit - Area unit (sqft or sqm)
   * @returns Formatted area string
   */
  export const formatArea = (area: number, unit: string): string => {
    return `${area.toLocaleString()} ${unit}`;
  };
  
  /**
   * Format address components into a full address
   * @param address - Address object
   * @returns Formatted address string
   */
  export const formatAddress = (address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country?: string;
  }): string => {
    return `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`;
  };