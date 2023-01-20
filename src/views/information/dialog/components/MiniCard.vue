<template>
  <div class="mini-card">
    <el-card
      class="front"
      :class="{ reversed: reversed }"
      :style="{ transition: 'transform ' + speed + 'ms ease-in-out' }"
    >
      <div>{{ feature }}</div>
    </el-card>
    <el-card
      class="back"
      :class="{ reversed: reversed }"
      :style="{ transition: 'transform ' + speed + 'ms ease-in-out' }"
    >
      <div>背面</div>
    </el-card>
  </div>
</template>

<script>
import myBus from '../../js/myBus.js'

export default {
  props: {
    idx: {
      type: Number,
      default: -1
    },
    feature: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      triggered: false, // 已被触发
      reversed: true, // 当前卡片状态 - 是否被翻转
      interval: '', // 定时对象
      speed: 600,
      ttl: 7000
    }
  },
  mounted() {
    myBus.$on('rolling', (data) => {
      if (data === this.idx && !this.triggered) {
        // 触发标识
        this.triggered = true

        // 开始旋转
        this.start()

        // 定时关闭
        var to = setTimeout(() => {
          this.stop()
          clearTimeout(to)
        }, this.ttl)
      }
    })
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.reversed = !this.reversed
      }, this.speed)
    },
    stop() {
      this.reversed = false
      clearInterval(this.interval)
    }
  }
}
</script>

<style lang="scss" scoped>
.front,
.back {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
}

.front {
  transform: rotateY(0deg);
}

.back {
  margin-top: -300px;
  transform: rotateY(180deg);
}

.front.reversed {
  transform: rotateY(180deg);
}

.back.reversed {
  transform: rotateY(0deg);
}
</style>
