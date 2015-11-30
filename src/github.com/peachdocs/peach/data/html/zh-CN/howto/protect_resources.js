document.write("<h1>保护内部资源</h1>\n\n<p>:white_flower: 要求 Peach 版本不得低于 <strong>0.9.0</strong></p>\n\n<p>当有些内部资源需要限制访问时，可以对此类资源启用保护模式。</p>\n\n<p>那么，保护模式有什么用？</p>\n\n<ol>\n<li>基于 HTTP 基本授权进行认证</li>\n<li>用户定义一组授权用户和他们的密码</li>\n<li>用户定义一组受保护的资源以及允许访问的用户</li>\n</ol>\n\n<p>您可以通过在和 <code>TOC.ini</code> 文件的相同目录下创建 <code>protect.ini</code> 文件来启用保护模式。</p>\n\n<p>下面是一个示例文件：</p>\n<pre><code class=\"language-ini\">[user]\nuser1 = 5F4DCC3B5AA765D61D8327DEB882CF99\nuser2 = xxx\nuser3 = xxx\n\n[auth]\nhowto/documentation = user1,user2,user3\nhowto/webhook = user1,user2\nhowto/templates = user1\n</code></pre>\n\n<p>用户的密码必须经过 MD5 编码，多个用户之间需要使用逗号（<code>,</code>）分隔。</p>\n\n<p>同时，文档的 URL 不需要添加 <code>/docs/</code> 前缀。</p>\n\n<p>基于上面的文件，我们定义了 3 个授权用户和 3 个受保护的资源：</p>\n\n<ul>\n<li><code>user1</code> 可以访问所有资源。</li>\n<li><code>user2</code> 只能访问 <code>howto/documentation</code> 和 <code>howto/webhook</code>，尝试访问 <code>howto/templates</code> 将返回 <strong>403</strong> 错误。</li>\n<li><code>user3</code> 只能访问 <code>howto/documentation</code>，尝试访问 <code>howto/webhook</code> 和 <code>howto/templates</code> 将返回 <strong>403</strong> 错误。</li>\n<li>认证失败将返回 <strong>401</strong> 错误。</li>\n</ul>\n")