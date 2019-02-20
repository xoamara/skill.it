# [skill.it](https://skillit-si.herokuapp.com/)

Share your skills, talents, and experience in a whole new way with [skill.it](https://skillit-si.herokuapp.com/).

[skill.it](https://skillit-si.herokuapp.com/) is a cashless skills exchange platform where you can teach others what you are good at and learn something you are interested in in return.

## Dependencies [skill.it](https://skillit-si.herokuapp.com/) utilizes
> * Express
> * EJS Layouts
> * MySQL and Sequelize
> * Nodemailer
> * Socket.io
> * Passport and bcrypt

## Quick Start

1. Clone the repository

```
git clone git@github.com:macdhollister/skill.it.git
cd skill.it
```

2. Install dependencies

```
npm install
npm install sequelize sequelize-cli mysql2 -g
```

3. Run `schema.sql`

4. Edit `config.json` with database configs

5. Run migration and seeding

```
sequelize db:migrate
sequelize db:seed:all
```

6. Launch skill.it

```
node server
```

---

Troubleshooting

To undo a migration or seeding, run the following:

```
sequelize db:migrate:undo:all
sequelize db:seed:undo:all
```

## Visit [skill.it](https://skillit-si.herokuapp.com/) and try it out!

## Contributors

[Mac Hollister](https://github.com/macdhollister/)

[Truc Ly Le](https://github.com/truclyle/)

[Jonathan Davis](https://github.com/JonathanDavis22/)

[Neri Stec](https://github.com/xoamara/)
