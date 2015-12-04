---
layout: docs.html
title: Forms
section: elements
---

{{#demo}}
<form class="pe-form">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Name">

  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Email">

  <label for="password">Password</label>
  <input type="password" id="password" name="password" placeholder="Password">

  <label for="select">Choose an option</label>
  <select id="select" name="select">
    <option value="one" selected>One</option> 
    <option value="two">Two</option>
    <option value="three">Three</option>
  </select>

  <label for="multiselect">Choose one or more options</label>
  <select id="multiselect" name="multiselect" multiple>
    <option value="one" selected>One</option> 
    <option value="two">Two</option>
    <option value="three">Three</option>
  </select>

  <fieldset>
    <legend>Radio input</legend>
    <input type="radio" name="radio" id="radio-opt-1" value="one" />
    <label for="radio-opt-1">One</label>
    <input type="radio" name="radio" id="radio-opt-2" value="two" />
    <label for="radio-opt-2">Two</label>
    <input type="radio" name="radio" id="radio-opt-3" value="one" />
    <label for="radio-opt-3">Three</label>
  </fieldset>

  <label><input type="checkbox" id="checkbox1" value="checkbox1"> Do it</label>

  <button type="submit" class="pe-btn pe-btn--primary">Submit</button>
</form>
{{/demo}}

## Search

{{#demo}}
<input type="search" placeholder="Find stuff">
{{/demo}}
