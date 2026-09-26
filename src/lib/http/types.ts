export interface ApiResponse<T> { success: boolean; message: string; data: T }
export interface PaginatedResponse<T> { items: T[]; page: number; perPage: number; total: number }
export interface ApiErrorResponse { message: string; errors?: Record<string, string[]> }
