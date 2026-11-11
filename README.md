# Dongyue Wang — Academic Homepage

可直接部署到 GitHub Pages 的完整静态主页。包含最新排版、头像、两篇论文及其配图、TuKA++ 项目与教育经历。

## 发布步骤

1. 登录 GitHub，确认自己的用户名（不是个人资料中填写的显示姓名）。
2. 创建公开仓库，名称必须是 `你的用户名.github.io`。
3. 解压压缩包，将其中的 `index.html`、`styles.css`、`script.js`、`assets` 文件夹和 `.nojekyll` 上传到仓库根目录。不要把 ZIP 本身上传，也不要在外面多套一层文件夹。
4. 提交到 `main` 分支。
5. 打开仓库 `Settings → Pages`。
6. `Source` 选择 `Deploy from a branch`；分支选 `main`，目录选 `/(root)`，点击 `Save`。
7. 等待 GitHub 完成发布；设置页会显示你的真实主页地址：`https://你的用户名.github.io/`。

如果仓库已存在，先检查和备份原内容，再合并这些文件。

## 文件说明

- `index.html`：个人介绍、研究方向、论文、项目和教育经历。
- `styles.css`：页面样式和手机适配。
- `script.js`：图片放大、导航和 BibTeX 交互。
- `assets/`：照片、论文配图、项目图和本地字体。
- `.nojekyll`：按普通静态文件发布。

所有显示资源均已包含在压缩包中，不需要安装 Node.js 或执行构建。

已移除原托管平台的域名元数据。确定最终网址后，可按需在 HTML 中补充该网址的 canonical 标签及绝对地址的 Open Graph 图片标签；不影响网页正常打开。

论文、项目与教育经历沿用已确认的主页内容；未重新加入中文姓名、中文介绍、GPA 或排名。

## 官方说明

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Lato 字体许可证：`assets/fonts/OFL.txt`。
