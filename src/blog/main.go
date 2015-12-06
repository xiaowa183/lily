package main

import (
	_ "blog/routers"
    _ "github.com/astaxie/beego/session/redis"  
	"github.com/astaxie/beego"
)


func main() {
	
	beego.Run()
}

