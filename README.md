# Development

steps to up the development app

1. up the database

```
docker compose up -d
```

2. rename .env.template to .env

3. replace the environmental variables

4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed).

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
