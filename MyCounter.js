
export default {
    template: `
      <div>
        <button ref="add" @click="count++">+1</button>
        <button ref="sub" @click="count--">-1</button>
        <span class="count">{{ count }}</span>
      </div>
    `,
    props: ['value'],
    data () {
        return {
            count: 0
        }
    },
    watch: {
        count(count) {
            this.$emit('input', count);
        },
        value: {
            handler(value) {
                this.count = value ? value : 0;
            },
            immediate: true
        }
    }
  }
  