<template>
  <div>
    <span id="busuanzi_container_site_pv">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>
      次
    </span>
    <!-- <span id="busuanzi_container_site_uv">
      本站访客数
      <span id="busuanzi_value_site_uv"></span>
      人
    </span> -->
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Busuanzi script loaded.');
    };
  },
};
</script>
