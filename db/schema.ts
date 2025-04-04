import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const accountsTable = pgTable("accounts",{
    id: integer("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull(),
})