# 退出登录

清除redis中的用户信息

## 配置文件

需要配置redis到mm.json中

```json
{
	"redis": {
		"url": "redis://127.0.0.1:6379",
		"expiration": 20000
	}
}
```
