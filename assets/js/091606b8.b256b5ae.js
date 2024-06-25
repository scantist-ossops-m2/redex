"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[492],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return m},mdx:function(){return x},useMDXComponents:function(){return c},withMDXComponents:function(){return p}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){return function(n){var t=c(n.components);return a.createElement(e,r({},n,{components:t}))}},c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,u=p["".concat(o,".").concat(m)]||p[m]||h[m]||r;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function x(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90843:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],l={id:"synth",title:"Redex Synth Pass Example"},s=void 0,d={unversionedId:"synth",id:"synth",title:"Redex Synth Pass Example",description:"The code and artifacts for this example are on GitHub.",source:"@site/docs/synth.md",sourceDirName:".",slug:"/synth",permalink:"/docs/synth",draft:!1,tags:[],version:"current",frontMatter:{id:"synth",title:"Redex Synth Pass Example"},sidebar:"tutorialSidebar",previous:{title:"Using ProGuard Rules with Redex",permalink:"/docs/proguard"},next:{title:"Usage",permalink:"/docs/usage"}},p={},c=[{value:"Removing synthetic methods for accessing static fields",id:"removing-synthetic-methods-for-accessing-static-fields",level:2},{value:"Example Code",id:"example-code",level:2}],m={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"The code and artifacts for this example are on ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/redex/tree/master/examples/Synth"},"GitHub"),".")),(0,r.mdx)("p",null,"The synth optimizations attempt to remove synthetic methods and wrappers. This\nimproves performance by making access to field values faster and it also\nreduces code size because the definition and invocation of synthetic methods\nis eliminated."),(0,r.mdx)("h2",{id:"removing-synthetic-methods-for-accessing-static-fields"},"Removing synthetic methods for accessing static fields"),(0,r.mdx)("p",null,"This directory contains an Android Studio 1.5 project that illustrates how a\nwrapper synthetic method is removed by Redex. The contrived example is\na simple Android application which makes use of this class:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"package com.facebook.redex.examples.synth;\n\npublic class Alpha {\n\n    private static int alpha;\n\n    public Alpha(int initialValue) {\n        alpha = initialValue;\n    }\n\n    public class Beta {\n        public int doubleAlpha() {\n            return 2 * alpha;\n        }\n    }\n}\n")),(0,r.mdx)("p",null,"The key thing to note here is that there is an inner class ",(0,r.mdx)("inlineCode",{parentName:"p"},"Beta")," which\nhas a method ",(0,r.mdx)("inlineCode",{parentName:"p"},"doubleAlpha")," which accesses a private static field ",(0,r.mdx)("inlineCode",{parentName:"p"},"alpha")," of\nits outer class ",(0,r.mdx)("inlineCode",{parentName:"p"},"Alpha"),". A dump of the Dex bytecode for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Alpha")," class\nconfirms that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"alpha")," field is ",(0,r.mdx)("inlineCode",{parentName:"p"},"private")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"static"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"  Static fields     -\n    #0              : (in Lcom/facebook/redex/examples/synth/Alpha;)\n      name          : 'alpha'\n      type          : 'I'\n      access        : 0x000a (PRIVATE STATIC)\n")),(0,r.mdx)("p",null,"Java compilers will implement accesses] to this field from inner classes\nby generating a synthetic getter method to allow the inner class to access\nthe private field of the outer\nclass. We can see the automatically generated synthetic method ",(0,r.mdx)("inlineCode",{parentName:"p"},"access$000"),"\nif we examine the Dex bytecode for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Alpha")," class:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"Class #597            -\n  Class descriptor  : 'Lcom/facebook/redex/examples/synth/Alpha;'\n...\n    #1              : (in Lcom/facebook/redex/examples/synth/Alpha;)\n      name          : 'access$000'\n      type          : '()I'\n      access        : 0x1008 (STATIC SYNTHETIC)\n      code          -\n      registers     : 1\n      ins           : 0\n      outs          : 0\n      insns size    : 3 16-bit code units\n065f14:                                        |[065f14] com.facebook.redex.examples.synth.Alpha.access$000:()I\n065f24: 6000 070b                              |0000: sget v0, Lcom/facebook/redex/examples/synth/Alpha;.alpha:I // field@0b07\n065f28: 0f00                                   |0002: return v0\n")),(0,r.mdx)("p",null,"This generated synthetic method can be accessed by the inner class\nwhich keeps the JVM happy. All it does is to read the state field\nvalue using an ",(0,r.mdx)("inlineCode",{parentName:"p"},"sget")," instruction and return the read value.\nThis synthetic wrapper is used in the implementation of ",(0,r.mdx)("inlineCode",{parentName:"p"},"doubleAlpha"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"  Virtual methods   -\n    #0              : (in Lcom/facebook/redex/examples/synth/Alpha$Beta;)\n      name          : 'doubleAlpha'\n...\n065ed8:                                        |[065ed8] com.facebook.redex.examples.synth.Alpha.Beta.doubleAlpha:()I\n065ee8: 7100 1118 0000                         |0000: invoke-static {}, Lcom/facebook/redex/examples/synth/Alpha;.access$000:()I // method@1811\n065eee: 0a00                                   |0003: move-result v0\n065ef0: da00 0002                              |0004: mul-int/lit8 v0, v0, #int 2 // #02\n065ef4: 0f00                                   |0006: return v0\n")),(0,r.mdx)("p",null,"For the ",(0,r.mdx)("inlineCode",{parentName:"p"},"doubleAlpha")," method in the inner class ",(0,r.mdx)("inlineCode",{parentName:"p"},"Beta")," to access the\nprivate static field of the enclosing class an ",(0,r.mdx)("inlineCode",{parentName:"p"},"invoke-static")," call is made\nto the synthetic wrapper method ",(0,r.mdx)("inlineCode",{parentName:"p"},"access$000"),"."),(0,r.mdx)("p",null,"Here is an example of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"doubleAlpha")," method being used from a simple\nAndroid application:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'package com.facebook.redex.examples.synth;\n\nimport android.support.v7.app.AppCompatActivity;\nimport android.os.Bundle;\nimport android.widget.TextView;\n\npublic class MainActivity extends AppCompatActivity {\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        TextView textView = (TextView) findViewById(R.id.message);\n        textView.setText("Redex Synth Example\\n");\n\n        Alpha a = new Alpha(12);\n        Alpha.Beta b = a.new Beta();\n        textView.append("Double Alpha(12) = " + b.doubleAlpha() + "\\n");\n    }\n}\n')),(0,r.mdx)("p",null,"If we examined the Dex bytecode for the call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"doubleAlpha")," we would\nsee something like this which shows a virtual call to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"doubleAlpha")," method:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"  Direct methods    -\n    #0              : (in Lcom/facebook/redex/examples/synth/MainActivity;)\n      name          : 'onCreate'\n...\n065fb6: 6e10 0f18 0100                         |0031: invoke-virtual {v1}, Lcom/facebook/redex/examples/synth/Alpha$Beta;.doubleAlpha:()I // method@180f\n...\n")),(0,r.mdx)("p",null,"After running Redex the synthetic wrapper method will be removed and\nthe code for accessing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"alpha")," static field will be inlined into\nthe code for the main activity:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"  Direct methods    -\n    #0              : (in Lcom/facebook/redex/examples/synth/MainActivity;)\n      name          : 'onCreate'\n...\n07f246: 6005 4d06                              |0031: sget v5, Lcom/facebook/redex/examples/synth/Alpha;.alpha:I // field@064d\n07f24a: da05 0502                              |0033: mul-int/lit8 v5, v5, #int 2 // #02\n...\n\n")),(0,r.mdx)("p",null,"To make the access of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"alpha")," field legal for the Dalvik VM we have\nmutated the access permissions for this field:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"  Static fields     -\n    #0              : (in Lcom/facebook/redex/examples/synth/Alpha;)\n      name          : 'alpha'\n      type          : 'I'\n      access        : 0x0009 (PUBLIC STATIC)\n\n")),(0,r.mdx)("p",null,"Similar optimizations exist for other synthetic wrapper scenarios e.g.\nfor instance fields."),(0,r.mdx)("h2",{id:"example-code"},"Example Code"),(0,r.mdx)("p",null,"The project in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"synth-example")," directory can be opened with Android Studio 1.5 and\ncontains the sample here that illustrates the removal of synthetic\nwrappers for static private fields. "),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Makefile")," in this directory can be used once you have build a signed:\nAPK (",(0,r.mdx)("inlineCode",{parentName:"p"},"Build : Generate Signed APK..."),") to produce the following items:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"synth-example-release-redex.apk"),": A Redex optimized version of the original APK."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"classes.dump"),": A dump of the Dex bytecode for the input APK ",(0,r.mdx)("inlineCode",{parentName:"li"},"synth-example-release.apk"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"classes-redex.dump"),": A dump of the Redex optimizd APK ",(0,r.mdx)("inlineCode",{parentName:"li"},"synth-example-release-redex.apk"),".")),(0,r.mdx)("p",null,"The environment variable ",(0,r.mdx)("inlineCode",{parentName:"p"},"ANDROID_TOOLS")," should be set to the location\nof your Android SDK tools directory."),(0,r.mdx)("p",null,"To produce these items:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"$ make clean all\n")))}h.isMDXComponent=!0}}]);