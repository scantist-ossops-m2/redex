"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[770],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={id:"interdex",title:"Interdex"},l=void 0,p={unversionedId:"interdex",id:"interdex",title:"Interdex",description:"The Interdex Pass addresses the problem that the ordering of classes inside dexes",source:"@site/docs/interdex.md",sourceDirName:".",slug:"/interdex",permalink:"/docs/interdex",draft:!1,tags:[],version:"current",frontMatter:{id:"interdex",title:"Interdex"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"intro",permalink:"/docs/intro"}},d={},u=[{value:"Step-by-Step on how to generate class list",id:"step-by-step-on-how-to-generate-class-list",level:2},{value:"Options",id:"options",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Interdex Pass addresses the problem that the ordering of classes inside dexes\nand their distribution between dexes (if the application has multiple dexes) does\nnot correspond to the order that they are accessed with during runtime if we use\nthe normal compilation tool chain."),(0,o.mdx)("p",null,"Consider a dex with classes c0, c1, c2, ... . Let's assume the order in which\nthey are accessed during runtime is c0, c1, c2, ... .\nThe actual layout in the bytecode section might be\nc1000, c291, c3, c705, ..., c0,..., c1 and so on"),(0,o.mdx)("p",null,"And of course the same issue happens if there are multiple dexes, with the\nadditional problem that classes might be in different dexes too."),(0,o.mdx)("p",null,"Reordering classes to be in the same order as they are accessed at\nruntime has several benefits:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Less IO: IO happens in bigger chunks, the exact size of each chunk read being a function of OS and file system settings. Chunk sizes of 4KB are the minimum, with 128KB being possible with read ahead settings for common file systems. Many classes will be smaller than these chunk sizes and there will be IO for data that is not immediately used"),(0,o.mdx)("li",{parentName:"ul"},"Less memory usage: Memory is allocated at page granularity (4KB). If most of the 4KB page is unused data, the memory usage of the process will be increased. On many Android systems memory is a critical resource and the OS is constantly struggling to free up memory. Inefficient usage of memory can make a whole system behave worse and increased memory usage by an application makes it more likely that the OS will have to kill it at some point to free up enough memory for other applications to run."),(0,o.mdx)("li",{parentName:"ul"},"Less page cache pollution: As mentioned under IO, IO is often performed in coarse chunks. Data read in is buffered in the page cache, which is a limited resource in many typical Android devices. Bringing in data that is not immediately used causes pollution of the page cache and potential eviction of useful data from the application or other applications.")),(0,o.mdx)("h1",{id:"generating-input-data"},"Generating input data"),(0,o.mdx)("p",null,"The flow for generating profiling data is:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Establish a typical use case for your app. This might be a automated test or just the developer starting up the application and performing common interactions with it"),(0,o.mdx)("li",{parentName:"ul"},"getting a heap dump from the running app"),(0,o.mdx)("li",{parentName:"ul"},"parsing the heap dump with the provided script. This generates a text file with the classes loaded by the app and VM in the order that they were loaded")),(0,o.mdx)("p",null,"Note that it is very important that you have compiled the app that you're going\nto be generating the heap dump with the same settings that you use in your\nrelease build, otherwise the class ordering will not reflect reality."),(0,o.mdx)("p",null,"It is equally important that the usage reflects a real-world scenario. Using\nan overly simplistic test or startup scenario will not generate representative\ndata and will not lead to performance improvements."),(0,o.mdx)("p",null,"Note that if you use proguard for obfuscation or another program to the same\nend, you'll have to disable those steps for profiling. Obfuscation is not\nguaranteed to be stable and makes mapping class names from one generated apk\nto the next difficult."),(0,o.mdx)("h2",{id:"step-by-step-on-how-to-generate-class-list"},"Step-by-Step on how to generate class list"),(0,o.mdx)("p",null,"Connect your device to your computer, so you can execute adb commands. You need to have root on your device to execute the dump heap command.\nOn your computer:"),(0,o.mdx)("p",null," // get the process if of your app"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"adb shell ps | grep YOUR_APP_NAME | awk '{print $2}' > YOUR_PID ( if you don't have awk, the second value is the pid of your app)\n")),(0,o.mdx)("p",null," // dump the heap of your app. You WILL NEED ROOT for this step"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"adb root\nadb shell am dumpheap YOUR_PID /data/local/tmp/SOMEDUMP.hprof\n")),(0,o.mdx)("p",null," // copy the heap to your host computer"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"adb pull /data/local/tmp/SOMEDUMP.hprof YOUR_DIR_HERE/.\n")),(0,o.mdx)("p",null," // pass the heap dump to the python script for parsing and printing out the class list\n// Note that the script needs python 3"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"redex/tools/hprof/dump_classes_from_hprof.py --hprof YOUR_DIR_HERE/SOMEDUMP.hprof > list_of_classes.txt\n")),(0,o.mdx)("p",null," If everything worked out, list_of_classes.txt will contain a large number of lines of the form foobar.class\nYou'll note that many of the classes list are actually classes provided by the system and not from your app.\nThis is ok, since the Interdex Pass will ignore any entries for which it cannot find the corresponding classes to in the apk."),(0,o.mdx)("p",null," Note: you must have ",(0,o.mdx)("inlineCode",{parentName:"p"},"enum34")," installed for the script to work."),(0,o.mdx)("h1",{id:"usage"},"Usage"),(0,o.mdx)("p",null,"To enable the Interdex pass for you application, add the following to your config file:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'add "InterDexPass" to passes'),(0,o.mdx)("li",{parentName:"ul"},'add "coldstart',"_",'classes": "list',"_","of","_",'classes.txt" to the config file')),(0,o.mdx)("h2",{id:"options"},"Options"),(0,o.mdx)("p",null,"There are two flags that can be set to influence the behavior of the Interdex pass"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"emit_canaries: This flag controls whether each secondary dex has\na non-functional canary class added. Defaults to false.\nEnable this only if you explicitly know that you need it.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"static_prune: This flag controls whether Interdex attempts to remove classes\nthat have no references to them from the rest of the set of classes in the pgo list."))),(0,o.mdx)("h1",{id:"measuring-benefit"},"Measuring benefit"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install an apk without interdex pass enabled",(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"adb shell ps | grep YOUR_APP_NAME | awk '{ print $2 }' > YOUR_PID\nadb shell dumpsys meminfo YOUR_PID\n"))),(0,o.mdx)("li",{parentName:"ul"},"Note how much memory your app uses and the .dex mmap row"),(0,o.mdx)("li",{parentName:"ul"},"Do all the steps described above and rerun redex with the Interdex Pass enabled and using the profiling data you generated"),(0,o.mdx)("li",{parentName:"ul"},"Install the apk with interdex enabled"),(0,o.mdx)("li",{parentName:"ul"},"start the app and repeat the step to get the meminfo"),(0,o.mdx)("li",{parentName:"ul"},"Note total memory usage and .dex mmap in particular"),(0,o.mdx)("li",{parentName:"ul"},"Hopefully memory usage has gone down!")),(0,o.mdx)("p",null,"If you want performance measurements, you'll have to set up a test for app startup and run it on apks with and without the interdex pass applied."))}m.isMDXComponent=!0}}]);