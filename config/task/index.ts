export default {
  myJob: {
    task: (e) => {
      // eslint-disable-next-line no-console
      console.log(e)
    },
    options: {
      rule: '*/5 * * * * *',
      tz: 'Asia/Shanghai',
    },
  },
}
