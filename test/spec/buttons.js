describe('buttons', () => {

  afterEach(() => {
    fixture.cleanup();
  });

  beforeEach(() => {
    fixture.load('buttons/buttons.html');
  });

  describe('default', () => {

    it('should match the design spec for default button', () => {
      assertCssPropertiesAreEqual(getElementById('btn'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(248, 248, 248)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(208, 208, 208)'],
        ['border-right-color','rgb(208, 208, 208)'],
        ['border-bottom-color','rgb(208, 208, 208)'],
        ['border-left-color','rgb(208, 208, 208)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'none']
      ]);
    });

    it('should match the design spec when default button is focused', () => {
      assertCssPropertiesAreEqual(getElementById('btn').focus(), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(230, 230, 230)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(179, 179, 179)'],
        ['border-right-color','rgb(179, 179, 179)'],
        ['border-bottom-color','rgb(179, 179, 179)'],
        ['border-left-color','rgb(179, 179, 179)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });
  });

  describe('primary', () => {

    it('should match the design spec', () => {
      assertCssPropertiesAreEqual(getElementById('btn-primary'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(255, 255, 255)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(16, 122, 202)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(10, 77, 128)'],
        ['border-right-color','rgb(10, 77, 128)'],
        ['border-bottom-color','rgb(10, 77, 128)'],
        ['border-left-color','rgb(10, 77, 128)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when default button is focused', () => {
      let el = getElementById('btn-primary').focus();
      assertCssPropertiesAreEqual(el, [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(255, 255, 255)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(12, 93, 153)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(10, 77, 128)'],
        ['border-right-color','rgb(10, 77, 128)'],
        ['border-bottom-color','rgb(10, 77, 128)'],
        ['border-left-color','rgb(10, 77, 128)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'rgb(0, 0, 0)']
      ]);
    });*/
  });

  describe('link', () => {

    it('should match the design spec when styled as a link', () => {
      assertCssPropertiesAreEqual(getElementById('btn-link'), [
        ['padding',''],
        ['color', 'rgb(13, 101, 166)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'underline'],
        ['background-color','none'],
        ['border-width','0px'],
        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when styled as a focused link', () => {
      let el = getElementById('btn-link').focus();
      assertCssPropertiesAreEqual(el, [
        ['padding',''],
        ['color', 'rgb(9, 72, 119)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color','none'],
        ['border-width','0px'],
        ['box-shadow', 'none']
      ]);
    });*/
  });

  describe('fake-div', () => {

    it('should match the design spec when a div is styled as a button', () => {
      assertCssPropertiesAreEqual(getElementById('btn-div'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(248, 248, 248)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(208, 208, 208)'],
        ['border-right-color','rgb(208, 208, 208)'],
        ['border-bottom-color','rgb(208, 208, 208)'],
        ['border-left-color','rgb(208, 208, 208)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when a focused div is styled as a button', () => {
      let el = getElementById('btn-div').focus();
      assertCssPropertiesAreEqual(el, [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(230, 230, 230)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(179, 179, 179)'],
        ['border-right-color','rgb(179, 179, 179)'],
        ['border-bottom-color','rgb(179, 179, 179)'],
        ['border-left-color','rgb(179, 179, 179)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });*/
  });

  describe('fake-anchor', () => {

    it('should match the design spec when an anchor is styled as a button', () => {
      assertCssPropertiesAreEqual(getElementById('btn-anchor'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color','rgb(248, 248, 248)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(208, 208, 208)'],
        ['border-right-color','rgb(208, 208, 208)'],
        ['border-bottom-color','rgb(208, 208, 208)'],
        ['border-left-color','rgb(208, 208, 208)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when a focused anchor is styled as a button', () => {
      let el = getElementById('btn-anchor').focus();
      assertCssPropertiesAreEqual(el, [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color','rgb(230, 230, 230)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(179, 179, 179)'],
        ['border-right-color','rgb(179, 179, 179)'],
        ['border-bottom-color','rgb(179, 179, 179)'],
        ['border-left-color','rgb(179, 179, 179)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });*/
  });

  describe('fake-input', () => {

    it('should match the design spec when an input is styled as a button', () => {
      assertCssPropertiesAreEqual(getElementById('btn-input'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color','rgb(248, 248, 248)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(208, 208, 208)'],
        ['border-right-color','rgb(208, 208, 208)'],
        ['border-bottom-color','rgb(208, 208, 208)'],
        ['border-left-color','rgb(208, 208, 208)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when a focused input is styled as a button', () => {
      let el = getElementById('btn-input').focus();
      assertCssPropertiesAreEqual(el, [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(230, 230, 230)'],

        ['border-top-width','1px'],
        ['border-right-width','1px'],
        ['border-bottom-width','1px'],
        ['border-left-width','1px'],

        ['border-top-style','solid'],
        ['border-right-style','solid'],
        ['border-bottom-style','solid'],
        ['border-left-style','solid'],

        ['border-top-color','rgb(179, 179, 179)'],
        ['border-right-color','rgb(179, 179, 179)'],
        ['border-bottom-color','rgb(179, 179, 179)'],
        ['border-left-color','rgb(179, 179, 179)'],

        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-bottom-left-radius','3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });*/
  });

  describe('sizes', () => {

    it('should match the design spec when the button is small', () => {
      assertCssPropertiesAreEqual(getElementById('btn-small'), [
        ['height','24px'],
        ['padding-top','0px'],
        ['padding-right','9px'],
        ['padding-bottom','0px'],
        ['padding-left','9px'],
        //['font-size', ['13px', '13.008px']],
        ['font-size', '13px'],
        ['line-height', '24px']
      ]);
    });

    it('should match the design spec when the button is large', () => {
      assertCssPropertiesAreEqual(getElementById('btn-large'), [
        ['height','42px'],
        ['padding-top','0px'],
        ['padding-right','19px'],
        ['padding-bottom','0px'],
        ['padding-left','19px'],
        ['font-size', '16px'],
        ['line-height', '42px']
      ]);
    });
  });

  describe('disableds', () => {

    it('should match the design spec when the button is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-disabled'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(242, 242, 242)'],

        ['border-top-width','0px'],
        ['border-right-width','0px'],
        ['border-bottom-width','0px'],
        ['border-left-width','0px'],

        ['border-top-style','none'],
        ['border-right-style','none'],
        ['border-bottom-style','none'],
        ['border-left-style','none'],

        ['box-shadow', 'none']
      ]);
    });

    it('should match the design spec when the primary button is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-primary-disabled'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(255, 255, 255)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(157, 192, 219)'],
        ['border-width',''],
        ['border-color',''],
        ['box-shadow', 'none']
      ]);
    });

    it('should match the design spec when the link button is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-link-disabled'), [
        ['padding',''],
        ['color', 'rgb(157, 192, 219)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color','none'],
        ['border-width',''],
        ['box-shadow', 'none']
      ]);
    });
  });

  describe('fake-disableds', () => {

    it('should match the design spec when fake-button div is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-div-disabled'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(242, 242, 242)'],
        ['border-width',''],
        ['border-color',''],
        ['box-shadow', 'none']
      ]);
    });

    it('should match the design spec when fake-button anchor is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-anchor-disabled'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color','rgb(242, 242, 242)'],
        ['border-width',''],
        ['border-color',''],
        ['box-shadow', 'none']
      ]);
    });
    
    it('should match the design spec when fake-button input is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-input-disabled'), [
        ['height','28px'],
        ['padding-top','0px'],
        ['padding-right','11px'],
        ['padding-bottom','0px'],
        ['padding-left','11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color','rgb(242, 242, 242)'],
        ['border-width',''],
        ['border-color',''],
        ['box-shadow', 'none']
      ]);
    });
  });

  //Titles
  /*
  describe('titles', () => {

    beforeEach(() => {
      fixture.load('type/titles.html');
    });

    describe('sizes and height',() => {

      it('should match the design spec where it is a default title',() => {
        assertCssPropertiesAreEqual(getElementById('default-title'),[
          ['font-size','18px'],
          ['line-height','22px']
          ]);
      });
      
      it('should match the design spec where it is a large title',() => {
        assertCssPropertiesAreEqual(getElementById('large-title'),[
          ['font-size','20px'],
          ['line-height','24px']
          ]);
      });

      it('should match the design spec where it is a XLarge title',() => {
        assertCssPropertiesAreEqual(getElementById('XLarge-title'),[
          ['font-size','22px'],
          ['line-height','28px']
          ]);
      });
      //Tests to be added: for  @media (min-width)
    });
  });

  //Copy
  describe('copy',() => {

    beforeEach(() => {
      fixture.load('type/copy.html');
    });

    describe('copy',() => {

      it('should match the design spec where it is a copy',() => {
        assertCssPropertiesAreEqual(getElementById('copy'),[
          ['font-size','16px'],
          ['line-height','22px'],
          ['color','rgb(35, 31, 32)']
          ]);
      });
    });
  });

  //Lead
  describe('leads',() => {

    beforeEach(() => {
      fixture.load('type/lead.html');
    });

    describe('lead',() => {

      it('should match the design spec where it is a lead',() => {
        assertCssPropertiesAreEqual(getElementById('lead'),[
          ['font-size','18px'],
          ['line-height','24px'],
          ['color','rgb(35, 31, 32)'],
          ['font-weight','200']
          ]);
      });
      //Tests to be added: for  @media (min-width)
    });
  });
  

  //Inline Elements
  describe('inline elements',() => {

    beforeEach(() => {
      fixture.load('type/inline.html');
    });

    describe('mark',() => {

      it('should match the design spec where it is mark',() => {
        assertCssPropertiesAreEqual(getElementById('inline-mark'),[
          ['background-color','rgb(253, 236, 46)']
          ]);
      });
    });

    it('should match the design spec where it is subscript',() => {
      assertCssPropertiesAreEqual(getElementById('subscript'),[
        ['font-size',['14px','14.4px']],
        ['top',['3px','3.2px']],               
        ['position','relative']
        ]);
    });

    it('should match the design spec where it is superscript',() => {
      assertCssPropertiesAreEqual(getElementById('supscript'),[
        ['font-size',['14px','14.4px']],
        ['top',['-3px','-3.2px']],               
        ['position','relative']
        ]);
    });

    it('should match the design spec where it is abbr', () => {
      assertCssPropertiesAreEqual(getElementById('abbr'),[
        ['border-bottom-width','1px'],
        ['border-bottom-style','dotted']
        ]);
      });

    it('should match the design spec where it is strikethrough',() => {
       assertCssPropertiesAreEqual(getElementById('strikethrough'),[
        ['color','rgb(86, 86, 86)']
        ]);
    });

    it('should match the design spec where it is smallTag',() => {
      assertCssPropertiesAreEqual(getElementById('smallTag'),[
        ['font-size','16px']
        ]);
    });

    it('should match the design spec where it is timeTag',() => {
      assertCssPropertiesAreEqual(getElementById('timeTag'),[
        ['font-size','16px'],
        ['line-height','22px'],
        ['color','rgb(35, 31, 32)']
        ]);
    });

    it('should match the design spec where it is emTag',() => {
      assertCssPropertiesAreEqual(getElementById('emTag'),[
        ['font-style','italic'],
        ['font-size','16px'],
        ['line-height','22px'],
        ['color','rgb(35, 31, 32)']
        ]);
    });

    it('should match the design spec where it is iTag',() => {
      assertCssPropertiesAreEqual(getElementById('iTag'),[
        ['font-style','italic'],
        ['font-size','16px'],
        ['line-height','22px'],
        ['color','rgb(35, 31, 32)']
        ]);      
    });

    it('should match the design spec where it is bTag',() => {
      assertCssPropertiesAreEqual(getElementById('bTag'),[
        ['font-weight','bold'],        
        ]);      
    });

    it('should match the design spec where it is strongTag',() => {
      assertCssPropertiesAreEqual(getElementById('strongTag'),[
        ['font-weight','bold'],        
        ]);      
    });

    it('should match the design spec where it is delTag',() => {
      assertCssPropertiesAreEqual(getElementById('delTag'),[
        ['text-decoration','line-through'],        
        ]);      
    });
    
    it('should match the design spec where it is insTag',() => {
      assertCssPropertiesAreEqual(getElementById('insTag'),[
        ['text-decoration','underline'],           
        ]);      
    });

    it('should match the design spec where it is insTag: before',() => {
      //did not want to disturb the common library(assertCssPropertiesAreEqual)
      var symb = window.getComputedStyle(document.querySelector('ins'),':before').getPropertyValue('content');
      expect(symb).to.equal('\'+\'');
    });

    it('should match the design spec where it is insTag: after',() => {
      //did not want to disturb the common library(assertCssPropertiesAreEqual)
      var symb = window.getComputedStyle(document.querySelector('ins'),':after').getPropertyValue('content');
      expect(symb).to.equal('\'+\'');
    });

    it('should match the design spec where it is quote',() => {
      assertCssPropertiesAreEqual(getElementById('qTag'),[
        ['display','inline']
        ]);
    });
  });

  //Lists
  describe('lists',() => {

    beforeEach(() => {
      fixture.load('type/lists.html');
    });

    it('should match the design spec where it is unstyled lists',() => {
      assertCssPropertiesAreEqual(getElementById('unstyled-lists'),[
        ['padding-left','0px'],
        ['list-style-type','none']
        ]);
      });

    it('should match the design spec where it is nested unstyled lists',() => {
      assertCssPropertiesAreEqual(getElementById('nested-unstyled-lists'),[
        ['padding-left','0px'],
        ['list-style-type','none']
        ]);
      });

    it('should match the design spec where it is Inline lists',() => {
      assertCssPropertiesAreEqual(getElementById('inline-lists'),[
        ['padding-left','0px'],
        ['list-style-type','none'],
        ['margin-left','-5px']
        ]);      
      });
    //one more test to add for inline list pe-list--inline > li
  });

  //Code
  describe('code',() => {

    beforeEach(() => {
      fixture.load('type/code.html');
    });

    it('should match the design spec where it is inline code',() => {
      assertCssPropertiesAreEqual(getElementById('inline-code'),[
        ['color','rgb(84, 84, 84)'],
        ['font-size','16px'],
        ['font-family','\'Lucida Sans Typewriter\', \'Lucida Console\', monaco, \'Bitstream Vera Sans Mono\', monospace']
        ]);
      });

    it('should match the design spec where it is Block code',() => {
      assertCssPropertiesAreEqual(getElementById('block-code'),[
        ['display','block'],
        ['overflow-x','auto'],
        ['overflow-y','auto'],
        ['font-size','16px'],
        ['font-family','\'Lucida Sans Typewriter\', \'Lucida Console\', monaco, \'Bitstream Vera Sans Mono\', monospace']
        ]);
      });

    it('should match the design spec where it is user input',() => {
      assertCssPropertiesAreEqual(getElementById('user-input'),[
        ['background-color','rgb(51, 51, 51)'],
        ['color','rgb(255, 255, 255)'],
        ['border-bottom-left-radius','3px'],
        ['border-bottom-right-radius','3px'],
        ['border-top-left-radius','3px'],
        ['border-top-right-radius','3px'],
        ['box-sizing','border-box'],
        ['padding-bottom','2px'],
        ['padding-top','2px'],
        ['padding-left','4px'],
        ['padding-right','4px'],
        ['font-family','\'Lucida Sans Typewriter\', \'Lucida Console\', monaco, \'Bitstream Vera Sans Mono\', monospace']
        ]);
      });
  });*/
});
