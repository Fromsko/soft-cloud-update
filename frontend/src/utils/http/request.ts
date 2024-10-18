import { ErrorMessage, RequestStatus } from '@/models/status';
import config from '@/utils/config';
import { LogHandler } from '@/utils/decorators';
import { log } from '@/utils/log/web_log';
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

class RequestManager {
    private service;
    private baseURL: string;

    constructor() {
        this.baseURL = config.baseApi;

        this.service = axios.create({ baseURL: this.baseURL });

        this.initializeRequestInterceptor();
        this.initializeResponseInterceptor();

        this.setupRequestMethods();
    }

    private initializeRequestInterceptor() {
        this.service.interceptors.request.use((req: InternalAxiosRequestConfig) => {
            const token = this.getToken();
            if (token) {
                req.headers.Authorization = token;
            }
            return req;
        }, error => {
            return Promise.reject(error);
        });
    }

    private initializeResponseInterceptor() {
        this.service.interceptors.response.use((res: AxiosResponse) => {
            const { code, data, msg } = res.data;

            if (code === RequestStatus.SUCCESS) {
                return data;
            } else {
                return this.handleError(code, msg);
            }
        }, error => {
            return Promise.reject(ErrorMessage.NETWORK_EXCEPTION);
        });
    }

    private getToken(): string | undefined {
        // TODO: 获取 Token 信息
        log.warning("使用的模拟 Token")
        return 'bear fromsko';
    }

    @LogHandler
    private handleError(code: number, msg: string): Promise<never> {
        if (code === RequestStatus.TOKEN_EXPIRED) {
            return Promise.reject(ErrorMessage.TOKEN_EXPIRED);
        } else {
            const errorMessage = msg || ErrorMessage.NETWORK_EXCEPTION;
            return Promise.reject(errorMessage);
        }
    }

    // 通用请求方法
    async request<T = any>(options: AxiosRequestConfig): Promise<T> {
        if (options.method?.toLowerCase() === 'get') {
            options.params = options.data;
        }
        this.setBaseURL();
        return this.service(options);
    }

    private setBaseURL() {
        if (config.useMock) {
            this.service.defaults.baseURL = config.mockApi;
        } else {
            this.service.defaults.baseURL = config.baseApi;
        }
    }

    private setupRequestMethods() {
        // 动态添加请求方法
        ['get', 'post', 'put', 'delete'].forEach((method) => {
            (this as any)[method] = (url: string, data?: any, options?: AxiosRequestConfig) => {
                return this.request({
                    url,
                    data,
                    method,
                    ...options,
                });
            };
        });
    }
}

const manager = new RequestManager()

export default manager.request;
