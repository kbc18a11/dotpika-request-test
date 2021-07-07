<template>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

import pixelArt from './pixelArt';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const pixcelData = pixelArt();

    async function reqestPostApi() {
      const url = 'http://localhost:5000/api/out-put-pixel-arts/usb';

      try {
        const res = await axios.post(url, { dots: pixcelData });

        console.log(res);
      } catch (e) {
        console.error(e.response);
      }
    }

    onMounted(() => {
      console.log(pixcelData);
      reqestPostApi();
    });
  }
}
</script>
