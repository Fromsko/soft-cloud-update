/* 
    数据存储接口封装
*/
import lick_dog_quotation from "./local/lick_dog"
import ohhh_quotation from "./local/ohhh"
import MYSQL_API from "./remote/mysql"
import REDIS_API from "./remote/redis"
import SQL_LITE_API from "./remote/sqllite"


const DB_LOCAL = {
    lick_dog_quotation,
    ohhh_quotation,
}

const DB_REMOTE = {
    SQL_LITE_API,
    REDIS_API,
    MYSQL_API
}

export {
    DB_LOCAL,
    DB_REMOTE
}
