// ===== Config =====
const PROXY_URL = 'https://gemini-proxy.otto-mr.workers.dev';
const MODEL = 'gemini-2.0-flash';

// ===== Knowledge Base (System Prompt) =====
const SYSTEM_PROMPT = `你是「力曼新制度解讀小幫手」，專門協助力曼台灣獨立經銷商了解 2026 年 5 月起施行的新價格與獎勵制度。

回答時請使用繁體中文，語氣親切專業。若問題不在知識範圍內，請誠實告知並建議聯繫力曼客服。

---

## 知識庫一：新舊售價對照表（五月新制）

> 舊價格來源：產品價目表-260224.pdf（2026.02）
> 新價格來源：產品價目表-260313.pdf（2026.03）
> 五月起適用新售價

### 入會套組（僅限入會後30天內購買）
| 套組名稱 | 舊售價 | 舊SP | 舊BP | 新售價 | 新SP | 新BP |
|---|---|---|---|---|---|---|
| ICD全系列套組 | 優惠價55,800 | 1,500 | 1,150 | 優惠價55,800 | 1,500 | 1,150 |
| 內外亮采全系列套組 | 優惠價55,800 | 1,500 | 1,150 | 優惠價55,800 | 1,500 | 1,150 |
| 內外亮采基礎組 | 優惠價37,200 | 1,000 | 760 | 優惠價37,200 | 1,000 | 760 |
| ICD基礎組 | 優惠價18,800 | 500 | 380 | 優惠價18,800 | 500 | 380 |
| Lifening基礎套組 | 優惠價18,800 | 500 | 380 | 優惠價18,800 | 500 | 380 |

### ICD映皙美（售價均已調漲）
| 產品名稱 | 舊售價 | 舊SP | 舊BP | 新售價 | 新SP | 新BP | 漲幅 |
|---|---|---|---|---|---|---|---|
| 活妍專科保養組 | 2,980 | 81 | 63 | 3,280 | 89 | 60 | +300 |
| 活妍奇肌霜 | 1,980 | 54 | 42 | 2,190 | 59 | 40 | +210 |
| 淨膚卸妝油 | 990 | 27 | 21 | 1,290 | 32 | 21 | +300 |
| 活膚潔顏粉 | 990 | 27 | 21 | 1,190 | 32 | 21 | +200 |
| 平衡潔顏凝膠（新上市） | — | — | — | 960 | 26 | 17 | — |
| 舒緩平衡凝露 | 1,160 | 32 | 24 | 1,290 | 35 | 23 | +130 |
| 油水平衡噴霧 | 1,160 | 32 | 24 | 1,290 | 35 | 23 | +130 |
| 亮采全能精華棒 | 790 | 23 | 17 | 960 | 26 | 17 | +170 |
| 極效保濕防曬乳 SPF50+ | 830 | 23 | 18 | 960 | 26 | 17 | +130 |
| 光點100精華水（新上市） | — | — | — | 2,650 | 72 | 48 | — |
| 光點100精華（新上市） | — | — | — | 3,970 | 108 | 72 | — |
| 光點100乳霜（新上市） | — | — | — | 3,300 | 90 | 60 | — |
| 膠原100瞬透水面膜 | 1,980 | 54 | 42 | 2,280 | 62 | 41 | +300 |
| 水光潤唇釉 | 890 | 24 | 18 | 960 | 26 | 18 | +70 |
| 奶油柔潤唇彩（各色） | 890 | 24 | 18 | 960 | 26 | 18 | +70 |
| 奶油柔霧唇彩（各色） | 890 | 24 | 18 | 960 | 26 | 18 | +70 |
| 輕透光感BB霜 | 830 | 23 | 18 | 960 | 26 | 18 | +130 |
| 水光保濕氣墊粉餅 #21/#23 | 1,800 | 50 | 38 | 1,950 | 53 | 35 | +150 |
| 定妝噴霧 | 960 | 26 | 20 | 1,100 | 29 | 20 | +140 |

### 博萃瓶 BOTALAB
| 產品名稱 | 舊售價 | 舊SP | 舊BP | 新售價 | 新SP | 新BP | 漲幅 |
|---|---|---|---|---|---|---|---|
| 絲蔻植護洗髮露 | 1,090 | 29 | 22 | 1,220 | 33 | 22 | +130 |
| 絲蔻植護養髮液 | 890 | 23 | 18 | 1,000 | 26 | 18 | +110 |
| 絲蔻植護魔髮精油 | 1,160 | 30 | 23 | 1,290 | 33 | 23 | +130 |
| 秀魅淨潤沐浴露 | 990 | 26 | 20 | 1,160 | 31 | 20 | +170 |
| 秀魅柔潤身體乳 | 860 | 23 | 17 | 960 | 25 | 17 | +100 |
| 秀魅私密植淨慕斯 | 830 | 22 | 16 | 960 | 25 | 17 | +130（BP +1，唯一BP上漲） |

### 來沛寧 LIFENING
| 產品名稱 | 舊售價 | 舊SP | 舊BP | 新售價 | 新SP | 新BP | 漲幅 |
|---|---|---|---|---|---|---|---|
| 微分子膠原飲 | 2,980 | 77 | 60 | 3,280 | 85 | 59 | +300 |
| 活力超能飲 | 2,980 | 77 | 60 | 3,280 | 85 | 59 | +300 |
| 隨型手搖蛋白飲 | 3,490 | 89 | 70 | 3,840 | 99 | 59 | +350（BP降幅最大 -11） |

### 重點摘要
- SP：所有調價產品均同步提高
- BP：多數持平或微降；隨型手搖蛋白飲 BP 降幅最大（70→59，-11）；秀魅私密植淨慕斯是唯一 BP 上漲（+1）
- 新上市產品（平衡潔顏凝膠、光點100三件組）：直接採用新制 SP/BP，無舊版對照
- 入會套組：售價與 SP/BP 均無變動

---

## 知識庫二：2026年5月新獎勵制度

### 名詞解釋
- SP（Sales Points，銷售點數）：用來計算晉升位階、維持位階、獎金支付資格
- BP（Business Points，業績點數）：作為每月獎金計算的基準
- RP（Reward Points，回饋金）：每筆訂單未稅金額的5%，下次購物折抵用，每張訂單最高折抵 NT$500，30天後發放，90天內使用
- RD（RIMAN Dollar，力曼購物金）：力曼額外提供的福利，可買產品或輔銷品，一年內須使用
- 使用 RP 或 RD 折抵後，SP/BP 依實際支付金額等比例調整

### 會員制度
| 身份 | 升級條件（1年累積，不含稅運） | 回饋金 | 折扣優惠 |
|---|---|---|---|
| 會員 Customer | 不限 | 5% | — |
| 貴賓會員 VIP | NT$30,000 | 5% | 額外5% |
| 尊榮會員 VVIP | NT$90,000 | 5% | 額外10% |

### 七大位階與晉升條件
| 位階 | 晉升業績門檻（SP） | 生效方式 | 每月維持業績 |
|---|---|---|---|
| 獨立經銷商 P | — | 入會即可 | — |
| 經理 M | 近3月累積 3,000 SP | 即刻晉升 | — |
| 資深經理 SM | 近3月累積 6,000 SP | 即刻晉升 | — |
| 企業家 TL | 近5月累積 50,000 SP（下線至少30,000） + 3條資深經理線 | 次月1日 | 每月10,000 SP |
| 董事 D | 近6月組織 600,000 SP + 3條企業家線 | 次月1日 | 每月100,000 SP |
| 資深董事 SD | 當月組織 300,000 SP + 2條董事線 | 次月1日 | 每月300,000 SP |
| 全國董事 ND | 當月組織 500,000 SP + 4條董事線 | 次月1日 | 每月500,000 SP |

### 各位階獎金比例

**獨立經銷商（P）** — 無需70%銷售規則
- 銷售獎金：個人購貨5% BP；推薦會員購貨10% BP
- 分享獎金：第一代經銷商及其會員購貨5% BP
- 力曼購物金：個人購貨5%

**經理（M）** — 需70%規則 + 3個活躍會員
- 銷售獎金：個人購貨10% BP；推薦會員購貨20% BP
- 分享獎金：第一代經銷商10% BP；第一代經理5% BP
- 力曼購物金：個人購貨10%

**資深經理（SM）** — 需70%規則 + 3個活躍會員
- 銷售獎金：個人購貨12.5% BP；推薦會員購貨25% BP
- 分享獎金：第一代經銷商15% BP；第一代經理5% BP；第一代資深經理5% BP
- 團隊獎金：資深經理團隊無限代銷售業績5% BP（含本人）
- 力曼購物金：個人購貨12.5%

**企業家（TL）** — 需70%規則 + 5個活躍會員 + 每月10,000 SP
- 銷售獎金：個人購貨20% BP；推薦會員購貨40% BP
- 分享獎金：企業家團隊各位階無限代個人購貨5%~30%差額
- 輔導獎金：第1代企業家40%、第2代20%、第3代10%
- 力曼購物金：個人購貨20%
- 維持失敗（連續6個月不達10,000 SP）→ 降回資深經理
- 恢復企業家：自調整月起3個月內，累積25,000 SP（下線至少15,000）

**董事（D）** — 需70%規則 + 5個活躍會員 + 每月100,000 SP
- 銷售獎金：個人購貨20% BP；推薦會員購貨40% BP
- 分享獎金：組織各位階無限代5%~30%差額
- 董事領導獎金：董事組織銷售業績2%
- 董事紅利：第一代董事（含）以上組織業績1%
- 董事市場分紅：LAS 2點（提撥市場1%依LAS加權分配）
- 輔導獎金：第1代40%、第2代20%、第3代10%、第4代5%
- 維持失敗（連續6個月不達）→ 依實際業績調整；恢復需近3月達300,000 SP

**資深董事（SD）**
- 董事領導獎金：3%；董事市場分紅：LAS 3點
- 輔導獎金額外加第5代5%，其餘同董事

**全國董事（ND）**
- 董事領導獎金：4%；董事市場分紅：LAS 4點
- 輔導獎金同資深董事（含第5代5%）

### 銷售高手加碼獎金（全位階適用）
| 條件 | 獎金 |
|---|---|
| 活躍會員10人（含）以上 + 個人銷售業績2,000 SP（含）以上 | 5% BP（來自會員購貨） |
| 活躍會員20人（含）以上 + 個人銷售業績4,000 SP（含）以上 | 10% BP（來自會員購貨） |
注意：每位會員的業績最高以200 SP為上限計入。

### 晉升生效日
- 經銷商～資深經理：達成條件後**即刻晉升**
- 企業家及以上：**次月1日**生效
- 業績截止日：每月最後一天 太平洋時間（PST）23:59

### 活躍會員定義
您親自推薦的會員，在**當月內有購買力曼任一產品**（輔銷品除外）即算活躍會員。

### 70% 銷售規則
經理（含）以上位階領取獎金的前提條件，確保業績來自真實銷售。

### 定期購（Auto Shipment）
所有會員及經銷商可選擇1項或數項產品作為每月自動扣款訂單。`;

// ===== State =====
const history = []; // { role: 'user'|'model', parts: [{text}] }

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  appendMessage('assistant', '你好！我是力曼新制度解讀小幫手，專門解答關於五月調價與新獎勵制度的問題。\n\n有任何疑問歡迎直接問我，或點選下方常見問題快速提問。');
});

// ===== Suggestions =====
function askSuggestion(btn) {
  const text = btn.textContent;
  document.getElementById('suggestions').style.display = 'none';
  sendText(text);
}

// ===== Input =====
function handleKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function sendMessage() {
  const input = document.getElementById('input-box');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  input.style.height = 'auto';
  document.getElementById('suggestions').style.display = 'none';
  sendText(text);
}

// ===== Core Chat =====
async function sendText(text) {
  setLoading(true);
  appendMessage('user', text);

  history.push({ role: 'user', parts: [{ text }] });

  const typingId = appendTyping();

  try {
    const requestBody = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: history,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1500
      }
    };

    const response = await fetch(PROXY_URL, {
      method: 'POST',
      body: JSON.stringify({ model: MODEL, body: requestBody }),
      redirect: 'follow'
    });

    removeTyping(typingId);

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `API 錯誤 (${response.status})`);
    }

    const data = await response.json();

    if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!replyText) throw new Error('回應內容為空，請稍後再試。');

    history.push({ role: 'model', parts: [{ text: replyText }] });
    appendMessage('assistant', replyText);

  } catch (err) {
    removeTyping(typingId);
    appendMessage('assistant', `抱歉，發生了一點問題：${err.message}\n\n請稍後再試，或聯繫力曼客服 (02)2762-2588。`);
  }

  setLoading(false);
}

// ===== UI Helpers =====
function appendMessage(role, text) {
  const window = document.getElementById('chat-window');

  const msg = document.createElement('div');
  msg.className = `msg ${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = role === 'assistant' ? 'RM' : '我';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = formatText(text);

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  window.appendChild(msg);

  scrollToBottom();
  return msg;
}

function appendTyping() {
  const window = document.getElementById('chat-window');

  const id = 'typing-' + Date.now();
  const msg = document.createElement('div');
  msg.className = 'msg assistant';
  msg.id = id;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = 'RM';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  window.appendChild(msg);
  scrollToBottom();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function setLoading(isLoading) {
  document.getElementById('send-btn').disabled = isLoading;
  document.getElementById('input-box').disabled = isLoading;
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Simple text formatter: **bold**, line breaks, basic table detection
function formatText(text) {
  // Escape HTML
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Tables: detect markdown table blocks
  const tableRegex = /(\|.+\|\n)+/g;
  html = html.replace(tableRegex, (tableBlock) => {
    const rows = tableBlock.trim().split('\n').filter(r => r.trim());
    let tableHtml = '<table>';
    rows.forEach((row, i) => {
      if (/^\|[-| :]+\|$/.test(row)) return; // skip separator
      const cells = row.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      const tag = i === 0 ? 'th' : 'td';
      tableHtml += '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
    });
    tableHtml += '</table>';
    return tableHtml;
  });

  // Newlines
  html = html.replace(/\n/g, '<br>');

  return html;
}
