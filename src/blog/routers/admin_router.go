package routers

import (
	"blog/controllers/admin"
	"github.com/astaxie/beego"
)

func init() {
	
	beego.AutoRouter(&admin.ArticleController{})
  
}
