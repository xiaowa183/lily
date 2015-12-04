package admin


type ArticleController struct {
	baseController
}



//文章列表
func (c *ArticleController) ArticleList() {
	c.Data["Website"] = "lily.wiki"
//	c.Data["Email"] = "ArticleList"
	c.TplNames = "index.tpl"
}


//添加文章
func (c *ArticleController) AddArticle () {
	c.Data["Website"] = "lily.wiki"
	c.Data["Email"] = "AddArticle"
	c.TplNames = "index.tpl"
}