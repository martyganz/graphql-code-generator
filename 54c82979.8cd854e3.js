(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(5),a=n(10),o=(n(1),n(341)),i={id:"index",title:"What is GraphQL Code Generator?"},s={unversionedId:"getting-started/index",id:"getting-started/index",isDocsHomePage:!1,title:"What is GraphQL Code Generator?",description:"GraphQL Code Generator is a CLI tool that can generate TypeScript typings out of a GraphQL schema. When we develop a GraphQL backend, there would be many instances where we would find ourselves writing the same things which are already described by the GraphQL schema, only in a different format; for example: resolver signatures, MongoDB models, Angular services etc.",source:"@site/docs/getting-started/index.md",slug:"/getting-started/index",permalink:"/docs/getting-started/index",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/index.md",version:"current",sidebar:"sidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},c=[{value:"What&#39;s next?",id:"whats-next",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Code Generator is a CLI tool that can generate TypeScript typings out of a GraphQL schema. When we develop a GraphQL backend, there would be many instances where we would find ourselves writing the same things which are already described by the GraphQL schema, only in a different format; for example: resolver signatures, MongoDB models, Angular services etc."),Object(o.b)("p",null,"GraphQL Code Generator was built to address exactly that. By analyzing the schema and parsing it, GraphQL Code Generator can output code at a wide variety of formats, based on pre-defined plugins or based on custom user-defined ones. Regardless of the language that you're using, GraphQL Code Generator got you covered."),Object(o.b)("p",null,"For example, given the following schema:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  posts(findTitle: String): [Post]\n}\n\ntype Post {\n  id: Int!\n  title: String!\n  author: Author!\n}\n\ntype Query {\n  posts: [Post]\n}\n\nschema {\n  query: Query\n}\n")),Object(o.b)("p",null,"GraphQL Code Generator can generate the following TypeScript typings (this example is using ",Object(o.b)("inlineCode",{parentName:"p"},"typescript")," plugin):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export type Maybe<T> = T | null;\n\n/** All built-in and custom scalars, mapped to their actual values */\nexport type Scalars = {\n  ID: string,\n  String: string,\n  Boolean: boolean,\n  Int: number,\n  Float: number,\n};\n\nexport type Author = {\n  __typename?: 'Author',\n  id: Scalars['Int'],\n  firstName: Scalars['String'],\n  lastName: Scalars['String'],\n  posts?: Maybe<Array<Maybe<Post>>>,\n};\n\nexport type AuthorPostsArgs = {\n  findTitle?: Maybe<Scalars['String']>\n};\n\nexport type Post = {\n  __typename?: 'Post',\n  id: Scalars['Int'],\n  title: Scalars['String'],\n  author: Author,\n};\n\nexport type Query = {\n  __typename?: 'Query',\n  posts?: Maybe<Array<Maybe<Post>>>,\n};\n")),Object(o.b)("h2",{id:"whats-next"},"What's next?"),Object(o.b)("p",null,"Start by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/installation"}),"installing GraphQL Code Generator")," in your project, and use the basic plugins to generate some code. "),Object(o.b)("p",null,"You can go over ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/index"}),"the list of available plugins")," and find more plugins that matches your needs. "),Object(o.b)("p",null,"If you are having issues, you can reach us this the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Found a bug? ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/dotansimha/graphql-code-generator"}),"report it in our GitHub repo")),Object(o.b)("li",{parentName:"ul"},"Need help or have a question? You can use the live chat box in the corner of the screen, ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/dotansimha/graphql-code-generator/discussions"}),"ask it in our GitHub Discussions page")," or ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://bit.ly/guild-chat"}),"reach us directly in our Discord"),"."),Object(o.b)("li",{parentName:"ul"},"We have more awesome ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/the-guild-org/Stack"}),"open source tools"),"!"),Object(o.b)("li",{parentName:"ul"},"You can ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://the-guild.dev/"}),"visit our website")," for more information about us and what we do  ")))}p.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(1),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);