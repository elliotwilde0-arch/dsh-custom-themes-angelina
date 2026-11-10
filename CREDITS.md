# 素材与致谢 · Credits

本仓库是 [Sparrived/dsh-custom-theme](https://github.com/Sparrived/dsh-custom-theme) 的个人定制分支，保留上游全部代码与 MIT 许可，只扩了主题清单、加了背景图自动写入，并换入本机使用的调色板。

## 代码

- 上游：`dsh-custom-theme` 0.8.0，作者 Sparrived，MIT 许可。
- 本分支改动（见 `git log`）：`src/themes.mjs` 的主题清单、`src/index.mjs` 与 `src/backgrounds/index.mjs` 的背景写入、新增的 `src/host/backgrounds-store.mjs`。其余代码与上游一致。

## 主题

- `angelina.css`（暮色天台 Dusk Rooftop）：本分支作者原创，取色自自摄背景图 `angelina-light-hero.webp`。
- `claude.css`、`gov.css`、`monokai-pro.css`、`one-dark.css`：上游四套主题，本分支在末尾追加了 `<DSH-HEADER-GLASS>` 磨砂粘性页头补丁。
- 其余 21 套（`bie-agi`、`dalao`、`deepseek-nv`、`deepseek-nv-q`、`deepseek-qingchun`、`deepspace-dark`、`deepspace-light`、`dragonball-nimbus`、`dragonball-saiyan`、`fengge`、`genshin-dark`、`genshin-light`、`liangsheng`、`miku`、`naruto-naruto`、`naruto-sasuke`、`neice-dalao`、`qq-2007`、`qq-2008`、`waves-1`、`waves-2`）：移植自 [HeiGeAi/deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin)（MIT），由多文件数据源改写为单文件、自包含的调色板，并追加同一页头补丁。移植稿的著作权归原作者。

## 背景图

- `backgrounds/angelina-light-hero.webp`：本分支作者自制。
- `backgrounds/` 下其余 19 张随上述皮肤包分发，版权归原作者。

若你是上述素材的权利人且不希望它出现在本仓库，请开 issue，作者会删除。
