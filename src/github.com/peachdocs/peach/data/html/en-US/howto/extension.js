document.write("<h1>Use Extensions</h1>\n\n<h2>Search</h2>\n\n<p>Search extension is enabled by default, to disable it:</p>\n<pre><code class=\"language-ini\">[extension]\nENABLE_SEARCH = false\n</code></pre>\n\n<h2>Highlight JS</h2>\n\n<p>Highlight JS is enabled and can not be disabled, but you can customize the theme of it.</p>\n\n<p>For example, you want to use <code>zenburn</code> theme instead of default one.</p>\n\n<p>You first copy <code>zenburn.css</code> and put it into <code>custom/public/css</code> directory, then change setings in <code>custom/app.ini</code>:</p>\n<pre><code class=\"language-ini\">[extension]\nHIGHLIGHTJS_CUSTOM_CSS = /css/zenburn.css\n</code></pre>\n\n<h2>Edit Page</h2>\n\n<p>You can add a button which links to somewhere that people and edit and help improve the documentation.</p>\n\n<p>To use this extension, you should make corresponding changes of settings as follows:</p>\n<pre><code class=\"language-ini\">[extension]\nENABLE_EDIT_PAGE = true\nEDIT_PAGE_LINK_FORMAT = https://github.com/peachdocs/docs/blob/master/{lang}/{blob}\n</code></pre>\n\n<p>Don&rsquo;t forget to change to your repository link!</p>\n\n<p>:white_flower: If you&rsquo;re using Peach with version lower than <strong>0.7.0</strong>, and are using custom templates. Please add following content right before <code>{{Content|safe}}</code> in template file <code>docs.html</code>:</p>\n<pre><code class=\"language-django\">{% if Extension.EnableEditPage %}\n    &lt;a class=&quot;ui blue button&quot; id=&quot;edit_page&quot; href=&quot;{{EditPageLink}}&quot;&gt;{{Tr(Lang, &quot;docs.edit_page&quot;)}}&lt;/a&gt;\n{% endif %}\n</code></pre>\n\n<h2>Disqus</h2>\n\n<p>To use Disqus extension, you should add a site on <a href=\"https://disqus.com/\">Disqus</a> first, then make corresponding changes of settings:</p>\n<pre><code class=\"language-ini\">[extension]\nENABLE_DISQUS = true\nDISQUS_SHORT_NAME = mypeach\n</code></pre>\n\n<h2>DuoShuo</h2>\n\n<p>:white_flower: Requires Peach version <strong>0.7.1</strong></p>\n\n<p>To use DuoShuo extension, you should add a site on <a href=\"http://duoshuo.com/\">DuoShuo</a> first, then make corresponding changes of settings:</p>\n<pre><code class=\"language-ini\">[extension]\nENABLE_DUOSHUO = true\nDUOSHUO_SHORT_NAME = mypeach\n</code></pre>\n\n<h2>Google Analytics</h2>\n\n<p>To use Google Analytics extension, you should add a profile on <a href=\"http://www.google.com/analytics/\">Google Analytics</a> first, then make corresponding changes of settings:</p>\n<pre><code class=\"language-ini\">GA_BLOCK = &quot;&quot;&quot;&lt;script&gt;\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n  ga('create', 'UA-xxxxxxxx-y', 'auto');\n  ga('send', 'pageview');\n&lt;/script&gt;&quot;&quot;&quot;\n</code></pre>\n\n<hr />\n\n<p>As always, you can hack on corresponding <code>.html</code> template files to use and add more extensions.</p>\n")