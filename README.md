# README

## Getting Started

1. gitlab components group下新建一个git空项目。拉取到本地。
2. http://gitlab.dc.apin.com/components/components-scaffold下载脚手架，解压到步骤1的目录
3. npm install安装依赖。
4. npm start启动调试服务器。
5. 进行组件开发。

## 工具脚手架结构目录说明 

- config ```配置文件
  - ...files
- public ```默认输出目录
  - ...files
- script```静态服务期脚本等
  - ...files
- src ```组件源码（开发目录）
  - App.less ```组件样式
  - App.js ```组件源码 
  - index.js ```打包入口文件
- demo ```组件样例 
  - demo.js ```组件样例源码


## 开发说明

1.采用组件组合的开发方式，每个组件实现单一的功能，使组件运用起来更加灵活。组件组合的最小颗粒为antd的成熟组件。   

2.App.js实为最终成果。项目使用中引入的实为App.js。   

3.本脚手架已引入了lodash库，开发过程中尽量使用lodash以达到规范代码的目的。    

4.组件样式采用less，编写样式请使用css modules。   

5.组件必须有必要的注释、简明扼要的使用demo。   

6.所有组件完成后通知库管理员，由管理员更新组件配置文件（若干组件git地址）后，通过命令将组件批量以subtree的形势引进COMPONENTS项目，实现单独开发、统一管理。（http://gitlab.dc.apin.com/components/components）。


## 使用说明

1.项目开发中将componments项目以submodule形式引入。（http://gitlab.dc.apin.com/components/components）   

2.components必须在项目打包范围。   

3.相对路径import对应组件目录的App.js。 eg:import App from '../components/apin-button/src/App'   

4.components内组件源码不能直接修改。   




## bug修复或更新流程

如果在使用过程发现了bug。   

1.通知库管理员，向其提交bug场景说明。   

2.库管理员通知具体组件维护人员开始修复。   

3.新建 fix-日期 分支重现bug，调试修复。   

4.修复后合并到master，并通知管理员。   

5.管理员运行命令更新subtree，并对更新做记录。   

6.在建项目中更新components的submodule。   



