"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/datavines-website/docs/intro","docId":"intro"},{"type":"category","label":"Get Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Deploy From Source","href":"/datavines-website/docs/get-started/deploy-from-source","docId":"get-started/deploy-from-source"}]},{"type":"category","label":"User Guide","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Quick Start","href":"/datavines-website/docs/user-guide/quick-start","docId":"user-guide/quick-start"},{"type":"link","label":"Local Mode","href":"/datavines-website/docs/user-guide/local-mode","docId":"user-guide/local-mode"}]},{"type":"category","label":"Features","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Catalog","href":"/datavines-website/docs/features/catalog/","docId":"features/catalog/catalog"},{"type":"category","label":"Data Quality Metric","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Single Table Metric","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"column_not_null","href":"/datavines-website/docs/features/metric/single-table-metric/column-not-null","docId":"features/metric/single-table-metric/column-not-null"},{"type":"link","label":"custom_aggregate_sql","href":"/datavines-website/docs/features/metric/single-table-metric/custom-aggregate-sql","docId":"features/metric/single-table-metric/custom-aggregate-sql"}]},{"type":"category","label":"Mutil Table Metric","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"multi_table_value_comparison","href":"/datavines-website/docs/features/metric/multi-table-metric/multi-table-value-comparison","docId":"features/metric/multi-table-metric/multi-table-value-comparison"},{"type":"link","label":"multi_table_accuracy","href":"/datavines-website/docs/features/metric/multi-table-metric/multi-table-accuracy","docId":"features/metric/multi-table-metric/multi-table-accuracy"}]}]},{"type":"category","label":"Engine","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Engine Introduction","href":"/datavines-website/docs/features/engine/engine-introduction","docId":"features/engine/engine-introduction"},{"type":"link","label":"Local Engine","href":"/datavines-website/docs/features/engine/local-engine","docId":"features/engine/local-engine"},{"type":"link","label":"Spark Engine","href":"/datavines-website/docs/features/engine/spark-engine","docId":"features/engine/spark-engine"}]},{"type":"link","label":"SLAs","href":"/datavines-website/docs/features/slas","docId":"features/slas"},{"type":"link","label":"Error Data Storage","href":"/datavines-website/docs/features/error-data-storage","docId":"features/error-data-storage"},{"type":"link","label":"Issues","href":"/datavines-website/docs/features/issues","docId":"features/issues"},{"type":"link","label":"Tag","href":"/datavines-website/docs/features/tag","docId":"features/tag"}]},{"type":"category","label":"Integration","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"DolphinScheduler","href":"/datavines-website/docs/integration/dolphin-scheduler","docId":"integration/dolphin-scheduler"}]},{"type":"category","label":"Development","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Architecture Design","href":"/datavines-website/docs/development/architecture-design","docId":"development/architecture-design"},{"type":"link","label":"Environment Preparation","href":"/datavines-website/docs/development/environment-preparation","docId":"development/environment-preparation"},{"type":"link","label":"Source Module Explanation","href":"/datavines-website/docs/development/source-module-explanation","docId":"development/source-module-explanation"},{"type":"category","label":"Plugin Development","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Metric Develop Guide","href":"/datavines-website/docs/development/plugin/metric-develop","docId":"development/plugin/metric-develop"},{"type":"link","label":"Connector Develop Guide","href":"/datavines-website/docs/development/plugin/connector-develop","docId":"development/plugin/connector-develop"},{"type":"link","label":"Engine Develop Guide","href":"/datavines-website/docs/development/plugin/engine-develop","docId":"development/plugin/engine-develop"},{"type":"link","label":"Notification Develop Guide","href":"/datavines-website/docs/development/plugin/notification-develop","docId":"development/plugin/notification-develop"},{"type":"link","label":"Registry Develop Guide","href":"/datavines-website/docs/development/plugin/registry-develop","docId":"development/plugin/registry-develop"}]}]},{"type":"link","label":"Roadmap","href":"/datavines-website/docs/roadmap","docId":"roadmap"},{"type":"link","label":"FAQ","href":"/datavines-website/docs/faq","docId":"faq"}]},"docs":{"development/architecture-design":{"id":"development/architecture-design","title":"Architecture Design","description":"","sidebar":"tutorialSidebar"},"development/environment-preparation":{"id":"development/environment-preparation","title":"Environment Preparation","description":"Software Requests","sidebar":"tutorialSidebar"},"development/plugin/connector-develop":{"id":"development/plugin/connector-develop","title":"Connector Develop Guide","description":"","sidebar":"tutorialSidebar"},"development/plugin/engine-develop":{"id":"development/plugin/engine-develop","title":"Engine Develop Guide","description":"","sidebar":"tutorialSidebar"},"development/plugin/metric-develop":{"id":"development/plugin/metric-develop","title":"Metric Develop Guide","description":"Metric \u662f Datavines \u4e2d\u4e00\u4e2a\u6838\u5fc3\u6982\u5ff5\uff0c\u4e00\u4e2a Metric \u8868\u793a\u4e00\u4e2a\u6570\u636e\u8d28\u91cf\u68c0\u67e5\u89c4\u5219\uff0c\u6bd4\u5982\u7a7a\u503c\u68c0\u67e5\u548c\u8868\u884c\u6570\u68c0\u67e5\u90fd\u662f\u4e00\u4e2a\u89c4\u5219\u3002Metric \u91c7\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6765\u5b9e\u73b0\u4e00\u4e2a Metric\u3002\u4e0b\u9762\u6211\u4eec\u6765\u8be6\u7ec6\u8bb2\u89e3\u4e00\u4e0b\u5982\u4f55\u81ea\u5b9a\u4e49Metric\u3002","sidebar":"tutorialSidebar"},"development/plugin/notification-develop":{"id":"development/plugin/notification-develop","title":"Notification Develop Guide","description":"","sidebar":"tutorialSidebar"},"development/plugin/registry-develop":{"id":"development/plugin/registry-develop","title":"Registry Develop Guide","description":"","sidebar":"tutorialSidebar"},"development/source-module-explanation":{"id":"development/source-module-explanation","title":"Source Module Explanation","description":"This article gives a detailed introduction to each core module in Datavines","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"","sidebar":"tutorialSidebar"},"features/catalog/catalog":{"id":"features/catalog/catalog","title":"Catalog","description":"","sidebar":"tutorialSidebar"},"features/engine/engine-introduction":{"id":"features/engine/engine-introduction","title":"Engine Introduction","description":"","sidebar":"tutorialSidebar"},"features/engine/local-engine":{"id":"features/engine/local-engine","title":"Local Engine","description":"","sidebar":"tutorialSidebar"},"features/engine/spark-engine":{"id":"features/engine/spark-engine","title":"Spark Engine","description":"","sidebar":"tutorialSidebar"},"features/error-data-storage":{"id":"features/error-data-storage","title":"Error Data Storage","description":"","sidebar":"tutorialSidebar"},"features/issues":{"id":"features/issues","title":"Issues","description":"","sidebar":"tutorialSidebar"},"features/metric/multi-table-metric/multi-table-accuracy":{"id":"features/metric/multi-table-metric/multi-table-accuracy","title":"multi_table_accuracy","description":"","sidebar":"tutorialSidebar"},"features/metric/multi-table-metric/multi-table-value-comparison":{"id":"features/metric/multi-table-metric/multi-table-value-comparison","title":"multi_table_value_comparison","description":"\u4f7f\u7528\u65b9\u6cd5","sidebar":"tutorialSidebar"},"features/metric/single-table-metric/column-not-null":{"id":"features/metric/single-table-metric/column-not-null","title":"column_not_null","description":"\u4f7f\u7528\u65b9\u6cd5","sidebar":"tutorialSidebar"},"features/metric/single-table-metric/custom-aggregate-sql":{"id":"features/metric/single-table-metric/custom-aggregate-sql","title":"custom_aggregate_sql","description":"\u4f7f\u7528\u65b9\u6cd5","sidebar":"tutorialSidebar"},"features/slas":{"id":"features/slas","title":"SLAs","description":"","sidebar":"tutorialSidebar"},"features/tag":{"id":"features/tag","title":"Tag","description":"","sidebar":"tutorialSidebar"},"get-started/deploy-from-source":{"id":"get-started/deploy-from-source","title":"Deploy From Source","description":"Environment preparation","sidebar":"tutorialSidebar"},"integration/dolphin-scheduler":{"id":"integration/dolphin-scheduler","title":"DolphinScheduler","description":"","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Know your data easier!","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Roadmap","description":"V1.1.0","sidebar":"tutorialSidebar"},"user-guide/local-mode":{"id":"user-guide/local-mode","title":"Local Mode","description":"Create config file","sidebar":"tutorialSidebar"},"user-guide/quick-start":{"id":"user-guide/quick-start","title":"Quick Start","description":"Connect DataSource","sidebar":"tutorialSidebar"}}}')}}]);