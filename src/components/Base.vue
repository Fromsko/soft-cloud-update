<template>
  <div>
    <header class="site-header">
      <nav class="nav_jsxs">
        <img class="logo_jsxs" style="float: left" />
        <router-link to="/Login">登录</router-link>
        <router-link to="/About">关于</router-link>
      </nav>
      <div class="box-text">
        <h1>Fromkso 软件库</h1>
        <p>
          第三方验证对接、云更新、软件库<br />
          <span class="package-amount"
            >共收录了 <strong> 0 </strong>个软件
          </span>
        </p>
        <!-- 搜索框 -->
        <div class="search-warper">
          <div class="form-group">
            <el-input
              placeholder="搜索需要的工具"
              spellcheck="false"
              v-model="searchQuery"
              style="width: 240px"
              clearable
            ></el-input>
          </div>
        </div>
      </div>
    </header>
    <!-- <div class="card-list">
      <Card
        v-for="api in filteredApis"
        :key="api.id"
        :title="api.title"
        :description="api.description"
        :calls="api.calls"
      />
    </div> -->

    <section class="content content-boxed">
      <p class="p-jsxs">拒绝流量劫持，全面使用 HTTPS！</p>
      <div class="row row_jsxs" id="listApi">
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/itad.html"
          >
            <div class="ribbon-box font-w600">6650205</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · IP地址查询</div>
              <p class="text-muted">查询IP地址的归属地</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/word/bing/tu.html"
          >
            <div class="ribbon-box font-w600">660319</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · Bing每日一图</div>
              <p class="text-muted">Bing每日一图</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/bay.html"
          >
            <div class="ribbon-box font-w600">282586</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 一个答案</div>
              <p class="text-muted">当你不知道该怎么下决定不如问问我的意见</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/girl.html"
          >
            <div class="ribbon-box font-w600">217490</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机美女图片</div>
              <p class="text-muted">随机高清美女图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/moyu.html"
          >
            <div class="ribbon-box font-w600">167732</div>
            <div class="block-content">
              <div class="h4 push-5">资讯 · 摸鱼日报</div>
              <p class="text-muted">每日摸鱼日报</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/phone.html"
          >
            <div class="ribbon-box font-w600">108514</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 手机号归属地查询</div>
              <p class="text-muted">查询手机号归属地</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/60s.html"
          >
            <div class="ribbon-box font-w600">105427</div>
            <div class="block-content">
              <div class="h4 push-5">资讯 · 60秒看世界</div>
              <p class="text-muted">每天60秒读懂世界</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/man.html"
          >
            <div class="ribbon-box font-w600">85839</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机动漫图片</div>
              <p class="text-muted">随机高清动漫图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/yiyan.html"
          >
            <div class="ribbon-box font-w600">72143</div>
            <div class="block-content">
              <div class="h4 push-5">语录 · 随机一言</div>
              <p class="text-muted">随机返回一条一言</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/music/lrc.html"
          >
            <div class="ribbon-box font-w600">71754</div>
            <div class="block-content">
              <div class="h4 push-5">音乐 · 歌词搜索</div>
              <p class="text-muted">音乐歌词搜索</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/baidu.html"
          >
            <div class="ribbon-box font-w600">57589</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 百度搜图</div>
              <p class="text-muted">百度官方搜图接口</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/eat.html"
          >
            <div class="ribbon-box font-w600">42022</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 今天吃什么</div>
              <p class="text-muted">今天吃什么</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/min.html"
          >
            <div class="ribbon-box font-w600">39961</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 违禁词、敏感词检测</div>
              <p class="text-muted">
                用于检测文本中存在的敏感词、违禁词，结果仅供参考
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/fanyi.html"
          >
            <div class="ribbon-box font-w600">39225</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · Bing翻译</div>
              <p class="text-muted">Bing在线翻译接口</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/word/bing.html"
          >
            <div class="ribbon-box font-w600">38867</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · Bing联想词</div>
              <p class="text-muted">
                输入关键字，自动补全内容，可以用于搜索内容、对话的补全
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/rand.html"
          >
            <div class="ribbon-box font-w600">35709</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 男女生头像</div>
              <p class="text-muted">随机男女生头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/boy.html"
          >
            <div class="ribbon-box font-w600">34929</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机帅哥图片</div>
              <p class="text-muted">随机高清帅哥图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/wnl.html"
          >
            <div class="ribbon-box font-w600">30198</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 万年历</div>
              <p class="text-muted">每日万年历</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/music/wy/rand.html"
          >
            <div class="ribbon-box font-w600">29305</div>
            <div class="block-content">
              <div class="h4 push-5">音乐 · 随机网易云歌单</div>
              <p class="text-muted">随机读取网易云歌单中的一首歌曲</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/sogo.html"
          >
            <div class="ribbon-box font-w600">28511</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 搜狗搜图</div>
              <p class="text-muted">搜狗官方搜图接口</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/draw.html"
          >
            <div class="ribbon-box font-w600">28010</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 运势抽签</div>
              <p class="text-muted">
                随机抽签，然后根据抽到的内容解签，测测运势
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/icp.html"
          >
            <div class="ribbon-box font-w600">27123</div>
            <div class="block-content">
              <div class="h4 push-5">站长 · 网站ICP备案查询</div>
              <p class="text-muted">通过二级域名来查询备案信息</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/chat/glm.html"
          >
            <div class="ribbon-box font-w600">26235</div>
            <div class="block-content">
              <div class="h4 push-5">ChatGLM</div>
              <p class="text-muted">ChatGLM Turbo</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/kuaidi.html"
          >
            <div class="ribbon-box font-w600">25891</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 全国快递物流查询</div>
              <p class="text-muted">全国快递物流查询</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/ming.html"
          >
            <div class="ribbon-box font-w600">25123</div>
            <div class="block-content">
              <div class="h4 push-5">语录 · 名人名言</div>
              <p class="text-muted">随机返回一条名人名言</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/360.html"
          >
            <div class="ribbon-box font-w600">24912</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 360搜图</div>
              <p class="text-muted">360官方搜图接口</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/xingzuo.html"
          >
            <div class="ribbon-box font-w600">22758</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 星座运势</div>
              <p class="text-muted">今日的星座运势</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/word/baidu.html"
          >
            <div class="ribbon-box font-w600">20590</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 百度联想词</div>
              <p class="text-muted">
                输入关键字，自动补全内容，可以用于搜索内容、对话的补全
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/hot.html"
          >
            <div class="ribbon-box font-w600">19798</div>
            <div class="block-content">
              <div class="h4 push-5">资讯 · 三合一热搜榜</div>
              <p class="text-muted">知乎热榜、百度热点、微博热搜</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/du.html"
          >
            <div class="ribbon-box font-w600">19338</div>
            <div class="block-content">
              <div class="h4 push-5">语录 · 毒鸡汤</div>
              <p class="text-muted">随机输出一条毒鸡汤</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/video/short.html"
          >
            <div class="ribbon-box font-w600">18728</div>
            <div class="block-content">
              <div class="h4 push-5">随机精选视频</div>
              <p class="text-muted">随机精选视频</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/video/girl.html"
          >
            <div class="ribbon-box font-w600">17917</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 随机美女视频</div>
              <p class="text-muted">随机美女视频</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/music/qq.html"
          >
            <div class="ribbon-box font-w600">17505</div>
            <div class="block-content">
              <div class="h4 push-5">音乐 · QQ音乐点歌</div>
              <p class="text-muted">QQ音乐点歌</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/pc.html"
          >
            <div class="ribbon-box font-w600">17370</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机电脑壁纸</div>
              <p class="text-muted">随机输出一张4k壁纸，输出信息为图片直链</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/tian.html"
          >
            <div class="ribbon-box font-w600">17268</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 天气查询</div>
              <p class="text-muted">
                用于查询某城市的天气<br />拥有非常全面的天气数据，可以根据IP查询
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/yuan.html"
          >
            <div class="ribbon-box font-w600">14435</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 原神图片</div>
              <p class="text-muted">随机原神图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/bilibili/video.html"
          >
            <div class="ribbon-box font-w600">14049</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · B站视频搜索</div>
              <p class="text-muted">哔哩哔哩视频搜索</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/dog.html"
          >
            <div class="ribbon-box font-w600">12460</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 狗屁不通文章生成</div>
              <p class="text-muted">生成一篇文章，水字数，如此简单</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/find.html"
          >
            <div class="ribbon-box font-w600">12350</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 文字找茬</div>
              <p class="text-muted">文字找茬</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/food.html"
          >
            <div class="ribbon-box font-w600">11186</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 食物热量查询</div>
              <p class="text-muted">食物热量查询，食物卡路里大全</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/plus/three.html"
          >
            <div class="ribbon-box font-w600">10919</div>
            <div class="block-content">
              <div class="h4 push-5">PLUS_THREE</div>
              <p class="text-muted">PLUS_THREE</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/rua.html"
          >
            <div class="ribbon-box font-w600">9917</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 摸头GIF(rua~)</div>
              <p class="text-muted">上传一个头像得到一个rua头像的GIF</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/today.html"
          >
            <div class="ribbon-box font-w600">9044</div>
            <div class="block-content">
              <div class="h4 push-5">资讯 · 历史上的今天</div>
              <p class="text-muted">看一看历史上的今天都发生了什么</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/dm.html"
          >
            <div class="ribbon-box font-w600">8400</div>
            <div class="block-content">
              <div class="h4 push-5">语录 · 动漫一言</div>
              <p class="text-muted">随机输出一条动漫一言</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/map/wy.html"
          >
            <div class="ribbon-box font-w600">8254</div>
            <div class="block-content">
              <div class="h4 push-5">图床 · 网易在线图床</div>
              <p class="text-muted">网易在线图床接口</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/qq.html"
          >
            <div class="ribbon-box font-w600">6965</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · QQ头像</div>
              <p class="text-muted">获取QQ的头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/daxue.html"
          >
            <div class="ribbon-box font-w600">6929</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 大学查询</div>
              <p class="text-muted">查询大学学校信息</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/rao.html"
          >
            <div class="ribbon-box font-w600">6511</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 绕口令</div>
              <p class="text-muted">嘿朋友，来段绕口令吗？</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/baike.html"
          >
            <div class="ribbon-box font-w600">6217</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 百度百科</div>
              <p class="text-muted">百度百科<br />一个接口形式的网络百科全书</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/mo.html"
          >
            <div class="ribbon-box font-w600">6121</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机手机壁纸</div>
              <p class="text-muted">随机输出一张4k壁纸，输出信息为图片直链</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/chat/xiaoi.html"
          >
            <div class="ribbon-box font-w600">5929</div>
            <div class="block-content">
              <div class="h4 push-5">AI · 小i智能聊天接口</div>
              <p class="text-muted">小i智能聊天接口</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/xian.html"
          >
            <div class="ribbon-box font-w600">5817</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 素描头像</div>
              <p class="text-muted">生成一张你的素描头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tw/auto.html"
          >
            <div class="ribbon-box font-w600">5313</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 图文自适应</div>
              <p class="text-muted">
                极简自适应图文，优化有换行符时也遵循预设宽度。
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/chat/quark.html"
          >
            <div class="ribbon-box font-w600">5163</div>
            <div class="block-content">
              <div class="h4 push-5">夸夸AI助手</div>
              <p class="text-muted">夸克AI聊天助手</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/tian/three.html"
          >
            <div class="ribbon-box font-w600">4763</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 三日天气</div>
              <p class="text-muted">用于查询某城市地区今天明天后天三天的天气</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/wpa.html"
          >
            <div class="ribbon-box font-w600">4162</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · QQ临时会话</div>
              <p class="text-muted">QQ临时会话，类似于直接跳转QQ在线咨询</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/video/boy.html"
          >
            <div class="ribbon-box font-w600">4160</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 随机帅哥视频</div>
              <p class="text-muted">随机帅哥视频</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/top/movie.html"
          >
            <div class="ribbon-box font-w600">4052</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 电影实时票房</div>
              <p class="text-muted">热播电影实时票房</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tw/qian.html"
          >
            <div class="ribbon-box font-w600">3560</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 艺术字签名</div>
              <p class="text-muted">艺术字签名设计</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/view.html"
          >
            <div class="ribbon-box font-w600">3540</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机风景图片</div>
              <p class="text-muted">随机高清风景图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/whois.html"
          >
            <div class="ribbon-box font-w600">3228</div>
            <div class="block-content">
              <div class="h4 push-5">站长 · Whois查询</div>
              <p class="text-muted">Whois查询工具</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/t/onip.html"
          >
            <div class="ribbon-box font-w600">2733</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 我的IP</div>
              <p class="text-muted">获取自己的公网IP</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/aiz.html"
          >
            <div class="ribbon-box font-w600">2691</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · AI图片</div>
              <p class="text-muted">随机AI图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/xian.html"
          >
            <div class="ribbon-box font-w600">2620</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 图片转线稿</div>
              <p class="text-muted">
                将一个图片还原为线稿，即黑白线条，图片大小不得超过2048kb
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/miyu.html"
          >
            <div class="ribbon-box font-w600">2238</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 谜语大全</div>
              <p class="text-muted">随机返回一条谜语和谜底</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/suck.html"
          >
            <div class="ribbon-box font-w600">2113</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 吸</div>
              <p class="text-muted">表情包吸头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/game.html"
          >
            <div class="ribbon-box font-w600">2066</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 游戏图片</div>
              <p class="text-muted">随机游戏图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/60s/new.html"
          >
            <div class="ribbon-box font-w600">2061</div>
            <div class="block-content">
              <div class="h4 push-5">资讯 · 60秒早报</div>
              <p class="text-muted">每天60秒早报</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/oil.html"
          >
            <div class="ribbon-box font-w600">2051</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 全国油价查询</div>
              <p class="text-muted">查询各省份的油价价格</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/music/wy/top.html"
          >
            <div class="ribbon-box font-w600">2025</div>
            <div class="block-content">
              <div class="h4 push-5">音乐 · 网易云音乐排行榜</div>
              <p class="text-muted">
                获取网易云音乐歌曲排行榜，包括原创榜，热歌榜，新歌榜，飙升榜，数据实时更新
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/jiakao.html"
          >
            <div class="ribbon-box font-w600">1976</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 驾考题库</div>
              <p class="text-muted">驾照考试题库，科目一和科目四2种</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/t/randkey.html"
          >
            <div class="ribbon-box font-w600">1912</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 随机密钥生成</div>
              <p class="text-muted">生成一串1-128数量的随机密钥</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/video/jx.html"
          >
            <div class="ribbon-box font-w600">1890</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 聚合解析</div>
              <p class="text-muted">全网聚合解析</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/video/douyin/yule.html"
          >
            <div class="ribbon-box font-w600">1671</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 抖音娱乐短视频</div>
              <p class="text-muted">抖音随机娱乐短视频</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/tiangou.html"
          >
            <div class="ribbon-box font-w600">1652</div>
            <div class="block-content">
              <div class="h4 push-5">语录 · 舔狗日记</div>
              <p class="text-muted">随机返回一篇舔狗日记</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/video/douyin/redian.html"
          >
            <div class="ribbon-box font-w600">1639</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 抖音热点短视频</div>
              <p class="text-muted">抖音随机热点短视频</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/gif/mdm.html"
          >
            <div class="ribbon-box font-w600">1617</div>
            <div class="block-content">
              <div class="h4 push-5">GIF · 马冬梅</div>
              <p class="text-muted">马冬梅表情包</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/car.html"
          >
            <div class="ribbon-box font-w600">1564</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机车图片</div>
              <p class="text-muted">随机高清车图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/pinyin.html"
          >
            <div class="ribbon-box font-w600">1549</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 字词拼音</div>
              <p class="text-muted">查询字词拼音</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/dns.html"
          >
            <div class="ribbon-box font-w600">1374</div>
            <div class="block-content">
              <div class="h4 push-5">站长 · 历史DNS查询</div>
              <p class="text-muted">查询：URL历史DNS记录 / IP历史绑定域名</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/lai.html"
          >
            <div class="ribbon-box font-w600">1348</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 七濑胡桃</div>
              <p class="text-muted">二次元七濑胡桃</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tw.html"
          >
            <div class="ribbon-box font-w600">1299</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 手写图文</div>
              <p class="text-muted">图文手写自适应</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/qpdh.html"
          >
            <div class="ribbon-box font-w600">1286</div>
            <div class="block-content">
              <div class="h4 push-5">语录 · 奇葩对话</div>
              <p class="text-muted">随机返回一段奇葩对话</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/zan.html"
          >
            <div class="ribbon-box font-w600">1210</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 点赞</div>
              <p class="text-muted">生成点赞表情包</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/s/zishu.html"
          >
            <div class="ribbon-box font-w600">1144</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 字数检测</div>
              <p class="text-muted">检测文本数字</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/top/tv.html"
          >
            <div class="ribbon-box font-w600">1077</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 电视剧实时票房</div>
              <p class="text-muted">热播电视剧实时票房</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/cat.html"
          >
            <div class="ribbon-box font-w600">1062</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 云吸猫</div>
              <p class="text-muted">高清云吸猫图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/guo.html"
          >
            <div class="ribbon-box font-w600">1058</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 国庆头像</div>
              <p class="text-muted">生成一个国庆风格头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/fanyi/qq.html"
          >
            <div class="ribbon-box font-w600">1015</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · QQ翻译</div>
              <p class="text-muted">QQ翻译</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/music/kg.html"
          >
            <div class="ribbon-box font-w600">1014</div>
            <div class="block-content">
              <div class="h4 push-5">音乐 · 酷狗音乐点歌</div>
              <p class="text-muted">酷狗音乐点歌</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/tightly.html"
          >
            <div class="ribbon-box font-w600">993</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 提</div>
              <p class="text-muted">表情包提头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/today/new.html"
          >
            <div class="ribbon-box font-w600">974</div>
            <div class="block-content">
              <div class="h4 push-5">资讯 · 历史上的今天资讯</div>
              <p class="text-muted">看一看历史上的今天都发生了什么</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/fox.html"
          >
            <div class="ribbon-box font-w600">961</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 小狐狸</div>
              <p class="text-muted">二次元小狐狸</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/pound.html"
          >
            <div class="ribbon-box font-w600">911</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 捶</div>
              <p class="text-muted">表情包捶头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/day.html"
          >
            <div class="ribbon-box font-w600">889</div>
            <div class="block-content">
              <div class="h4 push-5">语录 · 每日一句</div>
              <p class="text-muted">每日一句立志的话生活更无边</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/hytx.html"
          >
            <div class="ribbon-box font-w600">881</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 好运头像</div>
              <p class="text-muted">给你的头像加上一个很有个性的小框框</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/qq/card.html"
          >
            <div class="ribbon-box font-w600">849</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · QQ名片</div>
              <p class="text-muted">QQ名片生成</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/bankinfo.html"
          >
            <div class="ribbon-box font-w600">831</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 银行卡信息查询</div>
              <p class="text-muted">可以根据银行卡卡号获取对应的银行信息</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/aqi.html"
          >
            <div class="ribbon-box font-w600">768</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 空气吸收剂量率</div>
              <p class="text-muted">全国空气吸收剂量率</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/bilibili/upd.html"
          >
            <div class="ribbon-box font-w600">746</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · B站更新</div>
              <p class="text-muted">哔哩哔哩更新列表</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/size.html"
          >
            <div class="ribbon-box font-w600">732</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 图片取大小</div>
              <p class="text-muted">图片取大小</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/kfc.html"
          >
            <div class="ribbon-box font-w600">730</div>
            <div class="block-content">
              <div class="h4 push-5">文案 · 疯狂星期四</div>
              <p class="text-muted">随机返回一条疯狂星期四</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/swallow.html"
          >
            <div class="ribbon-box font-w600">724</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 可莉吃</div>
              <p class="text-muted">表情包可莉吃头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/yan/renjian.html"
          >
            <div class="ribbon-box font-w600">724</div>
            <div class="block-content">
              <div class="h4 push-5">文案 · 我在人间凑数的日子</div>
              <p class="text-muted">随机返回一条我在人间凑数的日子</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/chat/yuyin.html"
          >
            <div class="ribbon-box font-w600">697</div>
            <div class="block-content">
              <div class="h4 push-5">AI文字转语音</div>
              <p class="text-muted">将文字转为语音</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/lanzou.html"
          >
            <div class="ribbon-box font-w600">677</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 蓝奏云直链解析</div>
              <p class="text-muted">
                用于解析蓝奏网盘的分享链接，可以将文件的分享链接解析为文件直链，直链有效期较短，记得即时使用
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/fan.html"
          >
            <div class="ribbon-box font-w600">656</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 以图搜番</div>
              <p class="text-muted">根据图片搜番</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/hammer.html"
          >
            <div class="ribbon-box font-w600">616</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 敲</div>
              <p class="text-muted">表情包敲头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/roll.html"
          >
            <div class="ribbon-box font-w600">599</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 卷</div>
              <p class="text-muted">表情包卷头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/diu.html"
          >
            <div class="ribbon-box font-w600">589</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 丢</div>
              <p class="text-muted">表情包丢头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/bilibili/bv.html"
          >
            <div class="ribbon-box font-w600">555</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · B站视频信息</div>
              <p class="text-muted">哔哩哔哩视频信息查询</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/pat.html"
          >
            <div class="ribbon-box font-w600">553</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · pat</div>
              <p class="text-muted">表情包pat你的网友</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/doutu.html"
          >
            <div class="ribbon-box font-w600">545</div>
            <div class="block-content">
              <div class="h4 push-5">娱乐 · 斗图搜索</div>
              <p class="text-muted">搜斗图图片GIF、JPG等</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/mail/qq.html"
          >
            <div class="ribbon-box font-w600">533</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 发送QQ邮件</div>
              <p class="text-muted">QQ邮箱发送邮件，支持自定义昵称</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/zip.html"
          >
            <div class="ribbon-box font-w600">511</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · PNG|JPG|WEBP图片压缩</div>
              <p class="text-muted">
                图片有效期一分钟,支持JPG、PNG、WEBP,最大5M
              </p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/music/qq/vip.html"
          >
            <div class="ribbon-box font-w600">498</div>
            <div class="block-content">
              <div class="h4 push-5">音乐 · QQ音乐点歌（VIP）</div>
              <p class="text-muted">QQ音乐点歌（VIP）</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/garbage.html"
          >
            <div class="ribbon-box font-w600">494</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 躲</div>
              <p class="text-muted">表情包躲头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/map/free.html"
          >
            <div class="ribbon-box font-w600">488</div>
            <div class="block-content">
              <div class="h4 push-5">图床 · 图片中转站</div>
              <p class="text-muted">图片临时转为URL，不是永久存储</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/phone/saorao.html"
          >
            <div class="ribbon-box font-w600">475</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 骚扰手机号查询</div>
              <p class="text-muted">查询手机号是否是骚扰电话</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/dmoe.html"
          >
            <div class="ribbon-box font-w600">467</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 二次元头像</div>
              <p class="text-muted">随机二次元头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/escape.html"
          >
            <div class="ribbon-box font-w600">448</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 快逃</div>
              <p class="text-muted">表情包快逃头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/play.html"
          >
            <div class="ribbon-box font-w600">447</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · 挥</div>
              <p class="text-muted">表情包挥头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/Qrcode.html"
          >
            <div class="ribbon-box font-w600">438</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 二维码生成</div>
              <p class="text-muted">快速将URL或者文字生成二维码</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/yishu.html"
          >
            <div class="ribbon-box font-w600">409</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机艺术图片</div>
              <p class="text-muted">随机高清艺术图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/tu/idol.html"
          >
            <div class="ribbon-box font-w600">381</div>
            <div class="block-content">
              <div class="h4 push-5">图库 · 随机明星图片</div>
              <p class="text-muted">随机高清明星图片</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/face/kiss.html"
          >
            <div class="ribbon-box font-w600">377</div>
            <div class="block-content">
              <div class="h4 push-5">QQ表情包 · kiss</div>
              <p class="text-muted">表情包kiss头像</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/chepai.html"
          >
            <div class="ribbon-box font-w600">344</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 车牌归属地查询</div>
              <p class="text-muted">查询车牌所属地方</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/ping.html"
          >
            <div class="ribbon-box font-w600">280</div>
            <div class="block-content">
              <div class="h4 push-5">站长 · Ping测速</div>
              <p class="text-muted">测试网站的Ping延迟</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/morse.html"
          >
            <div class="ribbon-box font-w600">276</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 摩斯电码转换</div>
              <p class="text-muted">摩斯电码转换</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/wl/web.html"
          >
            <div class="ribbon-box font-w600">188</div>
            <div class="block-content">
              <div class="h4 push-5">站长 · 网页截图</div>
              <p class="text-muted">对网页进行截图</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/plus/one.html"
          >
            <div class="ribbon-box font-w600">117</div>
            <div class="block-content">
              <div class="h4 push-5">PLUS_ONE</div>
              <p class="text-muted">PLUS_ONE</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/plus/two.html"
          >
            <div class="ribbon-box font-w600">111</div>
            <div class="block-content">
              <div class="h4 push-5">PLUS_TWO</div>
              <p class="text-muted">PLUS_TWO</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/painting.html"
          >
            <div class="ribbon-box font-w600">62</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 头像转油画</div>
              <p class="text-muted">将头像转为油画风格</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/jiu.html"
          >
            <div class="ribbon-box font-w600">61</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 图片九宫格分割</div>
              <p class="text-muted">将图片分割成九宫格</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/jian.html"
          >
            <div class="ribbon-box font-w600">45</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 图片安全检测</div>
              <p class="text-muted">校验一张图片是否含有违法违规内容</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/min/jian.html"
          >
            <div class="ribbon-box font-w600">37</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 文本安全检测</div>
              <p class="text-muted">检查一段文本是否含有违法违规内容</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/gaussian.html"
          >
            <div class="ribbon-box font-w600">33</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 图片高斯模糊</div>
              <p class="text-muted">图片高斯模糊转换</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/avath/heibai.html"
          >
            <div class="ribbon-box font-w600">31</div>
            <div class="block-content">
              <div class="h4 push-5">头像 · 黑白头像（玩笑要有度）</div>
              <p class="text-muted">将头像变成黑白头像~</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/fanyi/youdao.html"
          >
            <div class="ribbon-box font-w600">19</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 有道翻译</div>
              <p class="text-muted">有道在线翻译接口</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/painting.html"
          >
            <div class="ribbon-box font-w600">14</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 图片转油画</div>
              <p class="text-muted">将图片转为油画风格</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/img/heibai.html"
          >
            <div class="ribbon-box font-w600">12</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 图片黑白化</div>
              <p class="text-muted">将图片黑白化</p>
            </div>
          </a>
        </div>
        <div class="col-sm-4">
          <a
            target="_blank"
            class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
            href="/doc/query/fanyi/sogou.html"
          >
            <div class="ribbon-box font-w600">11</div>
            <div class="block-content">
              <div class="h4 push-5">工具 · 搜狗翻译</div>
              <p class="text-muted">搜狗在线翻译接口</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <footer>
      <br />
      <h2>我是底部!</h2>
    </footer>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      searchQuery: '',
      apis: [
        {
          id: 1,
          title: 'API 1',
          description: '这是 API 1 的描述',
          calls: 10,
        },
        {
          id: 2,
          title: 'API 2',
          description: '这是 API 2 的描述',
          calls: 5,
        },
        {
          id: 3,
          title: 'API 3',
          description: '这是 API 3 的描述',
          calls: 3,
        },
        // 添加更多的 API 数据...
      ],
    }
  },
  computed: {
    filteredApis() {
      return this.apis.filter((api) => api.title.includes(this.searchQuery))
    },
  },
}
</script>

<style>
/* .card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
} */

.rounded-input .el-input__inner {
  border-radius: 20px;
}
</style>
