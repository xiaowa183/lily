package admin

import (
	"html/template"
)
type ArticleController struct {
	baseController
}



//文章列表
func (c *ArticleController) ArticleList() {
	c.Data["Website"] = "lily.wiki"
	c.Data["xsrfdata"]= template.HTML(c.XsrfFormHtml())
	c.TplNames = "index.tpl"
}


//添加文章
func (c *ArticleController) AddArticle () {
	c.SetSession("user","xiaowa")
	ws := c.GetSession("user")
	c.Data["Website"] = ws
	c.TplNames = "index.tpl"
}