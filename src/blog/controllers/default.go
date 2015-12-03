package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "lily.wiki"
	c.Data["Email"] = "mclovin888@126.com"
	c.TplNames = "index.tpl"
}
