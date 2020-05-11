# webpack-demos

# demo02 代码分离

**代码分离**

常用的代码分离方法有三种：

-  入口起点：使用 [`entry`](https://webpack.docschina.org/configuration/entry-context) 配置手动地分离代码。
-  防止重复：使用 [`SplitChunksPlugin`](https://webpack.docschina.org/plugins/split-chunks-plugin/) 去重和分离 chunk。
-  动态导入：通过模块中的内联函数调用来分离代码。

# demo03 动态导入 及 bundle 分析图

即 demo02 的动态引入方法

预取/预加载模块(prefetch/preload module)

`import(/* webpackPrefetch: true */ 'LoginModal');`

`import(/* webpackPreload: true */ 'ChartingLibrary');`

如果我们以分离代码作为开始，那么就应该以检查模块的输出结果作为结束，对其进行分析是很有用处的。[官方提供分析工具](https://github.com/webpack/analyse) 是一个好的初始选择。下面是一些可选择的社区支持(community-supported)工具：

-  [webpack-chart](https://alexkuz.github.io/webpack-chart/)：webpack stats 可交互饼图。
-  [webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/)：可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
-  [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)：一个 plugin 和 CLI 工具，它将 bundle 内容展示为便捷的、交互式、可缩放的树状图形式。
-  [webpack bundle optimize helper](https://webpack.jakoblind.no/optimize)：此工具会分析你的 bundle，并为你提供可操作的改进措施建议，以减少 bundle 体积大小。
