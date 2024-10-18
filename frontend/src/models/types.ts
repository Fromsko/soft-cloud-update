// src/types/types.ts

export interface MyDataType {
    id: number;           // 数据唯一标识
    name: string;         // 数据名称
    description?: string; // 数据描述（可选）
    createdAt: string;    // 创建时间
    updatedAt: string;    // 更新时间
}

// 其他类型示例
export interface ApiResponse<T> {
    code: number;        // 状态码
    data: T;            // 返回数据
    msg?: string;       // 可选的消息
}

// 用户模型
export interface User {
    id: number;
    username: string;
    email: string;
    role: 'admin' | 'user';
}

export interface Config {
    AppName: string
    Author: string
    SeverMode: string
    Version: string
}