webpackJsonp([2],{176:function(e,t){e.exports=InsertLinkModal},23:function(e,t){e.exports=i18n},38:function(e,t){e.exports=Injector},943:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(23),r=n(a),l=i(96),o=n(l),d=i(0),s=n(d),u=i(26),c=n(u),m=i(11),f=n(m),p=i(176),g=i(38);o.default.addAction("sslink",{text:r.default._t("Admin.LINKLABEL_EMAIL","Link to email address"),onclick:function(e){return e.execCommand("sslinkemail")},priority:51}).addCommandWithUrlTest("sslinkemail",/^mailto:/);var k={init:function(e){e.addCommand("sslinkemail",function(){window.jQuery("#"+e.id).entwine("ss").openLinkEmailDialog()})}},h="insert-link__dialog-wrapper--email",_=(0,g.loadComponent)((0,p.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorEmailLink"));f.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkEmailDialog:function(){var t=e("#"+h);t.length||(t=e('<div id="'+h+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+h).entwine({renderModal:function(e){var t=this,i=function(){return t.close()},n=function(){return t.handleInsert.apply(t,arguments)},a=this.getOriginalAttributes(),l=tinymce.activeEditor.selection,o=l.getContent()||"",d=l.getNode().tagName,u="A"!==d&&""===o.trim();c.default.render(s.default.createElement(_,{show:e,onInsert:n,onHide:i,title:r.default._t("Admin.LINK_EMAIL","Insert email link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--email",fileAttributes:a,identifier:"Admin.InsertLinkEmailModal",requireLinkText:u}),this[0])},getOriginalAttributes:function(){var t=this.getElement().getEditor(),i=e(t.getSelectedNode()),n=(i.attr("href")||"").split("?"),a=n[0].replace(/^mailto:/,"").split("?")[0];a.match(/.+@.+\..+/)||(a="");var r=n[1]?n[1].match(/subject=([^&]+)/):"";return{Link:a,Subject:r?decodeURIComponent(r[1]):"",Description:i.attr("title")}},buildAttributes:function(e){var t=this._super(e),i="",n=t.href.replace(/^mailto:/,"").split("?")[0];return n.match(/.+@.+\..+/)||(n=""),n&&(i="mailto:"+n),i&&e.Subject&&(i=i+"?subject="+encodeURIComponent(e.Subject)),t.href=i,delete t.target,t}})}),tinymce.PluginManager.add("sslinkemail",function(e){return k.init(e)}),t.default=k},96:function(e,t){e.exports=TinyMCEActionRegistrar}},[943]);