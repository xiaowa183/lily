package api

import (
	"github.com/astaxie/beego"
)

type WeatherController struct {
	beego.Controller
}

//天气信息
func (c *WeatherController) Weather() {
	c.Data["Website"] = "lily.wiki"
	c.Data["Email"] = "WeatherInfo"
	c.TplNames = "index.tpl"
}


