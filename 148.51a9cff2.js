(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1488:function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return s})),t.d(n,"validate",(function(){return p}));var r=t(566),a=t.n(r),i=t(567),o=t(382),_=t(408),u=t(368),c=t(358),l={ts:[".ts",".tsx"],js:[".js",".jsx"],json:[".json"]},s=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r,i){var s,p,f,d,m,O,v,h,b,E,y,g,T;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object.assign({module:"es2015",federation:!1,apolloClientVersion:3,useExplicitTyping:!1},r),p=parseInt(s.apolloClientVersion),f=s.federation?Object(_.h)(n):n,d=s.useExplicitTyping,e.next=6,Object(u.g)({schema:f,document:Object(c.parse)("\n      {\n        __schema {\n          types {\n            kind\n            name\n            possibleTypes {\n              name\n            }\n          }\n        }\n      }\n    ")});case 6:if(m=e.sent,O=Object(o.extname)(i.outputFile).toLowerCase(),m.data){e.next=10;break}throw new Error('Plugin "fragment-matcher" couldn\'t introspect the schema');case 10:if(v=function(e){return"UNION"===e.kind||"INTERFACE"===e.kind},h=function(e,n){var t;return Object.assign({},e,((t={})[n.name]=n.possibleTypes.map((function(e){return e.name})),t))},b=2===p?{__schema:Object.assign({},m.data.__schema,{types:m.data.__schema.types.filter((function(e){return"UNION"===e.kind||"INTERFACE"===e.kind}))})}:{possibleTypes:m.data.__schema.types.filter(v).reduce(h,{})},E=JSON.stringify(b,null,2),!l.json.includes(O)){e.next=16;break}return e.abrupt("return",E);case 16:if(!l.js.includes(O)){e.next=19;break}return y="es2015"===s.module?"export default":"module.exports =",e.abrupt("return","\n      "+y+" "+E+"\n    ");case 19:if(!l.ts.includes(O)){e.next=23;break}return 2===p?g="IntrospectionResultData":3===p&&(g="PossibleTypesResultData"),d?T="export type "+g+" = "+E+";":2===p?T="export interface "+g+" {\n        __schema: {\n          types: {\n            kind: string;\n            name: string;\n            possibleTypes: {\n              name: string;\n            }[];\n          }[];\n        };\n      }":3===p&&(T="export interface "+g+" {\n        possibleTypes: {\n          [key: string]: string[]\n        }\n      }"),e.abrupt("return","\n      "+T+"\n      const result: "+g+" = "+E+";\n      export default result;\n    ");case 23:throw new Error("Extension "+O+" is not supported");case 24:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r,i){var _,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_=Object(o.extname)(i).toLowerCase(),(u=Object.values(l).reduce((function(e,n){return[].concat(e,n)}),[])).includes(_)){e.next=4;break}throw new Error('Plugin "fragment-matcher" requires extension to be one of '+u.map((function(e){return e.replace(".","")})).join(", ")+"!");case 4:if("commonjs"!==r.module||!l.ts.includes(_)){e.next=6;break}throw new Error('Plugin "fragment-matcher" doesn\'t support commonjs modules combined with TypeScript!');case 6:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()},367:function(e,n,t){"use strict";function r(e){return"function"==typeof(null==e?void 0:e.then)}t.d(n,"a",(function(){return r}))},368:function(e,n,t){"use strict";t.d(n,"g",(function(){return y})),t.d(n,"h",(function(){return g})),t.d(n,"a",(function(){return P})),t.d(n,"b",(function(){return j})),t.d(n,"d",(function(){return w})),t.d(n,"c",(function(){return R})),t.d(n,"f",(function(){return K})),t.d(n,"e",(function(){return S})),t.d(n,"i",(function(){return V}));var r=t(412),a=t(333);var i=t(338),o=t(346),_=t(367),u=t(409),c=t(560);var l=t(427),s=t(329),p=t(426),f=t(332),d=t(375),m=t(343),O=t(337),v=t(331),h=t(342),b=t(465),E=t(376);function y(e,n,t,r,a,i,o,_){return T(1===arguments.length?e:{schema:e,document:n,rootValue:t,contextValue:r,variableValues:a,operationName:i,fieldResolver:o,typeResolver:_})}function g(e){var n=T(e);if(Object(_.a)(n))throw new Error("GraphQL execution failed to complete synchronously.");return n}function T(e){var n=e.schema,t=e.document,r=e.rootValue,a=e.contextValue,i=e.variableValues,o=e.operationName,u=e.fieldResolver,c=e.typeResolver;P(n,t,i);var s=j(n,t,r,a,i,o,u,c);if(Array.isArray(s))return{errors:s};var p=function(e,n,t){var r=Object(b.a)(e.schema,n),a=w(e,r,n.selectionSet,Object.create(null),Object.create(null)),i=void 0;try{var o="mutation"===n.operation?function(e,n,t,r,a){return i=Object.keys(a),o=function(i,o){var u=a[o],c=Object(l.a)(r,o,n.name),s=k(e,n,t,u,c);return void 0===s?i:Object(_.a)(s)?s.then((function(e){return i[o]=e,i})):(i[o]=s,i)},u=Object.create(null),i.reduce((function(e,n){return Object(_.a)(e)?e.then((function(e){return o(e,n)})):o(e,n)}),u);var i,o,u}(e,r,t,i,a):M(e,r,t,i,a);return Object(_.a)(o)?o.then(void 0,(function(n){return e.errors.push(n),Promise.resolve(null)})):o}catch(u){return e.errors.push(u),null}}(s,s.operation,r);return D(s,p)}function D(e,n){return Object(_.a)(n)?n.then((function(n){return D(e,n)})):0===e.errors.length?{data:n}:{errors:e.errors,data:n}}function P(e,n,t){n||Object(o.a)(0,"Must provide document."),Object(d.a)(e),null==t||Object(u.a)(t)||Object(o.a)(0,"Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.")}function j(e,n,t,r,a,i,o,_){for(var u,c,l,p=Object.create(null),d=0,m=n.definitions;d<m.length;d++){var O=m[d];switch(O.kind){case f.a.OPERATION_DEFINITION:if(null==i){if(void 0!==l)return[new s.a("Must provide operation name if query contains multiple operations.")];l=O}else(null===(u=O.name)||void 0===u?void 0:u.value)===i&&(l=O);break;case f.a.FRAGMENT_DEFINITION:p[O.name.value]=O}}if(!l)return null!=i?[new s.a('Unknown operation named "'.concat(i,'".'))]:[new s.a("Must provide an operation.")];var v=null!==(c=l.variableDefinitions)&&void 0!==c?c:[],h=Object(E.c)(e,v,null!=a?a:{},{maxErrors:50});return h.errors?h.errors:{schema:e,fragments:p,rootValue:t,contextValue:r,operation:l,variableValues:h.coerced,fieldResolver:null!=o?o:S,typeResolver:null!=_?_:K,errors:[]}}function M(e,n,t,r,a){for(var i,o,u,c=Object.create(null),s=!1,p=0,f=Object.keys(a);p<f.length;p++){var d=f[p],m=k(e,n,t,a[d],Object(l.a)(r,d,n.name));void 0!==m&&(c[d]=m,Object(_.a)(m)&&(s=!0))}return s?(i=c,o=Object.keys(i),u=o.map((function(e){return i[e]})),Promise.all(u).then((function(e){return e.reduce((function(e,n,t){return e[o[t]]=n,e}),Object.create(null))}))):c}function w(e,n,t,r,a){for(var i=0,o=t.selections;i<o.length;i++){var _=o[i];switch(_.kind){case f.a.FIELD:if(!N(e,_))continue;var u=(s=_).alias?s.alias.value:s.name.value;r[u]||(r[u]=[]),r[u].push(_);break;case f.a.INLINE_FRAGMENT:if(!N(e,_)||!I(e,_,n))continue;w(e,n,_.selectionSet,r,a);break;case f.a.FRAGMENT_SPREAD:var c=_.name.value;if(a[c]||!N(e,_))continue;a[c]=!0;var l=e.fragments[c];if(!l||!I(e,l,n))continue;w(e,n,l.selectionSet,r,a)}}var s;return r}function N(e,n){var t=Object(E.b)(O.e,n,e.variableValues);if(!0===(null==t?void 0:t.if))return!1;var r=Object(E.b)(O.d,n,e.variableValues);return!1!==(null==r?void 0:r.if)}function I(e,n,t){var r=n.typeCondition;if(!r)return!0;var a=Object(h.a)(e.schema,r);return a===t||!!Object(v.C)(a)&&e.schema.isSubType(a,t)}function k(e,n,t,r,a){var i,o=r[0].name.value,u=V(e.schema,n,o);if(u){var c=u.type,s=null!==(i=u.resolve)&&void 0!==i?i:e.fieldResolver,f=R(e,u,r,n,a);try{var d,m=s(t,Object(E.a)(u,r[0],e.variableValues),e.contextValue,f);return d=Object(_.a)(m)?m.then((function(n){return q(e,c,r,f,a,n)})):q(e,c,r,f,a,m),Object(_.a)(d)?d.then(void 0,(function(n){return A(Object(p.a)(n,r,Object(l.b)(a)),c,e)})):d}catch(O){return A(Object(p.a)(O,r,Object(l.b)(a)),c,e)}}}function R(e,n,t,r,a){return{fieldName:n.name,fieldNodes:t,returnType:n.type,parentType:r,path:a,schema:e.schema,fragments:e.fragments,rootValue:e.rootValue,operation:e.operation,variableValues:e.variableValues}}function A(e,n,t){if(Object(v.L)(n))throw e;return t.errors.push(e),null}function q(e,n,t,o,u,f){if(f instanceof Error)throw f;if(Object(v.L)(n)){var d=q(e,n.ofType,t,o,u,f);if(null===d)throw new Error("Cannot return null for non-nullable field ".concat(o.parentType.name,".").concat(o.fieldName,"."));return d}return null==f?null:Object(v.J)(n)?function(e,n,t,a,i,o){if(!Object(c.a)(o))throw new s.a('Expected Iterable, but did not find one for field "'.concat(a.parentType.name,".").concat(a.fieldName,'".'));var u=n.ofType,f=!1,d=Object(r.a)(o,(function(n,r){var o=Object(l.a)(i,r,void 0);try{var c;return c=Object(_.a)(n)?n.then((function(n){return q(e,u,t,a,o,n)})):q(e,u,t,a,o,n),Object(_.a)(c)?(f=!0,c.then(void 0,(function(n){return A(Object(p.a)(n,t,Object(l.b)(o)),u,e)}))):c}catch(s){return A(Object(p.a)(s,t,Object(l.b)(o)),u,e)}}));return f?Promise.all(d):d}(e,n,t,o,u,f):Object(v.I)(n)?function(e,n){var t=e.serialize(n);if(void 0===t)throw new Error('Expected a value of type "'.concat(Object(a.a)(e),'" but ')+"received: ".concat(Object(a.a)(n)));return t}(n,f):Object(v.C)(n)?function(e,n,t,r,a,i){var o,u=null!==(o=n.resolveType)&&void 0!==o?o:e.typeResolver,c=e.contextValue,l=u(i,c,r,n);if(Object(_.a)(l))return l.then((function(o){return F(e,x(o,e,n,t,r,i),t,r,a,i)}));return F(e,x(l,e,n,t,r,i),t,r,a,i)}(e,n,t,o,u,f):Object(v.N)(n)?F(e,n,t,o,u,f):void Object(i.a)(0,"Cannot complete value of unexpected output type: "+Object(a.a)(n))}function x(e,n,t,r,i,o){if(null==e)throw new s.a('Abstract type "'.concat(t.name,'" must resolve to an Object type at runtime for field "').concat(i.parentType.name,".").concat(i.fieldName,'". Either the "').concat(t.name,'" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.'),r);var _=Object(v.K)(e)?e.name:e;if("string"!=typeof _)throw new s.a('Abstract type "'.concat(t.name,'" must resolve to an Object type at runtime for field "').concat(i.parentType.name,".").concat(i.fieldName,'" with ')+"value ".concat(Object(a.a)(o),', received "').concat(Object(a.a)(e),'".'));var u=n.schema.getType(_);if(null==u)throw new s.a('Abstract type "'.concat(t.name,'" was resolve to a type "').concat(_,'" that does not exist inside schema.'),r);if(!Object(v.N)(u))throw new s.a('Abstract type "'.concat(t.name,'" was resolve to a non-object type "').concat(_,'".'),r);if(!n.schema.isSubType(t,u))throw new s.a('Runtime Object type "'.concat(u.name,'" is not a possible type for "').concat(t.name,'".'),r);return u}function F(e,n,t,r,a,i){if(n.isTypeOf){var o=n.isTypeOf(i,e.contextValue,r);if(Object(_.a)(o))return o.then((function(r){if(!r)throw C(n,i,t);return L(e,n,t,a,i)}));if(!o)throw C(n,i,t)}return L(e,n,t,a,i)}function C(e,n,t){return new s.a('Expected value of type "'.concat(e.name,'" but got: ').concat(Object(a.a)(n),"."),t)}function L(e,n,t,r,a){return M(e,n,a,r,W(e,n,t))}var B,U,W=(B=function(e,n,t){for(var r=Object.create(null),a=Object.create(null),i=0;i<t.length;i++){var o=t[i];o.selectionSet&&(r=w(e,n,o.selectionSet,r,a))}return r},function(e,n,t){U||(U=new WeakMap);var r,a=U.get(e);if(a){if(r=a.get(n)){var i=r.get(t);if(void 0!==i)return i}}else a=new WeakMap,U.set(e,a);r||(r=new WeakMap,a.set(n,r));var o=B(e,n,t);return r.set(t,o),o});var K=function(e,n,t,r){if(Object(u.a)(e)&&"string"==typeof e.__typename)return e.__typename;for(var a=t.schema.getPossibleTypes(r),i=[],o=0;o<a.length;o++){var c=a[o];if(c.isTypeOf){var l=c.isTypeOf(e,n,t);if(Object(_.a)(l))i[o]=l;else if(l)return c.name}}return i.length?Promise.all(i).then((function(e){for(var n=0;n<e.length;n++)if(e[n])return a[n].name})):void 0},S=function(e,n,t,r){if(Object(u.a)(e)||"function"==typeof e){var a=e[r.fieldName];return"function"==typeof a?e[r.fieldName](n,t,r):a}};function V(e,n,t){return t===m.a.name&&e.getQueryType()===n?m.a:t===m.c.name&&e.getQueryType()===n?m.c:t===m.d.name?m.d:n.getFields()[t]}},408:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__.d(__webpack_exports__,"a",(function(){return ApolloFederation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DetailedError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return addFederationReferencesToSchema})),__webpack_require__.d(__webpack_exports__,"d",(function(){return federationSpec})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getBaseType})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isComplexPluginOutput})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isUsingTypes})),__webpack_require__.d(__webpack_exports__,"h",(function(){return removeFederation})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resolveExternalModuleAndFn}));var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(378),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(561),param_case__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(562),graphql__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(331),graphql__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(355),graphql__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(332),graphql__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(358),graphql__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1481),lodash__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(557),lodash__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);function resolveExternalModuleAndFn(pointer){var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")};if("function"==typeof pointer)return pointer;var _pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName=Object(param_case__WEBPACK_IMPORTED_MODULE_3__.a)(functionName));var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var n={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var t,r;"string"==typeof e?n.content+=e:(n.content+=e.content,(t=n.prepend).push.apply(t,e.prepend||[]),(r=n.append).push.apply(r,e.append||[]))})),[].concat(n.prepend,[n.content],n.append).join("\n")}function isWrapperType(e){return Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)||Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:isConfiguredOutput(e)?e.plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var n;return"string"==typeof e?[(n={},n[e]={},n)]:Array.isArray(e)?e.map((function(e){var n;return"string"==typeof e?((n={})[e]={},n):e})):"object"==typeof e?Object.keys(e).reduce((function(n,t){var r;return[].concat(n,[(r={},r[t]=e[t],r)])}),[]):[]}function hasNullableTypeRecursively(e){return!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)||!(!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)&&!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,n,t){var r=0,a=[];return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(e,{SelectionSet:{enter:function(e,r,i,o){if(!o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var _=e.selections||[];if(t&&_.length>0){var u=function(){if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_DEFINITION)return i.typeCondition.name.value;if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD){var e=a[a.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var n=e.getFields()[i.name.value];if(!n)throw new Error('Unable to find field "'+i.name.value+'" on type "'+e+'"!');return getBaseType(n.type).name}if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.OPERATION_DEFINITION){if("query"===i.operation)return t.getQueryType().name;if("mutation"===i.operation)return t.getMutationType().name;if("subscription"===i.operation)return t.getSubscriptionType().name}else if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.INLINE_FRAGMENT)return i.typeCondition?i.typeCondition.name.value:a[a.length-1].name;return null}();a.push(t.getType(u))}}},leave:function(e){var n=e.selections||[];t&&n.length>0&&a.pop()}},Field:{enter:function(e,i,o,_,u){if(!e.name.value.startsWith("__")&&!u.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var c=e.selectionSet&&e.selectionSet.selections||[],l=c.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_SPREAD&&!n.includes(e.name.value)}));if((0===c.length||l.length>0)&&r++,t){var s=a[a.length-1];if(s&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(s)){var p=s.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+s+'"!');hasNullableTypeRecursively(p.type)&&r++}}}}},enter:{VariableDefinition:function(e,t,a,i,o){o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||r++},InputValueDefinition:function(e,t,a,i,o){o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||r++}}}),r>0}var federationSpec=Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var n=e.getTypeMap();for(var t in n){var r=e.getType(t);if(Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&isFederationObjectType(r)){var a,i=r.toConfig();i.fields=Object.assign(((a={})[resolveReferenceFieldName]={type:r},a),i.fields);var o=new graphql__WEBPACK_IMPORTED_MODULE_4__.f(i);o.astNode=o.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(o)).definitions[0],o.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:t}}}),n[t]=o}}return e}function removeFederation(e){var n=e.getQueryType().getFields();delete n._entities,delete n._service;var t=e.getTypeMap();return delete t._Service,delete t._Entity,delete t._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var n=e.enabled,t=e.schema;this.enabled=!1,this.enabled=n,this.schema=t,this.providesMap=this.createMapOfProvides()}var n=e.prototype;return n.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},n.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},n.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},n.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},n.skipField=function(e){var n=e.fieldNode,t=e.parentType;return!!(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(t)&&isFederationObjectType(t))&&this.isExternalAndNotProvided(n,t)},n.isResolveReferenceField=function(e){var n="string"==typeof e.name?e.name:e.name.value;return this.enabled&&n===resolveReferenceFieldName},n.transformParentType=function(e){var n=this,t=e.fieldNode,r=e.parentType,a=e.parentTypeSignature;if(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&isFederationObjectType(r)&&(isTypeExtension(r)||t.name.value===resolveReferenceFieldName)){var i=getDirectivesByName("key",r);if(i.length){var o=["{ __typename: '"+r.name+"' } &"],_=getDirectivesByName("requires",t).map(this.extractKeyOrRequiresFieldSet),u=this.translateFieldSet(lodash__WEBPACK_IMPORTED_MODULE_9__.merge.apply(void 0,[{}].concat(_)),a),c=i.map((function(e){var t=n.extractKeyOrRequiresFieldSet(e);return n.translateFieldSet(t,a)})),l=c.length>1?["(",")"]:["",""],s=l[0],p=l[1];return o.push([s,c.join(" | "),p].join("")),_.length&&o.push("& "+u),o.join(" ")}}return a},n.isExternalAndNotProvided=function(e,n){return this.isExternal(e)&&!this.hasProvides(n,e)},n.isExternal=function(e){return getDirectivesByName("external",e).length>0},n.hasProvides=function(e,n){var t=this.providesMap[Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.name:e.name.value];return!(!t||!t.length)&&t.includes(n.name.value)},n.translateFieldSet=function(e,n){return"GraphQLRecursivePick<"+n+", "+JSON.stringify(e)+">"},n.extractKeyOrRequiresFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("{"+n+"}"),{leave:{SelectionSet:function(e){return e.selections.reduce((function(e,n){return e[n.name]=n.selection,e}),{})},Field:function(e){return{name:e.name.value,selection:!e.selectionSet||e.selectionSet}},Document:function(e){return e.definitions.find((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})).selectionSet}}})},n.extractProvidesFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(n))throw new Error("Nested fields in _FieldSet is not supported in the @provides directive");return n.split(/\s+/g)},n.createMapOfProvides=function(){var e=this,n={};return Object.keys(this.schema.getTypeMap()).forEach((function(t){var r=e.schema.getType(t);Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&Object.values(r.getFields()).forEach((function(t){var r,a=getDirectivesByName("provides",t.astNode).map(e.extractProvidesFieldSet).reduce((function(e,n){return[].concat(e,n)}),[]),i=getBaseType(t.type);n[i.name]||(n[i.name]=[]),(r=n[i.name]).push.apply(r,a)}))})),n},e}();function isFederationObjectType(e){var n=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(e)).definitions[0]:e,t=n.name.value,r=n.directives,a=!["Query","Mutation","Subscription"].includes(t),i=!t.startsWith("__"),o=r.some((function(e){return"key"===e.name.value}));return a&&i&&o}function getDirectivesByName(e,n){var t;return(t=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(n)?n.astNode:n)&&t.directives?t.directives.filter((function(n){return n.name.value===e})):[]}function isTypeExtension(e){var n;return null===(n=(Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(e)).definitions[0]:e).fields)||void 0===n?void 0:n.some((function(e){return getDirectivesByName("external",e).length}))}var DetailedError=function(e){function n(t,r,a){var i;return(i=e.call(this,t)||this).message=t,i.details=r,i.source=a,Object.setPrototypeOf(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),n.prototype),Error.captureStackTrace(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),n),i}return Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(n,e),n}(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Error));function isDetailedError(e){return e.details}}).call(this,__webpack_require__(349))}}]);