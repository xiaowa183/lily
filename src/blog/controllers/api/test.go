package api

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

//文章列表
func (c *MainController) ArticleList() {
	c.Data["Website"] = "lily.wiki"
	c.Data["Email"] = "ArticleList"
	c.TplNames = "index.tpl"
}
