// Copyright 2015 Unknwon
//
// Licensed under the Apache License, Version 2.0 (the "License"): you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

package models

import (
	"os"

	"github.com/Unknwon/com"
	"github.com/Unknwon/log"

	"github.com/peachdocs/peach/modules/setting"
)

func initLangDocs(tocs map[string]*Toc, localRoot, lang string) {
	toc := tocs[lang]

	for _, dir := range toc.Nodes {
		if err := dir.ReloadContent(); err != nil {
			log.Error("Fail to load doc file: %v", err)
			continue
		}

		for _, file := range dir.Nodes {
			if com.IsFile(file.FileName) {
				if err := file.ReloadContent(); err != nil {
					log.Error("Fail to load doc file: %v", err)
					continue
				}
			}
		}
	}

	for _, page := range toc.Pages {
		if err := page.ReloadContent(); err != nil {
			log.Error("Fail to load doc file: %v", err)
			continue
		}
	}
}

func initDocs(tocs map[string]*Toc, localRoot string) {
	for _, lang := range setting.Docs.Langs {
		initLangDocs(tocs, localRoot, lang)
	}
}

func NewContext() {
	if com.IsExist(HTMLRoot) {
		if err := os.RemoveAll(HTMLRoot); err != nil {
			log.Fatal("Fail to clean up HTMLRoot: %v", err)
		}
	}

	if err := ReloadDocs(); err != nil {
		log.Fatal("Fail to init docs: %v", err)
	}
}
