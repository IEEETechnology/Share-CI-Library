(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{205:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return g});var o=a(0),n=a.n(o),r=a(264),i=a.n(r),l=a(220),s=a(233),p=a(218),c=a(219),m=a(214);var d=function(t){var e,a;function o(){return t.apply(this,arguments)||this}return a=t,(e=o).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,o.prototype.render=function(){var t="#"+this.props.pageContext.tag,e=i()(this,"props.data.posts.edges");return n.a.createElement(l.a,{location:this.props.location,title:t},n.a.createElement(c.a,{title:t}),n.a.createElement(m.a,{title:t}),n.a.createElement(p.a,null,n.a.createElement("h1",null,'Posts tagged as "',this.props.pageContext.tag,'"'),n.a.createElement(s.a,{posts:e})))},o}(n.a.Component);e.default=d;var g="1448544743"},214:function(t,e,a){"use strict";var o=a(0),n=a.n(o),r=(a(212),a(210)),i=a(213),l=a(215),s=a(211),p=r.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1wsaguq-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),c=r.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1wsaguq-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),m=r.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1wsaguq-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:",";text-shadow:1px 1px 4px rgba(34,34,34,0.85);"],s.a.white),d=r.b.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"sc-1wsaguq-3"})(["margin:10px 60px;color:",";text-shadow:1px 1px 4px rgba(34,34,34,0.85);"],s.a.white);e.a=function(t){var e=Object(i.a)().siteCover,a=Object(l.a)(e).fluid,o=t.heroImg||a.src;return n.a.createElement(p,{style:{backgroundImage:'url("'+o+'")'}},n.a.createElement(c,null,n.a.createElement(m,null,t.title),t.subTitle&&n.a.createElement(d,null,t.subTitle)))}},216:function(t,e,a){"use strict";var o=a(0),n=a.n(o),r=a(212),i=a(210),l=a(211);var s=i.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"tgjq80-0"})(["display:inline;margin:0 0.5rem 0 0;color:",";"],l.a.textLight),p=Object(i.b)(r.a).withConfig({displayName:"TagList__TagListItem",componentId:"tgjq80-1"})(["margin-left:0.3rem;color:",";&:hover{border-bottom:1px dotted ",";}&:before{content:'#';}"],l.a.textLight,l.a.textLight),c=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props,e=t.tags,a=t.icon;return n.a.createElement(s,null,!0===a&&n.a.createElement(o.Fragment,null,"🏷 "),e.map(function(t,a){return n.a.createElement(o.Fragment,{key:"tag-list-"+a},n.a.createElement(p,{to:"/tags/"+t},t),a<e.length-1?", ":"")}))},r}(n.a.Component);e.a=c},233:function(t,e,a){"use strict";a(14);var o=a(0),n=a.n(o),r=a(212),i=a(216),l=a(210),s=a(211),p=l.b.article.withConfig({displayName:"PostsListItem__Post",componentId:"sc-1pv5de6-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;"]),c=Object(l.b)(r.a).withConfig({displayName:"PostsListItem__ReadPost",componentId:"sc-1pv5de6-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;color:",";&:hover{background-color:",";border-radius:0.25rem;color:",";}"],s.a.primary,s.a.primaryAlpha,s.a.textLightest),m=l.b.time.withConfig({displayName:"PostsListItem__PostDate",componentId:"sc-1pv5de6-2"})(["color:",';&:before{content:"🗓";margin-right:0.2rem;}'],s.a.textLight),d=l.b.header.withConfig({displayName:"PostsListItem__PostHeader",componentId:"sc-1pv5de6-3"})(["padding:1em 0;"]),g=l.b.p.withConfig({displayName:"PostsListItem__Excerpt",componentId:"sc-1pv5de6-4"})(["line-height:1.45;padding-bottom:0.5em;"]),u=Object(l.b)(r.a).withConfig({displayName:"PostsListItem__PostTitleLink",componentId:"sc-1pv5de6-5"})(["color:",";&:hover{border-bottom:1px dotted ",";}"],s.a.primary,s.a.primary),h=function(t){var e=t.title,a=t.excerpt,o=t.slug,r=t.date,l=(t.language,t.tags);return n.a.createElement(p,null,n.a.createElement(d,null,n.a.createElement("h2",null,n.a.createElement(u,{to:"/"+o},e))),n.a.createElement("section",null,n.a.createElement(g,{dangerouslySetInnerHTML:{__html:a}})),n.a.createElement("footer",null,n.a.createElement(i.a,{tags:l,icon:!0}),n.a.createElement(m,null,r),n.a.createElement(c,{to:"/"+o,"aria-label":"View "+e+" article"},"Read post ›")))};var b=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.posts;return n.a.createElement(o.Fragment,null,t.map(function(t){var e={title:t.node.frontmatter.title,excerpt:t.node.excerpt,slug:t.node.frontmatter.slug,date:t.node.frontmatter.date,language:t.node.frontmatter.language||"fr",tags:t.node.frontmatter.tags||[]};return n.a.createElement(h,Object.assign({key:e.slug},e))}))},r}(n.a.Component);e.a=b}}]);
//# sourceMappingURL=component---src-templates-tags-js-ae58e457d7fef20517b4.js.map