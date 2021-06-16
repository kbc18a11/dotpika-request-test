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
    const pixcelData = reactive(pixelArt());

    async function reqestPostApi() {


      const url = 'http://localhost:5000/api/out-put-pixel-arts';

      try {
        const res = await axios.post(url);

        console.log(res);
      } catch (e) {
        console.error(e);
      }
    }

    onMounted(() => {
      console.log(pixcelData);
      reqestPostApi();
    });
  }
}
</script>
