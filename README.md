# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/thelebrc/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/thelebrc/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image that sums up the world news of **Friday 20 November 2026**, drawn as a newspaper front page: a masthead naming the day, and six stories, each clear from its own picture and a short label.

This is the second version, rebuilt from the full day's news and resubmitted on 21 November 2026 (the first version, submitted on the morning of 20 November, used only the morning's news).

1. **Kyiv — Russia's biggest barrage.** More than 400 drones and 110 missiles overnight, at least 8 killed; three Dnipro bridges and railway infrastructure hit, and Russian missiles crossed into Poland. (Reuters / AP)
2. **Shenzhen — First-ever G3 summit.** Trump, Xi and Putin meet at APEC; joint statement that a nuclear war cannot be won and must never be fought. (WSJ / CNN)
3. **Riyadh — Missile hits PIF Tower.** A suspected Houthi missile strikes the 80-storey PIF Tower, blowing out windows across 7–8 floors, no injuries; the second financial-district landmark hit in under two weeks. (Reuters)
4. **Washington — Iran war: $48.3bn.** Pentagon tells Congress the war has cost $48.3 billion as of 13 November, excluding base damage; Trump says no rush on a new strike, decision waits until 2027. (AP / Reuters)
5. **Entertainment — GTA 6: $3.79bn in one day.** Take-Two/Rockstar's official day-one figure, with 32.5 million pre-release copies — the biggest entertainment launch in history. (Take-Two / Business Wire)
6. **Space — Voyager 1: one light-day.** The first human-made object to reach one light-day from Earth, 16.1 billion miles out. (NASA)

Every visual is drawn by hand in code — shapes and typography only, no photographs or borrowed artwork. The page was built as `news.html` (inline SVG pictograms) and rendered to `entry.png` (1024×1024) with headless Chrome. `main.ts` copies that PNG to the output directory; the same bytes are produced on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=9kvxjmym&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
