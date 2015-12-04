package routers

import (
	"blog/controllers/api"
	"github.com/astaxie/beego"
)

func init() {
   beego.Include(&api.MainController{})
}
