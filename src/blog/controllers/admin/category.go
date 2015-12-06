package admin


type CategoryController struct {
	baseController
}



//类别列表
func (c *CategoryController) CategoryList() {
	c.Data["Website"] = "lily.wiki"
	c.Data["Email"] = "CategoryList"
	c.TplNames = "index.tpl"
}


//添加类别
func (c *CategoryController) AddCategory () {
	c.Data["Website"] = "lily.wiki"
	c.Data["Email"] = "AddCategory"
	c.TplNames = "index.tpl"
}