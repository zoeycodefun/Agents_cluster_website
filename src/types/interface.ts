// safe type
export interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    websiteUrl: string;
    category: string;
}
export interface Category {
    id: string;
    name: string;
    slug: string;
}
// API
export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}