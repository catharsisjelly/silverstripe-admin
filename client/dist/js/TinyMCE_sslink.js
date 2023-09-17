!function(){"use strict";var t={265:function(t){t.exports=ShortcodeSerialiser},196:function(t){t.exports=TinyMCEActionRegistrar},754:function(t){t.exports=i18n},311:function(t){t.exports=jQuery}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}!function(){var t=r(n(196)),e=r(n(311)),i=n(265),o=r(n(754));function r(t){return t&&t.__esModule?t:{default:t}}const s={init(n){const i=navigator.platform.toUpperCase().includes("MAC")?"⌘":"Ctrl",r=o.default._t("Admin.INSERT_LINK","Insert link"),s=o.default.inject(o.default._t("Admin.INSERT_LINK_WITH_SHORTCUT","Insert link {shortcut}"),{shortcut:`[${i}+K]`}),l=t.default.getSortedActions("sslink",n.getParam("editorIdentifier"),!0).map((t=>Object.assign({},t,{onAction:()=>t.onAction(n)})));return n.ui.registry.addMenuButton("sslink",{icon:"link",tooltip:s,fetch:t=>t(l)}),n.ui.registry.addNestedMenuItem("sslink",{icon:"link",text:r,getSubmenuItems:()=>l}),n.addShortcut("Meta+k","Open link menu",(()=>{(0,e.default)(`[aria-label^="${r}"] > button`,n.container).first().click()})),n.ui.registry.addButton("sslink-edit",{text:o.default._t("Admin.EDIT_LINK","Edit link"),onAction:function(){const e=tinymce.activeEditor.selection.getNode().getAttribute("href");e&&n.execCommand(t.default.getEditorCommandFromUrl(e))}}),n.ui.registry.addButton("sslink-remove",{text:o.default._t("Admin.REMOVE_LINK","Remove link"),onAction:()=>this.handleRemoveLinkClick(n)}),n.ui.registry.addContextToolbar("sslink",{predicate:t=>n.dom.is(t,"a[href]"),position:"node",scope:"node",items:"sslink-edit sslink-remove"}),{getMetadata(){return{name:"Silverstripe Link",url:"https://docs.silverstripe.org/en/4/developer_guides/forms/field_types/htmleditorfield"}}}},handleRemoveLinkClick(t){const e=t.execCommand("unlink"),n=t.selection.getNode();return n&&void 0!==n.normalize&&n.normalize(),e}};e.default.entwine("ss",(t=>{t(".insert-link__dialog-wrapper").entwine({Element:null,Data:{},Bookmark:null,onunmatch(){this._clearModal()},_clearModal(){const t=this.getReactRoot();t&&(t.unmount(),this.setReactRoot(null))},open(){const t=this.getElement().getEditor().getInstance();this.setBookmark(t.selection.getBookmark(2,!0)),this.renderModal(!0)},close(){this.setData({}),this.renderModal(!1)},renderModal(){},checkNodeMatches(t,e){return t===e||1===e.children.length&&t===e.children[0]},linkCanWrapSelection(t,e){const n=t.getSelection()||"",i=e.getNode();if(n)return""!==n.trim();const o=document.createElement(i.nodeName);if(o.textContent="Check the outer HTML",o.outerHTML.includes("Check the outer HTML"))return!1;if(this.checkNodeMatches(i,e.getSel().focusNode)&&this.checkNodeMatches(i,e.getSel().anchorNode)){if(1===tinymce.activeEditor.dom.createFragment(`<a>${i.outerHTML}</a>`).childNodes.length)return!0}return!1},getRequireLinkText(){const t=this.getElement().getEditor(),e=t.getInstance().selection,n=this.linkCanWrapSelection(t,e);return"A"!==e.getNode().tagName&&!n},handleInsert(t){this.getElement().getEditor().getInstance().selection.moveToBookmark(this.getBookmark());const e=this.buildAttributes(t),n=(0,i.createHTMLSanitiser)()(t.Text);return this.insertLinkInEditor(e,n),this.close(),Promise.resolve()},buildAttributes(t){let{Anchor:e,Link:n,TargetBlank:i,Description:o}=t,r=e&&e.length?`#${e}`:"";r=r.replace(/^#+/,"#");return{href:`${n}${r}`,target:i?"_blank":"",title:o}},insertLinkInEditor(t,e){const n=this.getElement().getEditor();n.insertLink(t,null,e),n.addUndo(),n.repaint();const i=n.getInstance().selection;setTimeout((()=>i&&i.collapse()),0)},getOriginalAttributes(){const e=this.getElement().getEditor(),n=t(e.getSelectedNode()),i=(n.attr("href")||"").split("#");return{Link:i[0]||"",Anchor:i[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}}})})),tinymce.PluginManager.add("sslink",(t=>s.init(t)))}()}();