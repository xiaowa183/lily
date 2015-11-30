document.write("<h1>Setup Documentation</h1>\n\n<p>Every Peach documentation repository should contain two parts of information:</p>\n\n<ul>\n<li>TOC.ini</li>\n<li>Documentation for every supported language</li>\n</ul>\n\n<p>Repository structure should look like as follows:</p>\n<pre><code class=\"language-sh\">$ tree\n.\n├── TOC.ini\n├── en-US\n│   ├── advanced\n│   │   ├── README.md\n│   │   └── ...\n│   ├── faqs\n│   │   └── README.md\n│   ├── howto\n│   │   ├── README.md\n│   │   ├── ...\n│   └── intro\n│       ├── README.md\n│       ├── ...\n└── zh-CN\n│   ├── ...\n</code></pre>\n\n<p>Let me explain them each at a time.</p>\n\n<h2>TOC.ini</h2>\n\n<p>In the repository root directory, you must have a file named <code>TOC.ini</code>, which stands for <strong>Table Of Content</strong>.</p>\n\n<p>In this file, you will use <a href=\"https://en.wikipedia.org/wiki/INI_file\">INI</a> syntax to define what are the directories and files, and in which order to organize them.</p>\n\n<p>Here is the <code>TOC.ini</code> took from <a href=\"http://peachdocs.org\">Peach Docs</a>:</p>\n<pre><code class=\"language-ini\">-: intro\n-: howto\n-: advanced\n-: faqs\n\n[intro]\n-: README\n-: installation\n-: getting_started\n-: roadmap\n\n[howto]\n-: README\n-: documentation\n-: webhook\n-: templates\n-: static_resources\n-: disqus\n-: ga\n\n[advanced]\n-: README\n-: config_cheat_sheet\n\n[faqs]\n-: README\n</code></pre>\n\n<p>:speech_balloon: A quick answer to the question you may have, yes, Peach only supports one level for directory.</p>\n\n<p>In the default section, you define what are the directories and the order of them:</p>\n<pre><code class=\"language-ini\">-: intro\n-: howto\n-: advanced\n-: faqs\n</code></pre>\n\n<p>These name are the same as the directores&rsquo; name.</p>\n\n<p>Then you create a section for each of these name, and the order of these sections does not matter:</p>\n<pre><code class=\"language-ini\">[intro]\n...\n[howto]\n...\n[advanced]\n...\n[faqs]\n...\n</code></pre>\n\n<p>In each of these sections, you define what are the files and the order of them:</p>\n<pre><code class=\"language-ini\">[intro]\n-: README\n-: installation\n-: getting_started\n-: roadmap\n</code></pre>\n\n<p>Files are using Markdown syntax so their name must end with <code>.md</code> extension but since we know that, you do not need to put extension in the <code>TOC.ini</code> file at all.</p>\n\n<p>:exclamation: :exclamation: :exclamation:</p>\n\n<ul>\n<li>Every section must at least have one key.</li>\n<li>Every first key in a section is corresponding to the information of the direcetory.</li>\n<li>This file itself will not be shown as a document page, but for the direcetory. For example, <a href=\"../intro\">Introduction</a>.</li>\n<li>The name of first key can be anything, but the convention is using <code>README</code>, and <code>README.md</code> as file name.</li>\n</ul>\n\n<h2>Localization</h2>\n\n<p>In the repository root directory, every supported language should have a directory with corresponding <a href=\"https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx\">Language Culture Name</a>.</p>\n\n<p>By default, Peach supports English (<code>en-US</code>) and Simplified Chinese (<code>zh-CN</code>), so Peach has two directories as follows:</p>\n<pre><code class=\"language-sh\">$ tree\n.\n├── en-US\n│   ├── ...\n└── zh-CN\n│   ├── ...\n</code></pre>\n\n<p>And of course, both of these two directories have exactly the same structure and files&rsquo; name.</p>\n\n<h2>Document</h2>\n\n<p>Every file must have definition information of itself at the very beginning, real content follows afterwards:</p>\n<pre><code>---\nname: Introduction\n---\n\n# Peach\n\nPeach is a web server for multi-language, real-time synchronization and searchable documentation.\n...\n</code></pre>\n\n<p>In case you only need to define information of a directory, but there is no content for it, you can skip the content:</p>\n<pre><code>---\nname: Advanced\n---\n</code></pre>\n\n<h2>Links</h2>\n\n<p>Rendering links in Peach is pretty much same as all the other places:</p>\n\n<ul>\n<li>Link to page in the same level: <code>[Webhook](webhook)</code>.</li>\n<li>Link to directory page: <code>[Introduction](../intro)</code>.</li>\n<li>Link to page in another directory: <code>[Getting Started](../intro/getting_started)</code>.</li>\n</ul>\n\n<h2>Images</h2>\n\n<p>By default, documentaion pages have a URL prefix <code>/docs</code>, and all your images must be put in a subdirectory of repository root directory named <code>images</code>.</p>\n\n<p>Then this is how you link a image: <code>![](/docs/images/github_webhook.png)</code>.</p>\n\n<h2>Configuration</h2>\n\n<p>All configuration changes must be made in file <code>custom/app.ini</code>.</p>\n\n<h3>Locales</h3>\n\n<p>By default, Peach supports English and Simplified Chinese, so if you&rsquo;re writing documentation for these two languages, you don&rsquo;t need to change settings in this part.</p>\n\n<p>But if you&rsquo;re just writing documentation in English, you would have to rewrite corresponding values:</p>\n<pre><code class=\"language-ini\">[i18n]\nLANGS = en-US\nNAMES = English\n</code></pre>\n\n<p>Or you&rsquo;re supporting more than two languages:</p>\n<pre><code class=\"language-ini\">[i18n]\nLANGS = en-US,zh-CN,fr-FR\nNAMES = English,简体中文,Français\n</code></pre>\n\n<p>Note that the first language, in both examples above, <code>en-US</code> will also be known as <strong>default language</strong>, any page that is not available in other languages, will present content in this language.</p>\n\n<h3>Git Repository</h3>\n\n<p>In production, you would use remote Git source as your documentation repository:</p>\n<pre><code class=\"language-ini\">RUN_MODE = prod\n\n[docs]\nTYPE = remote\nTARGET = https://github.com/Unknwon/peach-docs.git\n</code></pre>\n\n<p>So Peach knows where to fetch and update your documentation, and cache all documents.</p>\n\n<h2>Developing Locally</h2>\n\n<p>To make your life easier while you&rsquo;re developing your documentation locally, Peach also supports specify a local target path of your documentation repository:</p>\n<pre><code class=\"language-ini\">RUN_MODE = dev\n\n[docs]\nTYPE = local\nTARGET = ~unknwon/mydocs\n</code></pre>\n\n<p>In <code>dev</code> mode, Peach reloads your documents every time you refresh a page, so you can preview results instantly.</p>\n")