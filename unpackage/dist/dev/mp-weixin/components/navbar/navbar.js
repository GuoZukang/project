"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "navbar",
  setup(__props) {
    const setNavSize = () => {
      common_vendor.index.getSystemInfoSync();
    };
    common_vendor.onBeforeMount(() => {
      setNavSize();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/郭/桌面/project/components/navbar/navbar.vue"]]);
wx.createComponent(Component);
