---
layout: docs.html
title: Colors
section: elements
---
<div class="d-swatches">
  {{#each colors}}
    {{#each this}}
      <h2>{{@key}}</h2>
      <ul class="pe-list pe-list--inline">
        {{#each this}}
          <li class="d-swatch__container">
            <div class="d-swatch__swatch d-swatch__swatch--{{color}}"></div>
            <div class="pe-label pe-label--bold">{{heading}}</div>
          </li>
        {{/each}}
      </ul>
    {{/each}}
  {{/each}}
</div>
