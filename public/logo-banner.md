<!--
  Шрифт: PT Sans Narrow (ParaType) — підключається автоматично через Google Fonts,
  спроєктований під впливом креслярських стандартів ГОСТ, тому близький за духом
  до технічного/конструкторського накреслення.

  Якщо хочете саме класичний креслярський шрифт ISOCPEUR (ISO 3098 / ГОСТ 2.304) —
  він вільно поширюваний (Autodesk, 1997), але не хоститься на Google Fonts.
  Встановіть ISOCPEUR.ttf у систему або покладіть файл поруч із цим .md
  і розкоментуйте @font-face нижче (працює лише в HTML-переглядачах,
  GitHub markdown вирізає <style>).
-->

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@700&display=swap');

/* @font-face {
  font-family: 'ISOCPEUR';
  src: url('ISOCPEUR.ttf') format('truetype');
} */

.dva-logo {
  text-align: center;
  font-family: 'PT Sans Narrow', 'ISOCPEUR', sans-serif;
  color: #3d4550;
  padding: 1.5rem 0;
  width: 100%;
}

.dva-wrap {
  display: block;
  width: 100%;
}

.dva-sub {
  font-size: 22px;
  letter-spacing: 0.5em;
  font-weight: 700;
  text-shadow: 2px 2px 0 #d9531e;
  white-space: nowrap;
  text-align: center;
}

.dva-divider {
  border: none;
  border-top: 4px solid #d9531e;
  width: 100%;
  margin: 10px 0;
  display: block;
}

.dva-main {
  font-size: 52px;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-shadow: 3px 3px 0 #d9531e;
  white-space: nowrap;
  text-align: center;
  margin-top: 3px;
}

.dva-accent {
  color: #d9531e;
  text-shadow: 3px 3px 0 #3d4550;
}
</style>

<div class="dva-logo">
  <div class="dva-wrap">
    <svg viewBox="0 0 1000 126" width="100%" height="auto" style="display:block; overflow:visible;" xmlns="http://www.w3.org/2000/svg">
      <!-- 1. TOP LINE (stretched 100% full width from 0 to 1000) -->
      <text x="2" y="25" textLength="996" lengthAdjust="spacing" fill="#d9531e" font-family="'PT Sans Narrow', 'ISOCPEUR', sans-serif" font-size="26px" font-weight="700">INZINIER - KONSTRUKTER</text>
      <text x="0" y="23" textLength="1000" lengthAdjust="spacing" fill="#3d4550" font-family="'PT Sans Narrow', 'ISOCPEUR', sans-serif" font-size="26px" font-weight="700">INZINIER - KONSTRUKTER</text>

      <!-- 2. DIVIDER LINE (stretched 100% full width from 0 to 1000) -->
      <rect x="0" y="36" width="1000" height="4.5" rx="1.5" fill="#d9531e"></rect>

      <!-- 3. BOTTOM LINE (stretched 100% full width from 0 to 1000) -->
      <text x="3" y="113" textLength="994" lengthAdjust="spacing" fill="#d9531e" font-family="'PT Sans Narrow', 'ISOCPEUR', sans-serif" font-size="72px" font-weight="700">VITALII <tspan fill="#3d4550">D</tspan>OLYNSKYI</text>
      <text x="0" y="110" textLength="1000" lengthAdjust="spacing" fill="#3d4550" font-family="'PT Sans Narrow', 'ISOCPEUR', sans-serif" font-size="72px" font-weight="700">VITALII <tspan fill="#d9531e">D</tspan>OLYNSKYI</text>
    </svg>
  </div>
</div>
