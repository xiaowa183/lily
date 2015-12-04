package admin

import (
	"github.com/astaxie/beego"
)


type baseController struct {
	beego.Controller
//	user             models.User
    isLogin          bool
}

//后台做登录的验证
func (c *baseController) Prepare() {

	c.Data["Email"] = "needlogin11"

}