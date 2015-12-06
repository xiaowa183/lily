package admin

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/cache"
	_ "github.com/astaxie/beego/cache/redis" 
)


type baseController struct {
	beego.Controller
//	user             models.User
    isLogin          bool
}

var RedisObject	interface{}


//后台做登录的验证
func (c *baseController) Prepare() {
	RedisObject, err := cache.NewCache("redis", `{"conn":"45.78.16.95:6039","password":"8522182"}`)
	if err != nil{
		c.StopRun()
	}
	pass := RedisObject.Get("xiaowa")
	var password []byte
	var p string
	switch pass.(type){
		case []byte : 
			password = pass.([]byte)
			p = string(password)
			c.Data["Email"] = p
		default :
			c.Data["Email"] = pass
	}
	
	
	

}

//检查管理员是否登录
func checkLogin(){
	
	
}

//登录
func (c *baseController) Login(){
	
}

//退出登录
func loginout(){
	
}