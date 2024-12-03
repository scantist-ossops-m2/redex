"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[3912],{93031:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"examples/synth","title":"Redex Synth Pass Example","description":"The code and artifacts for this example are on GitHub.","source":"@site/docs/examples/synth.md","sourceDirName":"examples","slug":"/examples/synth","permalink":"/docs/examples/synth","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"synth","title":"Redex Synth Pass Example"},"sidebar":"mySidebar","previous":{"title":"Using ProGuard Rules with Redex","permalink":"/docs/examples/proguard"},"next":{"title":"Docker Container Deployments","permalink":"/docs/technical_details/docker"}}');var i=s(74848),a=s(28453);const c={id:"synth",title:"Redex Synth Pass Example"},l=void 0,d={},o=[{value:"Removing synthetic methods for accessing static fields",id:"removing-synthetic-methods-for-accessing-static-fields",level:2},{value:"Example Code",id:"example-code",level:2}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The code and artifacts for this example are on ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/redex/tree/master/examples/Synth",children:"GitHub"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The synth optimizations attempt to remove synthetic methods and wrappers. This\nimproves performance by making access to field values faster and it also\nreduces code size because the definition and invocation of synthetic methods\nis eliminated."}),"\n",(0,i.jsx)(n.h2,{id:"removing-synthetic-methods-for-accessing-static-fields",children:"Removing synthetic methods for accessing static fields"}),"\n",(0,i.jsx)(n.p,{children:"This directory contains an Android Studio 1.5 project that illustrates how a\nwrapper synthetic method is removed by Redex. The contrived example is\na simple Android application which makes use of this class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package com.facebook.redex.examples.synth;\n\npublic class Alpha {\n\n    private static int alpha;\n\n    public Alpha(int initialValue) {\n        alpha = initialValue;\n    }\n\n    public class Beta {\n        public int doubleAlpha() {\n            return 2 * alpha;\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The key thing to note here is that there is an inner class ",(0,i.jsx)(n.code,{children:"Beta"})," which\nhas a method ",(0,i.jsx)(n.code,{children:"doubleAlpha"})," which accesses a private static field ",(0,i.jsx)(n.code,{children:"alpha"})," of\nits outer class ",(0,i.jsx)(n.code,{children:"Alpha"}),". A dump of the Dex bytecode for the ",(0,i.jsx)(n.code,{children:"Alpha"})," class\nconfirms that the ",(0,i.jsx)(n.code,{children:"alpha"})," field is ",(0,i.jsx)(n.code,{children:"private"})," and ",(0,i.jsx)(n.code,{children:"static"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  Static fields     -\n    #0              : (in Lcom/facebook/redex/examples/synth/Alpha;)\n      name          : 'alpha'\n      type          : 'I'\n      access        : 0x000a (PRIVATE STATIC)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Java compilers will implement accesses] to this field from inner classes\nby generating a synthetic getter method to allow the inner class to access\nthe private field of the outer\nclass. We can see the automatically generated synthetic method ",(0,i.jsx)(n.code,{children:"access$000"}),"\nif we examine the Dex bytecode for the ",(0,i.jsx)(n.code,{children:"Alpha"})," class:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Class #597            -\n  Class descriptor  : 'Lcom/facebook/redex/examples/synth/Alpha;'\n...\n    #1              : (in Lcom/facebook/redex/examples/synth/Alpha;)\n      name          : 'access$000'\n      type          : '()I'\n      access        : 0x1008 (STATIC SYNTHETIC)\n      code          -\n      registers     : 1\n      ins           : 0\n      outs          : 0\n      insns size    : 3 16-bit code units\n065f14:                                        |[065f14] com.facebook.redex.examples.synth.Alpha.access$000:()I\n065f24: 6000 070b                              |0000: sget v0, Lcom/facebook/redex/examples/synth/Alpha;.alpha:I // field@0b07\n065f28: 0f00                                   |0002: return v0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This generated synthetic method can be accessed by the inner class\nwhich keeps the JVM happy. All it does is to read the state field\nvalue using an ",(0,i.jsx)(n.code,{children:"sget"})," instruction and return the read value.\nThis synthetic wrapper is used in the implementation of ",(0,i.jsx)(n.code,{children:"doubleAlpha"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  Virtual methods   -\n    #0              : (in Lcom/facebook/redex/examples/synth/Alpha$Beta;)\n      name          : 'doubleAlpha'\n...\n065ed8:                                        |[065ed8] com.facebook.redex.examples.synth.Alpha.Beta.doubleAlpha:()I\n065ee8: 7100 1118 0000                         |0000: invoke-static {}, Lcom/facebook/redex/examples/synth/Alpha;.access$000:()I // method@1811\n065eee: 0a00                                   |0003: move-result v0\n065ef0: da00 0002                              |0004: mul-int/lit8 v0, v0, #int 2 // #02\n065ef4: 0f00                                   |0006: return v0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.code,{children:"doubleAlpha"})," method in the inner class ",(0,i.jsx)(n.code,{children:"Beta"})," to access the\nprivate static field of the enclosing class an ",(0,i.jsx)(n.code,{children:"invoke-static"})," call is made\nto the synthetic wrapper method ",(0,i.jsx)(n.code,{children:"access$000"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of the ",(0,i.jsx)(n.code,{children:"doubleAlpha"})," method being used from a simple\nAndroid application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.facebook.redex.examples.synth;\n\nimport android.support.v7.app.AppCompatActivity;\nimport android.os.Bundle;\nimport android.widget.TextView;\n\npublic class MainActivity extends AppCompatActivity {\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        TextView textView = (TextView) findViewById(R.id.message);\n        textView.setText("Redex Synth Example\\n");\n\n        Alpha a = new Alpha(12);\n        Alpha.Beta b = a.new Beta();\n        textView.append("Double Alpha(12) = " + b.doubleAlpha() + "\\n");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If we examined the Dex bytecode for the call to ",(0,i.jsx)(n.code,{children:"doubleAlpha"})," we would\nsee something like this which shows a virtual call to the ",(0,i.jsx)(n.code,{children:"doubleAlpha"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  Direct methods    -\n    #0              : (in Lcom/facebook/redex/examples/synth/MainActivity;)\n      name          : 'onCreate'\n...\n065fb6: 6e10 0f18 0100                         |0031: invoke-virtual {v1}, Lcom/facebook/redex/examples/synth/Alpha$Beta;.doubleAlpha:()I // method@180f\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After running Redex the synthetic wrapper method will be removed and\nthe code for accessing the ",(0,i.jsx)(n.code,{children:"alpha"})," static field will be inlined into\nthe code for the main activity:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  Direct methods    -\n    #0              : (in Lcom/facebook/redex/examples/synth/MainActivity;)\n      name          : 'onCreate'\n...\n07f246: 6005 4d06                              |0031: sget v5, Lcom/facebook/redex/examples/synth/Alpha;.alpha:I // field@064d\n07f24a: da05 0502                              |0033: mul-int/lit8 v5, v5, #int 2 // #02\n...\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To make the access of the ",(0,i.jsx)(n.code,{children:"alpha"})," field legal for the Dalvik VM we have\nmutated the access permissions for this field:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  Static fields     -\n    #0              : (in Lcom/facebook/redex/examples/synth/Alpha;)\n      name          : 'alpha'\n      type          : 'I'\n      access        : 0x0009 (PUBLIC STATIC)\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Similar optimizations exist for other synthetic wrapper scenarios e.g.\nfor instance fields."}),"\n",(0,i.jsx)(n.h2,{id:"example-code",children:"Example Code"}),"\n",(0,i.jsxs)(n.p,{children:["The project in the ",(0,i.jsx)(n.code,{children:"synth-example"})," directory can be opened with Android Studio 1.5 and\ncontains the sample here that illustrates the removal of synthetic\nwrappers for static private fields."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Makefile"})," in this directory can be used once you have build a signed:\nAPK (",(0,i.jsx)(n.code,{children:"Build : Generate Signed APK..."}),") to produce the following items:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"synth-example-release-redex.apk"}),": A Redex optimized version of the original APK."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"classes.dump"}),": A dump of the Dex bytecode for the input APK ",(0,i.jsx)(n.code,{children:"synth-example-release.apk"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"classes-redex.dump"}),": A dump of the Redex optimizd APK ",(0,i.jsx)(n.code,{children:"synth-example-release-redex.apk"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The environment variable ",(0,i.jsx)(n.code,{children:"ANDROID_TOOLS"})," should be set to the location\nof your Android SDK tools directory."]}),"\n",(0,i.jsx)(n.p,{children:"To produce these items:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ make clean all\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}}}]);