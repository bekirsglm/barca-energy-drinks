import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("keeps Turkish defaults and language metadata wired to the toggle", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /title:\s*"Barça Energy — Gücü Hisset"/);
  assert.match(layout, /description:\s*"FC Barcelona'nın resmi enerji içeceği\. Üç iddialı aroma, tek ikonik arma\."/);
  assert.match(layout, /<html lang="tr"/);
  assert.match(page, /document\.documentElement\.lang=language/);
  assert.match(page, /document\.title=t\.title/);
  assert.match(page, /meta\[name="description"\]/);
  assert.match(page, /languageLabel:"Dil seçimi"/);
  assert.match(page, /languageLabel:"Language selection"/);
  assert.match(page, /alt:\{brand:"Barça Energy", cans:"Barça Energy kutuları"/);
  assert.match(page, /alt:\{brand:"Barça Energy", cans:"Barça Energy cans"/);
  assert.doesNotMatch(page, /href="\/tr"|href="\/en"|hreflang/i);
});

test("keeps requested footer links and SVG-only inline icons", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /mailto:info@agaoglu\.net/);
  assert.match(page, /INFO@AGAOGLU\.NET/);
  assert.match(page, /https:\/\/www\.m19digital\.com/);
  assert.match(page, /Developed by M19 Digital/);
  assert.match(page, /const ArrowDownRight=\(\)=> <svg/);
  assert.match(page, /const ArrowUpRight=\(\)=> <svg/);
  assert.match(page, /const ArrowDown=\(\)=> <svg/);
  assert.doesNotMatch(page, /↗|↘|↓/);
  assert.match(css, /developerCredit:hover\{color:#0140E0\}/);
});

test("build output and public assets are present for Vercel", async () => {
  await Promise.all([
    access(new URL("../.next/BUILD_ID", import.meta.url)),
    access(new URL("../public/assets/cans.jpeg", import.meta.url)),
    access(new URL("../public/assets/team-hero.png", import.meta.url)),
    access(new URL("../public/assets/watch.jpeg", import.meta.url)),
    access(new URL("../public/favicon.svg", import.meta.url)),
  ]);
});
