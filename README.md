# simpleNodePrismaCrud

# DVD Rental API

A TypeScript-based REST API for managing a DVD rental database using Prisma ORM and PostgreSQL hosted on AWS RDS.

## 🛠 Tech Stack

- **TypeScript** - Strongly typed programming language
- **Express.js** - Web framework for Node.js
- **Prisma ORM** - Next-generation ORM for Node.js and TypeScript
- **PostgreSQL** - Hosted on AWS RDS
- **AWS RDS** - Managed relational database service

## 📋 Features

- Categories Management:
  - List all categories
  - Create new categories
  - Delete categories
- More features coming soon...

## 🚀 Getting Started

1. Clone the repository
```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
# Create a .env file with:
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]"
```

4. Generate Prisma Client
```bash
npx prisma generate
```

5. Run the development server
```bash
npm run dev
# or
yarn dev
```

## 🔄 API Endpoints

### Categories
- `GET /api/getFilmsCategories` - Get all categories
- `POST /api/addCategory` - Create a new category
- `DELETE /api/categories/:id` - Delete a category

## 📝 Environment Variables

```env
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]"
```

## 🛠 Development

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Run in production mode
npm start
```

## 🗄 Database

This project uses the classic DVD Rental database hosted on AWS RDS. The database includes tables for:
- Categories
- Films
- Actors
- Customers
- Rentals
- And more...

## 🛡 Security

- Database credentials are stored in environment variables
- AWS RDS security groups configured for restricted access
- Input validation for all endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT

## 👥 Authors

- [Your Name]

## 🙏 Acknowledgments

- DVD Rental Sample Database
- Prisma Documentation
- AWS RDS Documentation
