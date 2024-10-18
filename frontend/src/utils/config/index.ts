/** 
  File: index.ts
  Description: Config 配置信息
*/
import { EnvConfig, Environment } from '@/models/env';

const NAME_SPACE = import.meta.env.VITE_NAME_SPACE as string;
const ENV = import.meta.env.MODE as Environment;

export default {
    ENV,
    NAME_SPACE,
    ...EnvConfig[ENV],
};