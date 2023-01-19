import Task from './task'

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
    tasks: Task,
  },
})
