# 素材与致谢 · Credits

本仓库是 [Sparrived/dsh-custom-theme](https://github.com/Sparrived/dsh-custom-theme) 的个人定制分支，保留上游全部代码与 MIT 许可，只扩了主题清单、加了背景图自动写入，并换入本机使用的调色板。

## 代码

- 上游：`dsh-custom-theme` 0.8.0，作者 Sparrived，MIT 许可。
- 本分支改动（见 `git log`）：`src/themes.mjs` 的主题清单、`src/index.mjs` 与 `src/backgrounds/index.mjs` 的背景写入、`src/host/backgrounds-store.mjs` 的 `seedBackgrounds`、`src/client/theme/backgrounds.cjs` 与设置页的「跟随主题」联动。其余代码与上游一致。

## 主题

- `angelina.css`（暮色天台 Dusk Rooftop）：配色由本分支作者自行编写（从下方那张背景图上取色），**不是**上游或第三方主题代码的副本。
- `claude.css`、`gov.css`、`monokai-pro.css`、`one-dark.css`：上游四套主题，本分支在末尾追加了 `<DSH-HEADER-GLASS>` 磨砂粘性页头补丁。
- 其余 21 套（`bie-agi`、`dalao`、`deepseek-nv`、`deepseek-nv-q`、`deepseek-qingchun`、`deepspace-dark`、`deepspace-light`、`dragonball-nimbus`、`dragonball-saiyan`、`fengge`、`genshin-dark`、`genshin-light`、`liangsheng`、`miku`、`naruto-naruto`、`naruto-sasuke`、`neice-dalao`、`qq-2007`、`qq-2008`、`waves-1`、`waves-2`）：移植自 [HeiGeAi/deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin)（MIT），由多文件数据源改写为单文件、自包含的调色板，并追加同一页头补丁。移植稿的著作权归原作者。

## 背景图

- `backgrounds/angelina-light-hero.webp`：**非本仓库原创**，取自 [bilbillm/deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) 的 [`src/assets/angelina-light-hero.webp`](https://github.com/bilbillm/deepseek-harness-angelina-themes/blob/main/src/assets/angelina-light-hero.webp)，与本仓库中的文件字节完全一致（SHA256 `052FE3CE7291B06FD1EA65759EA0F483BE8613A4EAA6E4C2FDB8BF20E7B88C6C`）。
  - 该项目在 [ASSET-PROVENANCE.md](https://github.com/bilbillm/deepseek-harness-angelina-themes/blob/main/ASSET-PROVENANCE.md) 中说明，这张图源自 [bilbillm/Codex-Angelina-Themes](https://github.com/bilbillm/Codex-Angelina-Themes) 的 “Angelina Gravity Field” Codex 主题包。
  - 角色形象为《明日方舟》的安洁莉娜，属于**非官方同人素材**；该项目在 [THIRD-PARTY-NOTICES.md](https://github.com/bilbillm/deepseek-harness-angelina-themes/blob/main/THIRD-PARTY-NOTICES.md) 中明确：其 MIT 许可只覆盖代码、token 元数据与构建脚本，**不覆盖图片、角色、商标或参考美术作品**。
  - 本仓库仅出于个人自用目的原样收录这张图，不主张任何著作权；再分发或商业使用前，请自行确认适用授权。
- `backgrounds/` 下其余 19 张随上述移植皮肤包分发，版权归原作者。

## 版权与免责

- 本项目是独立的社区插件分支，与 DeepSeek、deepseek-harness、鹰角网络、悠星及《明日方舟》官方均无隶属、授权或赞助关系。
- 本仓库的 MIT 许可覆盖的是代码；上述图片、角色与美术素材不在授权范围内，其权利仍归各自权利人。
- 若你是上述素材的权利人且不希望它出现在本仓库，请开 issue，作者会立即删除。
