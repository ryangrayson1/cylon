(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{123:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),r=a.n(l),o=a(140),c=a(148),i=a(141),m=a(137),s=a(145),d=a(124),p=a.n(d),g=(a(125),a(663)),u=a(662),y=a(281),E=(a(126),a(657)),h=a(658),b=(a(127),a(157)),f=[{title:r.a.createElement(r.a.Fragment,null,"Fast & Scalable"),imageUrl:"img/fast.png",description:r.a.createElement(r.a.Fragment,null,"Cylon uses OpenMPI underneath. It provides core data processing operators many times efficiently than current systems.")},{title:r.a.createElement(r.a.Fragment,null,"Designed to be Integrated"),imageUrl:"img/compatible.png",description:r.a.createElement(r.a.Fragment,null,"Cylon is designed to work across different data processing frameworks, deep learning frameworks and data formats.")}],v=[{title:r.a.createElement(r.a.Fragment,null,"Powered by Apache Arrow"),imageUrl:"https://arrow.apache.org/img/arrow.png",description:r.a.createElement(r.a.Fragment,null,"Cylon uses Apache Arrow underneath to represent data.")},{title:r.a.createElement(r.a.Fragment,null,"We have flattened the Curve, The Learning Curve!"),imageUrl:"img/curve.png",description:r.a.createElement(r.a.Fragment,null,"Write in the language you are already familiar with, yet experience the same native performance.")}];function w(e){var t=e.imageUrl,a=e.title,n=e.description,l=e.fixedWidth,c=void 0!==l&&l,i=e.col,m=void 0===i?"col--4":i,d=Object(s.a)(t);return r.a.createElement("div",{className:Object(o.a)("col "+m,p.a.feature)},d&&r.a.createElement("div",{className:"text--left"},r.a.createElement("img",{className:c?p.a.featureImageFixedWidth:p.a.featureImage,src:d,alt:a})),r.a.createElement("h3",null,a),r.a.createElement("p",null,n))}var S=[{world:16,cpp:19.66533333,python:19.61566667,java:20.96333333},{world:32,cpp:10.198,python:10.072,java:10.654},{world:64,cpp:5.241,python:5.310333333,java:5.462333333},{world:128,cpp:3.108333333,python:3.106666667,java:3.139666667}],C=[{worldSize:"1",cylonH:"141.5",cylonS:"164.2",spark:"586.5"},{worldSize:"2",cylonH:"121.2",cylonS:"116.2",spark:"332.8"},{worldSize:"4",cylonH:"61.6",cylonS:"56.5",spark:"207.1"},{worldSize:"8",cylonH:"30.7",cylonS:"27.4",spark:"119.0"},{worldSize:"16",cylonH:"15.0",cylonS:"13.2",spark:"62.3"},{worldSize:"32",cylonH:"8.1",cylonS:"7.0",spark:"39.6"},{worldSize:"64",cylonH:"4.5",cylonS:"4.0",spark:"22.2"},{worldSize:"128",cylonH:"2.8",cylonS:"2.5",spark:"18.1"},{worldSize:"160",cylonH:"2.5",cylonS:"2.3",spark:"18.0"}],k=[{worldSize:"1",cylon:"342.537",spark:"748.567"},{worldSize:"2",cylon:"223.186",spark:"412.414"},{worldSize:"4",cylon:"108.53",spark:"239.747"},{worldSize:"8",cylon:"53.022",spark:"141.44"},{worldSize:"16",cylon:"26.676",spark:"69.525"},{worldSize:"32",cylon:"14.064",spark:"43.651"},{worldSize:"64",cylon:"8.399",spark:"23.895"},{worldSize:"128",cylon:"6.773",spark:"18.384"},{worldSize:"160",cylon:"7.261",spark:"17.572"}];t.default=function(){var e=Object(m.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(c.a,{title:""+t.title,description:""+t.tagline},r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("meta",{property:"og:title",content:""+t.title}),r.a.createElement("meta",{property:"og:description",content:""+t.tagline}),r.a.createElement("meta",{property:"og:image",content:"img/wheel.png"}),r.a.createElement("meta",{property:"og:url",content:"https://cylondata.org"}),r.a.createElement("meta",{property:"twitter:title",content:""+t.title}),r.a.createElement("meta",{property:"twitter:description",content:""+t.tagline}),r.a.createElement("meta",{property:"twitter:image",content:"img/wheel.png"}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))),r.a.createElement("header",{className:Object(o.a)("hero hero--primary",p.a.heroBanner,"custom-background")},r.a.createElement("div",{className:"container header-container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:p.a.buttons},r.a.createElement(i.a,{className:Object(o.a)("button button--outline button--secondary button--lg",p.a.getStarted),to:Object(s.a)("docs/")},"Get Started")),r.a.createElement("img",{src:"img/wheel.svg",className:"header-img"}))),r.a.createElement("main",null,f&&f.length>0&&r.a.createElement("section",{className:p.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},f.map((function(e,t){return r.a.createElement(w,Object(n.a)({key:t},e))}))))),v&&v.length>0&&r.a.createElement("section",{className:p.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(o.a)("col col--4",p.a.feature)},v.map((function(e,t){return r.a.createElement(w,Object(n.a)({key:t},e,{fixedWidth:!0,col:"col--12"}))}))),r.a.createElement("div",{className:Object(o.a)("col col--8",p.a.feature)},r.a.createElement(h.d,null,r.a.createElement(h.b,null,r.a.createElement(h.a,null,r.a.createElement("i",{className:"devicon-cplusplus-plain"})),r.a.createElement(h.a,null,r.a.createElement("i",{className:"devicon-java-plain"})),r.a.createElement(h.a,null,r.a.createElement("i",{className:"devicon-python-plain"}))),r.a.createElement(h.c,null,r.a.createElement(g.a,{language:"cpp",style:u.a,showLineNumbers:!0},'int main(int argc, char *argv[]) {\n  auto mpi_config = new MPIConfig();\n  auto ctx = CylonContext::InitDistributed(mpi_config);\n  std::shared_ptr<Table> table1, table2, joined;\n\n  auto read_options = CSVReadOptions().UseThreads(true);\n  Table::FromCSV(ctx, {\n      "/path/to/csv1.csv",\n      "/path/to/csv2.csv"\n  }, {table1, table2}, read_options);\n\n  auto join_config = JoinConfig::InnerJoin(0, 0);\n  table1->DistributedJoin(table2, join_config, &joined);\n  joined->Print();\n  \n  ctx->Finalize();\n  return 0;\n}')),r.a.createElement(h.c,null,r.a.createElement(g.a,{language:"java",style:u.a,showLineNumbers:!0},'import org.cylondata.cylon.CylonContext;\nimport org.cylondata.cylon.Table;\nimport org.cylondata.cylon.ops.JoinConfig;\n\npublic class DistributedJoinExample {\n                                                \n  public static void main(String[] args) {\n    CylonContext ctx = CylonContext.init();\n\n    Table left = Table.fromCSV(ctx, "/tmp/csv1.csv");\n    Table right = Table.fromCSV(ctx, "/tmp/csv2.csv");\n\n    Table joined = left.distributedJoin(right, new JoinConfig(0, 0));\n    \n    joined.print();    \n    ctx.finalizeCtx();\n  }\n}')),r.a.createElement(h.c,null,r.a.createElement(g.a,{language:"python",style:u.a,showLineNumbers:!0},"from pycylon.data.table import csv_reader\nfrom pycylon.data.table import Table\nfrom pycylon.ctx.context import CylonContext\n\nctx: CylonContext = CylonContext(\"mpi\")\n\ntb1: Table = csv_reader.read(ctx, '/tmp/csv1.csv', ',')\ntb2: Table = csv_reader.read(ctx, '/tmp/csv2.csv', ',')\n\nconfigs = {'join_type':'left', 'algorithm':'hash', \n                'left_col':0, 'right_col':0}\n                \ntb3: Table = tb1.distributed_join(ctx, table=tb2, \n        join_type=configs['join_type'], algorithm=configs['algorithm'],\n        left_col=configs['left_col'], right_col=configs['right_col'])\n        \ntb3.show()\nctx.finalize()")))))))),r.a.createElement("div",{className:"performance-charts custom-background"},r.a.createElement("div",{className:"container performance-charts-content"},r.a.createElement("h3",null,"Written with Performance & Scalability in Mind!"),r.a.createElement(y.a,{naturalSlideWidth:100,naturalSlideHeight:400,isPlaying:!0,infinite:!0,interval:5e3,totalSlides:3},r.a.createElement(y.c,null,r.a.createElement(y.b,{index:0},r.a.createElement("h4",null,"Cross Language Performance"),r.a.createElement("p",null,"Join performance with C++, Java and Python"),r.a.createElement(E.g,{width:"100%",height:330},r.a.createElement(E.b,{data:S},r.a.createElement(E.a,{fill:"#00BCD4",dataKey:"cpp"}),r.a.createElement(E.a,{fill:"#4CAF50",dataKey:"python"}),r.a.createElement(E.a,{fill:"#FF5722",dataKey:"java"}),r.a.createElement(E.i,{dataKey:"world",label:"World Size"}),r.a.createElement(E.j,{label:{value:"time(s)",angle:-90,position:"insideLeft"}}),r.a.createElement(E.d,{verticalAlign:"top",height:36})))),r.a.createElement(y.b,{index:1},r.a.createElement("h4",null,"Distributed Join(Strong Scaling)"),r.a.createElement("p",null,"Cylon(Hash Join) vs Cylon(Sort Join) vs Spark"),r.a.createElement(E.g,{width:"100%",height:330},r.a.createElement(E.f,{data:C},r.a.createElement(E.e,{stroke:"#00BCD4",dataKey:"cylonH"}),r.a.createElement(E.e,{stroke:"#4CAF50",dataKey:"cylonS"}),r.a.createElement(E.e,{stroke:"#FF5722",dataKey:"spark"}),r.a.createElement(E.i,{dataKey:"worldSize"},r.a.createElement(E.c,{value:"World Size",offset:0,position:"insideBottom"})),r.a.createElement(E.j,{label:{value:" time(s)",angle:-90,position:"insideLeft"},domain:[1,"dataMax"],scale:"log"}),r.a.createElement(E.d,{verticalAlign:"top",align:"right",height:36}),r.a.createElement(E.h,null)))),r.a.createElement(y.b,{index:2},r.a.createElement("h4",null,"Distributed Union"),r.a.createElement(E.g,{width:"100%",height:380},r.a.createElement(E.f,{data:k},r.a.createElement(E.e,{stroke:"#00BCD4",dataKey:"cylon"}),r.a.createElement(E.e,{stroke:"#FF5722",dataKey:"spark"}),r.a.createElement(E.i,{dataKey:"worldSize"},r.a.createElement(E.c,{value:"World Size",position:"insideBottom",offset:0})),r.a.createElement(E.j,{label:{value:" time(s)",angle:-90,position:"insideLeft"},domain:[1,"dataMax"],scale:"log"}),r.a.createElement(E.d,{verticalAlign:"top",height:36}),r.a.createElement(E.h,null)))))))))}}}]);