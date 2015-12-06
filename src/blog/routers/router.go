package routers

import (
	"blog/controllers/admin"
	"blog/controllers/api"
	"github.com/astaxie/beego"
)

func init() {

	//初始化namespace
	
	
	//后台
	adminNs := 
		beego.NewNamespace("/admin",
			beego.NSAutoRouter(&admin.ArticleController{}),
	)
	
	//api
	apiNs :=
		beego.NewNamespace("/api",
			beego.NSRouter("/weather", &api.WeatherController{}, "get:Weather"),
	)

	//注册namespace
	beego.AddNamespace(adminNs,apiNs)

}
