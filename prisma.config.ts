// prisma.config.ts
export default {
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://gaston_dev:supersecretpassword@localhost:5432/price_tracker?schema=public",
  },
} as any;