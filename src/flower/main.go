package main
import(
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	
	"gopkg.in/macaron.v1"
)

func main(){
	if os.Getppid() != 1 {
        filePath, _ := filepath.Abs(os.Args[0])
        cmd := exec.Command(filePath, os.Args[1:]...)
        cmd.Start()
        return
    }
	
	m := macaron.Classic()
	m.Get("/",index)
	
	log.Println("server is running")
	log.Println(http.ListenAndServe(":80",m))
	
}

//首页
func index(ctx *macaron.Context)string{
	return "hello lily"
}