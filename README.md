# Development

steps to up the development app

1. up the database

```
docker compose up -d
```

2. create a copy of .env.template to .env

3. replace the environmental variables

4. run command `npm install`

5. run command `npm run dev`

6. run prisma commands

```
npx prisma migrate dev
npx prisma generate
```

7. run SEED para [crear la base de datos local](localhost:3000/api/seed).

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
