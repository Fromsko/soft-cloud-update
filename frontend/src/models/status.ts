// src/models/status.ts

// 请求状态枚举
export enum RequestStatus {
    SUCCESS = 200,         // 请求成功
    TOKEN_EXPIRED = 40001, // Token 过期
    NETWORK_ERROR = 500,   // 网络错误
    INVALID_REQUEST = 400,  // 无效请求
}

// 业务状态枚举
export enum BusinessStatus {
    ACTIVE = 'active',     // 业务活跃
    INACTIVE = 'inactive',  // 业务不活跃
    PENDING = 'pending',    // 业务待处理
    COMPLETED = 'completed', // 业务已完成
}

// 其他状态信息
export enum CommonStatus {
    LOADING = 'loading',    // 加载中
    SUCCESS = 'success',     // 成功
    ERROR = 'error',         // 错误
}

// 错误信息枚举
export enum ErrorMessage {
    NETWORK_EXCEPTION = '网络异常',
    TOKEN_EXPIRED = 'Token 已过期',
}
