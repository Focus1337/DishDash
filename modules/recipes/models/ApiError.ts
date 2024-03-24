export interface ApiError {
    errorCode: string;
    message: string;
    params: string[];
}

type ApiErrors = ApiError[];